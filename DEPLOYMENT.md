# ZENA AI Deployment Guide

## Architecture

```
Frontend (Vercel) ──> Backend API (Railway) ──> Database (Supabase PostgreSQL)
                    ├─ OpenAI API
                    ├─ Cloudinary
                    ├─ Google Maps
                    └─ Firebase
```

## Frontend Deployment (Vercel)

### 1. Connect GitHub Repository
```bash
# Push to GitHub
git push origin main
```

### 2. Deploy to Vercel
```
1. Go to https://vercel.com/new
2. Import zena-ai repository
3. Configure environment variables:
   - NEXT_PUBLIC_API_URL
   - NEXT_PUBLIC_GOOGLE_CLIENT_ID
   - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
4. Deploy
```

### 3. Custom Domain
```
1. Add custom domain in Vercel settings
2. Update DNS records
3. Enable auto-renewal of SSL certificate
```

## Backend Deployment (Railway)

### 1. Setup Railway Project
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init
```

### 2. Configure Environment
```
Create railway.json:
{
  "build": {
    "builder": "nixpacks",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm run start"
  }
}
```

### 3. Database Connection
```
1. Add PostgreSQL plugin in Railway
2. Copy DATABASE_URL
3. Run migrations:
   npx prisma migrate deploy
```

### 4. Environment Variables
```
NEXT_PUBLIC_API_URL
NODE_ENV=production
JWT_SECRET
OPENAI_API_KEY
GOOGLE_MAPS_API_KEY
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL
```

### 5. Deploy
```bash
railway up
```

## Database Setup (Supabase)

### 1. Create Project
```
1. Go to supabase.com
2. Create new project
3. Save connection string
```

### 2. Run Migrations
```bash
DATABASE_URL="your_connection_string" npx prisma migrate deploy
```

### 3. Enable Backups
```
1. Settings > Backup
2. Enable automated daily backups
3. Enable point-in-time recovery
```

### 4. Security
```
1. Enable Row Level Security (RLS)
2. Create security policies
3. Configure firewall rules
```

## Third-Party Integrations

### OpenAI API
```
1. Get API key from https://platform.openai.com/api-keys
2. Set quota and rate limits
3. Monitor usage
```

### Cloudinary
```
1. Create account at https://cloudinary.com
2. Get credentials
3. Setup upload preset for medical records
4. Enable virus scanning
```

### Google APIs
```
1. Create Google Cloud project
2. Enable Maps JavaScript API
3. Enable Geocoding API
4. Create OAuth credentials
5. Configure redirect URIs
```

### Firebase
```
1. Create Firebase project
2. Generate service account key
3. Setup Cloud Messaging
4. Configure notification topics
```

## Monitoring

### Error Tracking (Sentry)
```bash
npm install @sentry/next
```

Configure in next.config.js:
```javascript
withSentryConfig(nextConfig, {
  org: "your-org",
  project: "zena-ai",
})
```

### Performance Monitoring
```
1. Enable Vercel Analytics
2. Setup Railway logs
3. Monitor database performance
```

### Health Checks
```bash
# Monitor endpoint
curl https://api.zena-ai.com/api/health
```

## Scaling

### Frontend
- Auto-scaling on Vercel (automatic)
- CDN edge caching
- Image optimization

### Backend
- Horizontal scaling on Railway
- Load balancing
- Connection pooling
- Redis caching

### Database
- Read replicas for analytics
- Query optimization
- Index tuning
- Archival strategy

## Backup & Recovery

### Database Backups
```
Supabase: Daily automatic backups + PITR
```

### Code Backups
```
GitHub: Version control + releases
```

### Disaster Recovery Plan
1. Backup verification
2. RTO: 1 hour
3. RPO: 1 day
4. Regular recovery drills

## CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run lint
      - run: npm run build
      - run: npm run test
      - run: deploy to production
```

## Rollback Procedure

```bash
# Frontend
vercel rollback

# Backend
railway deployments --rollback

# Database
# Use point-in-time recovery
```

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- API Response Time: < 200ms
- Database Query: < 100ms

## Security Checklist

- [ ] HTTPS enabled everywhere
- [ ] Security headers configured
- [ ] Rate limiting active
- [ ] API key rotation scheduled
- [ ] Audit logging enabled
- [ ] Backup encryption enabled
- [ ] DDoS protection enabled
- [ ] SSL certificate renewed

---

**Questions?** Contact devops@zena-ai.com
