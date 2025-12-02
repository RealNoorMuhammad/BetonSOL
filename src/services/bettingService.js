import { supabase } from '../lib/supabaseClient'

// Create a new bet
export const createBet = async (betData) => {
  try {
    const { data, error } = await supabase
      .from('bets')
      .insert([betData])
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error creating bet:', error)
    return { data: null, error }
  }
}

// Get all bets with prediction counts
export const getAllBets = async () => {
  try {
    const { data: bets, error: betsError } = await supabase
      .from('bets')
      .select(`
        *,
        predictions:prediction_choice
      `)
      .order('created_at', { ascending: false })

    if (betsError) throw betsError

    // Get prediction counts for each bet
    const betsWithCounts = await Promise.all(
      bets.map(async (bet) => {
        const { data: predictions, error: predictionsError } = await supabase
          .from('predictions')
          .select('prediction_choice')
          .eq('bet_id', bet.id)

        if (predictionsError) {
          console.error('Error fetching predictions:', predictionsError)
          return { ...bet, choiceA_count: 0, choiceB_count: 0 }
        }

        const choiceA_count = predictions.filter(p => p.prediction_choice === 'A').length
        const choiceB_count = predictions.filter(p => p.prediction_choice === 'B').length

        return {
          ...bet,
          choiceA_count,
          choiceB_count,
          total_predictions: choiceA_count + choiceB_count
        }
      })
    )

    return { data: betsWithCounts, error: null }
  } catch (error) {
    console.error('Error fetching bets:', error)
    return { data: null, error }
  }
}

// Get bets by category
export const getBetsByCategory = async (category) => {
  try {
    const { data, error } = await getAllBets()
    if (error) throw error

    const filteredBets = data.filter(bet => bet.category === category)
    return { data: filteredBets, error: null }
  } catch (error) {
    console.error('Error fetching bets by category:', error)
    return { data: null, error }
  }
}

// Add a prediction to a bet
export const addPrediction = async (betId, bnbAddress, choice) => {
  try {
    // Check if user already predicted on this bet
    const { data: existingPrediction, error: checkError } = await supabase
      .from('predictions')
      .select('id')
      .eq('bet_id', betId)
      .eq('user_bnb_address', bnbAddress)
      .single()

    if (existingPrediction) {
      throw new Error('You have already made a prediction on this bet')
    }

    const { data, error } = await supabase
      .from('predictions')
      .insert([{
        bet_id: betId,
        user_bnb_address: bnbAddress,
        prediction_choice: choice
      }])
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error adding prediction:', error)
    return { data: null, error }
  }
}

// Get predictions for a specific bet
export const getPredictionsForBet = async (betId) => {
  try {
    const { data, error } = await supabase
      .from('predictions')
      .select('*')
      .eq('bet_id', betId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching predictions:', error)
    return { data: null, error }
  }
}

// Subscribe to real-time updates for bets
export const subscribeToBets = (callback) => {
  return supabase
    .channel('bets_changes')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'bets' },
      callback
    )
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'predictions' },
      callback
    )
    .subscribe()
}

// Subscribe to real-time updates for predictions
export const subscribeToPredictions = (betId, callback) => {
  return supabase
    .channel(`predictions_${betId}`)
    .on('postgres_changes',
      { 
        event: '*', 
        schema: 'public', 
        table: 'predictions',
        filter: `bet_id=eq.${betId}`
      },
      callback
    )
    .subscribe()
}
