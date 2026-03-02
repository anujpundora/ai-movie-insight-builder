# 🎬 AI Movie Insight Builder

A full-stack AI-powered web application that generates intelligent audience sentiment insights for any movie using its IMDb ID.

🔗 **Live Demo:** https://ai-movie-insight-builder-two.vercel.app/  
💻 **GitHub Repository:** https://github.com/anujpundora/ai-movie-insight-builder

---

## 🚀 Overview

AI Movie Insight Builder allows users to enter an IMDb ID (e.g., `tt0133093`) and instantly receive:

- 🎥 Movie poster & metadata  
- 🎭 Cast list  
- 📅 Release year & rating  
- 📖 Plot summary  
- 🧠 AI-generated audience sentiment summary  
- 📊 Overall sentiment classification (Positive / Mixed / Negative)

The application integrates external movie APIs with Google Gemini AI to extract structured insights and present them in a cinematic, premium UI.

---

## 🧠 AI Sentiment Pipeline

1. User enters IMDb ID.
2. Backend fetches movie details via OMDb API.
3. Review text is generated/retrieved.
4. Google Gemini analyzes audience sentiment.
5. Structured JSON response is returned:
   - `sentiment`
   - `summary`
   - `highlights`
6. Frontend renders results with animated UI components.

If AI quota is exceeded, the system gracefully falls back to predefined structured insights to ensure uninterrupted functionality.

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
- OMDb API (Movie metadata)

### Deployment
- Vercel (Serverless hosting)

---

## 🎨 UI & Design Highlights

- Cinematic black & gold theme
- Animated starfield background
- Film-reel themed loading animation
- Gold pulse glow during AI processing
- Poster hover cinematic effects
- Fully responsive design (mobile & desktop)
- Clean error handling with toast notifications

---

## 🎥 Try These Example IMDb IDs

If you're testing the application, here are some sample IMDb IDs:

| Movie | IMDb ID |
|-------|---------|
| The Matrix | `tt0133093` |
| The Dark Knight | `tt0468569` |
| Interstellar | `tt0816692` |
| Inception | `tt1375666` |
| Avengers: Endgame | `tt4154796` |

Simply copy and paste any ID into the input field.

---

## ⚙️ Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/anujpundora/ai-movie-insight-builder
cd ai-movie-insight-builder
npm install
2️⃣ Create environment variables

Create a .env.local file in the root directory:

OMDB_API_KEY=your_omdb_key
GEMINI_API_KEY=your_gemini_key
3️⃣ Run locally
npm run dev
📦 API Structure
POST /api/analyze
Request Body
{
  "imdbId": "tt0133093"
}
Response
{
  "success": true,
  "movie": { ... },
  "sentiment": "Mixed",
  "summary": "...",
  "highlights": ["...", "..."]
}
✅ Error Handling & Edge Cases

Invalid IMDb ID validation

Graceful fallback when AI quota is exceeded

API failure handling

Hydration-safe animation logic

Client-side loading states

🧪 Testing

Manual validation for valid and invalid IMDb IDs

AI quota fallback verification

Responsive layout testing (mobile + desktop)

📌 Assumptions

IMDb ID uniquely identifies a movie.

AI sentiment approximates general audience perception.

Fallback insights maintain usability when AI quota is exceeded.

🌟 Future Improvements

Real-time review scraping

Watchlist functionality

Sentiment comparison between movies

Caching layer for performance optimization

Transparent AI explanation breakdown

👨‍💻 Author

Anuj Pundora
Full-stack developer focused on AI-powered web applications.