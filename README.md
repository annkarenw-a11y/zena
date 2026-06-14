# ZENA AI - Your AI Health Companion 🏥

A production-ready healthcare AI web application that provides trusted health information, symptom guidance, medical report analysis, and healthcare support.

## 🌟 Features

- **AI Medical Assistant** - ChatGPT-style healthcare conversations
- **Symptom Checker** - Intelligent symptom analysis with urgency levels
- **Medical Report Analysis** - OCR-powered lab report interpretation
- **Medical Records** - Secure document storage and management
- **Hospital Finder** - Location-based healthcare facility discovery
- **Emergency SOS** - One-touch emergency contact system
- **Health Dashboard** - Personalized health metrics and tracking
- **Admin Dashboard** - Comprehensive user and content management

## 🛠️ Tech Stack

**Frontend:** Next.js 15 • React 19 • TypeScript • Tailwind CSS • Framer Motion
**Backend:** Node.js • Express.js • TypeScript
**Database:** PostgreSQL • Prisma ORM
**AI:** OpenAI API
**Storage:** Cloudinary
**Maps:** Google Maps API
**Notifications:** Firebase Cloud Messaging

## 📦 Project Structure

```
zena/
├── frontend/                    # Next.js application
│   ├── app/                    # App router pages
│   ├── components/             # React components
│   ├── lib/                    # Utilities
│   ├── hooks/                  # Custom hooks
│   └── public/                 # Static assets
├── backend/                     # Express server
│   ├── src/
│   │   ├── routes/             # API endpoints
│   │   ├── controllers/        # Handlers
│   │   ├── middleware/         # Auth & validation
│   │   ├── services/           # Business logic
│   │   └── config/             # Configuration
│   └── prisma/                 # Database schema
└── docs/                        # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. **Clone & Install**
```bash
git clone https://github.com/annkarenw-a11y/zena.git
cd zena

# Frontend
cd frontend && npm install && cd ..

# Backend
cd backend && npm install && cd ..
```

2. **Environment Setup**
```bash
# Copy examples
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# Edit with your API keys
```

3. **Database Setup**
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

4. **Start Development**
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🎨 Brand Identity

**Colors:**
- Primary Red: `#E53946`
- Black: `#111111`
- Gray: `#B8B8B8`
- White: `#FFFFFF`

**Typography:** Poppins font family

**UI Style:** Modern, clean, glassmorphism with 12-20px rounded corners

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Security Guidelines](./docs/SECURITY.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## ⚕️ Medical Disclaimer

**ZENA AI is an educational tool, NOT a medical device.**
- Provides information only
- Not for diagnosis or treatment
- Always consult healthcare professionals
- Emergency: Contact local emergency services immediately

## 🔒 Security

- JWT authentication
- bcrypt password hashing
- HTTPS/TLS encryption
- Rate limiting
- Input validation
- HIPAA/GDPR compliant

## 📄 License

MIT License - See LICENSE file

---

**ZENA AI** - Your Personal AI Health Companion ✨
