import { supabase } from '../lib/supabaseClient'

// Test Supabase connection
export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('bets')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Supabase connection error:', error)
      return { success: false, error: error.message }
    }
    
    console.log('Supabase connection successful!')
    return { success: true, data }
  } catch (error) {
    console.error('Supabase test failed:', error)
    return { success: false, error: error.message }
  }
}

// Simplified version of getAllBets for debugging
export const getAllBetsSimple = async () => {
  try {
    console.log('Fetching bets...')
    
    const { data: bets, error: betsError } = await supabase
      .from('bets')
      .select('*')
      .order('created_at', { ascending: false })

    if (betsError) {
      console.error('Error fetching bets:', betsError)
      throw betsError
    }

    console.log('Bets fetched successfully:', bets)

    // Add prediction counts
    const betsWithCounts = await Promise.all(
      bets.map(async (bet) => {
        const { data: predictions, error: predictionsError } = await supabase
          .from('predictions')
          .select('prediction_choice')
          .eq('bet_id', bet.id)

        if (predictionsError) {
          console.error('Error fetching predictions for bet', bet.id, ':', predictionsError)
          return { ...bet, choiceA_count: 0, choiceB_count: 0, total_predictions: 0 }
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

    console.log('Bets with counts:', betsWithCounts)
    return { data: betsWithCounts, error: null }
  } catch (error) {
    console.error('Error in getAllBetsSimple:', error)
    return { data: null, error }
  }
}
