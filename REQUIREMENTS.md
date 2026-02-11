# What's Your Coffee Personality? - Quiz Requirements

## Overview
A "What's Your Coffee Personality?" quiz that recommends a coffee drink based on the user's personality type. Visitors answer 6 questions and receive a breakdown of all personality percentages with coffee recommendations.

---

## Personality → Coffee Pairings

| # | Personality | Coffee | Tagline |
|---|-------------|--------|---------|
| 1 | Bold Adventurer | Double Espresso | "You live for intensity" |
| 2 | Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| 3 | Social Butterfly | Cappuccino | "Coffee is better with company" |
| 4 | Indulgent Treat | Mocha with Whip | "Coffee is dessert" |

---

## Result Display Style
**Option B: Show all percentages**
- Show all 4 personalities with their percentage scores
- Example: "You're 50% Bold Adventurer, 30% Social Butterfly, 20% Sweet Enthusiast, 0% Indulgent Treat"
- Display all coffee recommendations with their descriptions

---

## Visual Style
**Style 1: Playful & Colorful**
- Bright gradient background (pink/yellow/teal)
- White card with bold colored box shadow
- Rounded corners (32px)
- Bold, chunky font (Nunito)
- Colorful progress bar
- Fun, energetic feel

---

## Images & Icons
- **Images:** None for now (can add later during iteration)
- **Icons:** Yes - emoji icons next to each answer option

---

## Quiz Questions

### Q1: It's Saturday morning. What's your vibe?
- 🏋️ Up at 6am, gym before breakfast → **Bold Adventurer**
- 🛋️ Slow morning, coffee in bed with Netflix → **Indulgent Treat**
- 🎉 Brunch plans with the whole crew → **Social Butterfly**
- 🍰 Homemade pancakes and a sweet treat → **Sweet Enthusiast**

### Q2: Pick a Netflix genre to binge:
- 💥 Action/thriller - the more intense the better → **Bold Adventurer**
- 🌸 Rom-com or feel-good series → **Sweet Enthusiast**
- 😂 Comedy - watching with friends or family → **Social Butterfly**
- 🍿 Whatever's trending and indulgent → **Indulgent Treat**

### Q3: You're at a party. Where are you?
- 🎤 On the dance floor or leading the fun → **Bold Adventurer**
- 🥂 Making rounds, chatting everyone up → **Social Butterfly**
- 🧁 Near the dessert table, obviously → **Sweet Enthusiast**
- 🛋️ Curled up with a drink in the cozy corner → **Indulgent Treat**

### Q4: Pick a color that speaks to you:
- 🔴 Fiery red - bold and intense → **Bold Adventurer**
- 🩷 Soft pink - sweet and optimistic → **Sweet Enthusiast**
- 🟡 Sunny yellow - warm and social → **Social Butterfly**
- 🟤 Rich brown - warm, indulgent, comforting → **Indulgent Treat**

### Q5: Your ideal Friday night:
- 🧗 Something adventurous - escape room, go-karts, axe throwing → **Bold Adventurer**
- 🎂 Dessert bar or fancy bakery with your crew → **Sweet Enthusiast**
- 🍻 Big group dinner, the more the merrier → **Social Butterfly**
- 🛁 Takeout, candles, total indulgence → **Indulgent Treat**

### Q6: Pick a fictional character you vibe with:
- ⚡ Katniss Everdeen (Hunger Games) - fierce and determined → **Bold Adventurer**
- 🌺 Leslie Knope (Parks & Rec) - enthusiastic and sweet → **Sweet Enthusiast**
- 👯 Rachel Green (Friends) - fun, social, fashionable → **Social Butterfly**
- 🐻 Paddington Bear - warm, cozy, loves a treat → **Indulgent Treat**

---

## Scoring Logic
- Each answer maps to one personality type
- Tally all answers at the end
- Calculate percentage for each personality (answers for that personality / total questions × 100)
- Display all 4 results ranked by percentage, highest first
- Each result shows: personality name, percentage, coffee drink, tagline
