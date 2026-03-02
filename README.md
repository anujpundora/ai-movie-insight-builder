# 🎬 AI Movie Insight Builder

A full-stack AI-powered web application that generates intelligent audience sentiment insights for any movie using its IMDb ID.

🔗 **Live Demo:** https://ai-movie-insight-builder-two.vercel.app/

---

## 🚀 Overview

AI Movie Insight Builder allows users to enter an IMDb ID (e.g., `tt0133093`) and instantly receive:

- 🎥 Movie poster & metadata  
- 🎭 Cast list  
- 📅 Release year & rating  
- 📖 Plot summary  
- 🧠 AI-generated audience sentiment summary  
- 📊 Overall sentiment classification (Positive / Mixed / Negative)

The application combines external movie data APIs with Google Gemini AI to extract meaningful insights and present them in a cinematic, premium UI.

---

## 🧠 AI Sentiment Pipeline

1. User enters IMDb ID
2. Backend fetches movie details via OMDb API
3. Review text is generated / retrieved
4. Google Gemini API analyzes sentiment
5. Structured JSON insight is returned:
   - `sentiment`
   - `summary`
   - `highlights`
6. Frontend renders results with animated UI components

If AI quota is exceeded, the system gracefully falls back to predefined structured insights to maintain functionality.

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React (Client Components)
- Tailwind CSS
- Framer Motion (Cinematic animations)

### Backend
- Next.js API Routes
- Node.js runtime

### AI Integration
- Google Gemini API

### External Data
- OMDb API (movie metadata)

### Deployment
- Vercel (Serverless hosting)

https://ai-movie-insight-builder-two.vercel.app/
---

## 🎨 UI & Design Highlights

- Cinematic black & gold theme
- Animated starfield background
- Film-reel themed loading animation
- Gold pulse glow during AI processing
- Poster hover cinematic effects
- Responsive design (mobile + desktop)
- Clean error handling with toast notifications

---

## ⚙️ Local Setup

Clone repository:

```bash
git clone <https://github.com/anujpundora/ai-movie-insight-builder>
cd ai-movie-insight-builder
npm install

Create a .env.local file:

OMDB_API_KEY=your_omdb_key
GEMINI_API_KEY=your_gemini_key

Run locally:

npm run dev
📦 API Structure
POST /api/analyze

Request Body:

{
  "imdbId": "tt0133093"
}

Response:

{
  "success": true,
  "movie": { ... },
  "sentiment": "Mixed",
  "summary": "...",
  "highlights": ["...", "..."]
}
✅ Error Handling

Invalid IMDb ID validation

Graceful AI quota fallback

API error handling

Hydration-safe animations

Client-side loading states

🧪 Testing

Manual validation for valid & invalid IMDb IDs

Quota-limit fallback testing

Responsive layout verification

📌 Assumptions

IMDb ID uniquely identifies a movie

AI sentiment approximates overall audience opinion

Fallback insights maintain usability when AI quota is exceeded

🌟 Future Improvements

Real-time review scraping

User watchlist

Sentiment comparison between movies

Caching layer for performance optimization

AI explanation transparency

👨‍💻 Author

Anuj Pundora
Full-stack developer focused on AI-powered web applications.