# 🔧 Troubleshooting Guide for "Failed to load bets"

## Common Issues and Solutions

### 1. **Environment Variables Not Set**
**Problem**: Missing or incorrect Supabase credentials

**Solution**: 
- Check if `.env` file exists in your project root
- Verify the file contains:
```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```
- Make sure there are no spaces around the `=` sign
- Restart your development server after adding/changing .env

### 2. **Database Tables Not Created**
**Problem**: The `bets` and `predictions` tables don't exist

**Solution**: Run this SQL in your Supabase SQL Editor:

```sql
-- Create bets table
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

-- Create predictions table
CREATE TABLE predictions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bet_id UUID NOT NULL REFERENCES bets(id) ON DELETE CASCADE,
  user_bnb_address TEXT NOT NULL,
  prediction_choice TEXT NOT NULL CHECK (prediction_choice IN ('A', 'B')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(bet_id, user_bnb_address)
);
```

### 3. **Row Level Security (RLS) Not Configured**
**Problem**: RLS is blocking access to tables

**Solution**: Run this SQL in your Supabase SQL Editor:

```sql
-- Enable RLS
ALTER TABLE bets ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read bets" ON bets FOR SELECT USING (true);
CREATE POLICY "Anyone can create bets" ON bets FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read predictions" ON predictions FOR SELECT USING (true);
CREATE POLICY "Anyone can create predictions" ON predictions FOR INSERT WITH CHECK (true);
```

### 4. **Check Browser Console**
**Problem**: Need to see detailed error messages

**Solution**: 
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Refresh the Live Bets page
4. Look for error messages that will help identify the issue

### 5. **Test Connection**
**Problem**: Want to verify Supabase connection

**Solution**: The updated code now includes connection testing. Check the browser console for:
- "Testing Supabase connection..." 
- "Supabase connection successful!" or error messages

## Quick Checklist

- [ ] `.env` file exists with correct Supabase URL and key
- [ ] Development server restarted after .env changes
- [ ] `bets` table created in Supabase
- [ ] `predictions` table created in Supabase  
- [ ] RLS policies created and enabled
- [ ] Browser console checked for detailed errors

## Still Having Issues?

If you're still getting errors, please:
1. Check the browser console for specific error messages
2. Verify your Supabase project is active and not paused
3. Make sure you're using the correct project URL and anon key from your Supabase dashboard
