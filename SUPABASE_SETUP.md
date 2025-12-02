# Supabase Database Setup Instructions

## Overview
This betting system requires two tables in your Supabase database: `bets` and `predictions`.

## Database Schema

### 1. Create the `bets` table

```sql
CREATE TABLE bets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('real-world', 'price-prediction', 'meme-coin')),
  creator_bnb_address TEXT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_bets_category ON bets(category);
CREATE INDEX idx_bets_created_at ON bets(created_at DESC);
CREATE INDEX idx_bets_end_date ON bets(end_date);
```

### 2. Create the `predictions` table

```sql
CREATE TABLE predictions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bet_id UUID NOT NULL REFERENCES bets(id) ON DELETE CASCADE,
  user_bnb_address TEXT NOT NULL,
  prediction_choice TEXT NOT NULL CHECK (prediction_choice IN ('A', 'B')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(bet_id, user_bnb_address) -- Prevent duplicate predictions from same user
);

-- Add indexes for better performance
CREATE INDEX idx_predictions_bet_id ON predictions(bet_id);
CREATE INDEX idx_predictions_choice ON predictions(prediction_choice);
CREATE INDEX idx_predictions_created_at ON predictions(created_at DESC);
```

### 3. Enable Row Level Security (RLS)

```sql
-- Enable RLS on both tables
ALTER TABLE bets ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read bets
CREATE POLICY "Anyone can read bets" ON bets FOR SELECT USING (true);

-- Allow anyone to create bets
CREATE POLICY "Anyone can create bets" ON bets FOR INSERT WITH CHECK (true);

-- Allow anyone to read predictions
CREATE POLICY "Anyone can read predictions" ON predictions FOR SELECT USING (true);

-- Allow anyone to create predictions
CREATE POLICY "Anyone can create predictions" ON predictions FOR INSERT WITH CHECK (true);
```

## Environment Variables

Create a `.env` file in your project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Features Implemented

### Create Bet Page (`/create-bet`)
- ✅ Beautiful form with validation
- ✅ Title, description, BNB address fields
- ✅ Category selection (Real-World Events, Price Prediction, Meme Coin)
- ✅ Start and end date pickers
- ✅ Form validation with error messages
- ✅ Success/error toast notifications
- ✅ Responsive design

### Live Bets Page (`/live-bets`)
- ✅ Grid layout showing all bets
- ✅ Category filtering tabs
- ✅ Real-time updates via Supabase subscriptions
- ✅ Prediction submission with Choice A/B buttons
- ✅ BNB address validation
- ✅ Prediction count display
- ✅ Time remaining countdown
- ✅ Empty state handling
- ✅ Responsive design

### Technical Features
- ✅ Supabase integration with real-time subscriptions
- ✅ Toast notifications with theme support
- ✅ Form validation and error handling
- ✅ Loading states and user feedback
- ✅ Dark/light theme support
- ✅ Mobile-responsive design
- ✅ Duplicate prediction prevention

## Usage Instructions

1. **Set up Supabase**: Create the tables using the SQL above
2. **Configure environment**: Add your Supabase credentials to `.env`
3. **Create bets**: Go to `/create-bet` to create new predictions
4. **View and participate**: Go to `/live-bets` to see all bets and make predictions
5. **Real-time updates**: The Live Bets page updates automatically when new bets or predictions are added

## Database Relationships

- Each bet can have multiple predictions
- Each prediction belongs to one bet
- Users can only make one prediction per bet (enforced by unique constraint)
- Predictions are categorized as Choice A or Choice B
