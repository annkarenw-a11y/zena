# ZENA AI - Quick Start Guide

## 🚀 5-Minute Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 14+ (or use Supabase)
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/annkarenw-a11y/zena.git
cd zena
```

### Step 2: Install Dependencies
```bash
# Install frontend
cd frontend && npm install && cd ..

# Install backend
cd backend && npm install && cd ..
```

### Step 3: Setup Environment
```bash
# Copy environment templates
cp .env.example .env

# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
```

### Step 4: Configure Environment Variables

Edit `backend/.env`:
```
DATABASE_URL=postgresql://user:pass@localhost:5432/zena_ai
JWT_SECRET=your_secret_key_here
OPENAI_API_KEY=your_openai_key
GOOGLE_MAPS_API_KEY=your_google_maps_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Edit `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### Step 5: Setup Database
```bash
cd backend

# Generate Prisma client
npx prisma generate

# Create database and run migrations
npx prisma migrate dev --name init

# (Optional) Seed sample data
npm run seed

cd ..
```

### Step 6: Start Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev
# Backend runs on http://localhost:5000

# Terminal 2 - Frontend
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

### Step 7: Access Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Database UI: http://localhost:5555 (Prisma Studio)

## 📚 Common Commands

### Backend
```bash
cd backend

# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint

# Type checking
npm run type-check

# Database
npx prisma studio          # Open database UI
npx prisma migrate dev     # Create new migration
npx prisma db seed         # Seed data
```

### Frontend
```bash
cd frontend

# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🔧 Troubleshooting

### Database Connection Error
```bash
# Check database is running
psql -U postgres

# Verify DATABASE_URL format
DATABASE_URL=postgresql://user:password@localhost:5432/zena_ai
```

### Port Already in Use
```bash
# Backend (change PORT in .env)
PORT=5001 npm run dev

# Frontend (change port)
npm run dev -- -p 3001
```

### Dependencies Issue
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Prisma Issues
```bash
# Regenerate client
npx prisma generate

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

## 📁 Project Structure

```
zena/
├── frontend/               # Next.js app
│   ├── src/
│   │   ├── app/           # Pages
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities
│   │   └── hooks/         # Custom hooks
│   └── package.json
├── backend/                # Express server
│   ├── src/
│   │   ├── index.ts       # Server entry
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route handlers
│   │   ├── services/      # Business logic
│   │   └── config/        # Configuration
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   └── package.json
├── docs/                   # Documentation
└── README.md
```

## 🌐 API Endpoints (Backend)

### Health Check
```
GET /api/health
```

### Authentication (Coming Soon)
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

### User Profile (Coming Soon)
```
GET /api/users/profile
PUT /api/users/profile
```

### AI Chat (Coming Soon)
```
GET /api/chats
POST /api/chats
GET /api/chats/:chatId
POST /api/chats/:chatId/messages
```

## 🚀 Next Steps

1. **Configure APIs**
   - OpenAI API for health assistant
   - Google Maps for hospital finder
   - Cloudinary for file uploads

2. **Implement Features**
   - Authentication system
   - AI chat interface
   - Medical record upload
   - Symptom checker

3. **Deploy**
   - Frontend to Vercel
   - Backend to Railway
   - Database to Supabase

## 📞 Support

- Documentation: `/docs`
- Issues: GitHub Issues
- Email: dev@zena-ai.com

## 📄 License

MIT License - See LICENSE file

---

**Ready to build the future of healthcare? Let's go! 🏥✨**
