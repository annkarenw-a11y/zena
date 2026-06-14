# ZENA AI - Architecture & Design

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (Frontend)                       │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Next.js 15 Application (TypeScript + React 19)         │   │
│  │ ├─ Landing Page                                         │   │
│  │ ├─ Authentication Pages                                 │   │
│  │ ├─ Dashboard                                            │   │
│  │ ├─ Chat Interface                                       │   │
│  │ ├─ Medical Records                                      │   │
��  │ ├─ Hospital Finder                                      │   │
│  │ └─ Settings & Profile                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                    API LAYER (Backend)                           │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Express.js Server (TypeScript)                          │   │
│  │                                                          │   │
│  │  Routes:                                                │   │
│  │  ├─ /api/auth          - Authentication                │   │
│  │  ├─ /api/users         - User management                │   │
│  │  ├─ /api/chats         - Chat sessions                  │   │
│  │  ├─ /api/ai            - AI interactions                │   │
│  │  ├─ /api/medical-records - Medical documents            │   │
│  │  ├─ /api/hospital-finder - Hospital search              │   │
│  │  ├─ /api/emergency-sos - Emergency alerts               │   │
│  │  ├─ /api/notifications - Notifications                  │   │
│  │  └─ /api/admin         - Admin panel                    │   │
│  │                                                          │   │
│  │  Middleware:                                            │   │
│  │  ├─ Authentication (JWT)                                │   │
│  │  ├─ Rate Limiting                                       │   │
│  │  ├─ Validation (Joi)                                    │   │
│  │  ├─ Error Handling                                      │   │
│  │  └─ Logging (Morgan)                                    │   │
│  │                                                          │   │
│  │  Services:                                              │   │
│  │  ├─ Auth Service                                        │   │
│  │  ├─ User Service                                        │   │
│  │  ├─ Chat Service                                        │   │
│  │  ├─ AI Service (OpenAI)                                 │   │
│  │  ├─ File Service (Cloudinary)                           │   │
│  │  ├─ Map Service (Google Maps)                           │   │
│  │  ├─ Email Service                                       │   │
│  │  ├─ Notification Service (Firebase)                     │   │
│  │  └─ Audit Service                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
            ↓              ↓              ↓              ↓
┌──────────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────┐
│   DATABASE       │ │ EXTERNAL     │ │ STORAGE  │ │ MESSAGING    │
│   (PostgreSQL)   │ │ SERVICES     │ │ (Cloud)  │ │ (Firebase)   │
│                  │ │              │ │          │ │              │
│ ┌──────────────┐ │ │ ┌─────────┐ │ │┌────────┐│ │ ┌──────────┐ │
│ │ Users        │ │ │ │ OpenAI  │ │ ││Cloud-  ││ │ │Firebase  │ │
│ │ Profiles     │ │ │ │ API     │ │ ││inary   ││ │ │Cloud     │ │
│ │ Chats        │ │ │ │         │ │ ││        ││ │ │Messaging │ │
│ │ Messages     │ │ │ ├─────────┤ │ │└────────┘│ │ └──────────┘ │
│ │ Medical      │ │ │ │ Google  │ │ │ Google   │ │              │
│ │ Records      │ │ │ │ Maps    │ │ │ Cloud    │ │              │
│ │ Hospitals    │ │ │ │         │ │ │ Storage  │ │              │
│ │ Appointments │ │ │ └─────────┘ │ └──────────┘ │              │
│ │ Notifications│ │ │              │ │          │ │              │
│ │ SOS Contacts │ │ │ ┌─────────┐ │ │ Vercel   │ │              │
│ │ Admin Users  │ │ │ │ Stripe  │ │ │ CDN      │ │              │
│ │ Audit Logs   │ │ │ │ (Future)│ │ │ (Future) │ │              │
│ └──────────────┘ │ │ └─────────┘ │ │          │ │              │
└──────────────────┘ └──────────────┘ └──────────┘ └──────────────┘
```

---

## Data Flow

### User Authentication Flow
```
User Input → Frontend → Validation → Backend → Password Hash → Database
                                      ↓
                                 JWT Token Generation
                                      ↓
                                  Response → Frontend → Store Token
                                                       → Protected Routes
```

### Chat/AI Flow
```
User Message → Frontend → Backend → Validation → OpenAI API
                                      ↓
                                   Response Processing
                                      ↓
                                   Database Store
                                      ↓
                                   Response → Frontend → Display
```

### Medical Record Flow
```
File Upload → Frontend → Validation → Cloudinary → File Storage
                                      ↓
                                   Database Record
                                      ↓
                                   OCR Processing
                                      ↓
                                   AI Summarization
                                      ↓
                                   Database Update → Frontend
```

---

## Database Design

### Entity Relationships
```
User (1) ──── (1) UserProfile
   │
   ├──── (N) Chat
   │         └──── (N) Message
   │
   ├──── (N) MedicalRecord
   │
   ├──── (N) SOSContact
   │
   ├──── (N) Notification
   │
   ├──── (N) Appointment
   │
   └──── (N) AuditLog

Hospital (N)
   ↑
   └──── Referenced by users
```

### Key Indexes
- `User.email` - Authentication lookups
- `Chat.userId` - User chats
- `Message.chatId` - Chat messages
- `Hospital.latitude,longitude` - Location queries
- `Appointment.userId,appointmentDate` - User appointments

---

## API Architecture

### Request Flow
```
Client Request
    ↓
CORS Check
    ↓
Request Logging (Morgan)
    ↓
Authentication (JWT)
    ↓
Rate Limiting
    ↓
Input Validation (Joi)
    ↓
Route Handler
    ↓
Service Layer
    ↓
Database/External APIs
    ↓
Response Formatting
    ↓
Response Logging
    ↓
Send to Client
```

### Error Handling
```
Error Occurs
    ↓
Error Middleware Catches
    ↓
Error Classification (4xx/5xx)
    ↓
Logging
    ↓
Sanitized Response to Client
    ↓
Alert (if critical)
```

---

## Security Architecture

### Layers
1. **Transport**: HTTPS/TLS encryption
2. **Application**: CORS, helmet headers, rate limiting
3. **Authentication**: JWT tokens, bcrypt hashing
4. **Authorization**: Role-based access control
5. **Database**: Connection encryption, parameterized queries
6. **Data**: Sensitive field encryption, audit logging

### Authentication Tokens
```
JWT Structure: header.payload.signature

Payload:
{
  "userId": "cuid",
  "email": "user@example.com",
  "role": "user",
  "iat": 1704110400,
  "exp": 1704715200
}
```

---

## Deployment Architecture

### Production Environment
```
┌──────────────────────────────────────────────────────────────┐
│                    Vercel (Frontend)                          │
│  ├─ Auto-scaling                                              │
│  ├─ Global CDN                                                │
│  ├─ Edge functions                                            │
│  └─ Automatic deployments on push                             │
└──────────────────────────────────────────────────────────────┘
                        ↓ API Requests
┌──────────────────────────────────────────────────────────────┐
│                   Railway (Backend)                           │
│  ├─ Container deployment                                      │
│  ├─ Auto-scaling instances                                    │
│  ├─ Load balancing                                            │
│  ├─ Environment management                                    │
│  └─ Log aggregation                                           │
└──────────────────────────────────────────────────────────────┘
                        ↓ Database Queries
┌──────────────────────────────────────────────────────────────┐
│              Supabase (PostgreSQL)                            │
│  ├─ Managed database                                          │
│  ├─ Automatic backups                                         │
│  ├─ Point-in-time recovery                                    │
│  ├─ Connection pooling                                        │
│  └─ Row-level security                                        │
└─────────────────────���────────────────────────────────────────┘
```

---

## Performance Optimization

### Frontend
- Code splitting by route
- Image optimization (next/image)
- CSS minification
- JavaScript minification
- Lazy loading of components
- Caching strategies

### Backend
- Database query optimization
- Connection pooling
- Redis caching (future)
- API response compression
- Pagination for large datasets
- Index optimization

### Database
- Query indexing
- Denormalization where needed
- Partitioning for large tables
- Connection limits

---

## Scalability Strategy

### Horizontal Scaling
- Frontend: Auto-scale on Vercel
- Backend: Multiple Railway instances with load balancer
- Database: Read replicas for analytics

### Vertical Scaling
- Increase server resources as needed
- Database upgrade to larger instance

### Caching
- Client-side caching (browser)
- Server-side caching (Redis - future)
- CDN caching (images, static assets)

### Database Optimization
- Archival of old records
- Table partitioning
- Query optimization

---

## Monitoring & Observability

```
Metrics Collection
    ↓
┌─────────────────────────────────────┐
│  Performance Monitoring             │
│  ├─ API response times              │
│  ├─ Database query times            │
│  ├─ Error rates                     │
│  ├─ User count                      │
│  └─ Resource utilization            │
└─────────────────────────────────────┘
    ↓
Alerting System
    ↓
Dashboard & Analytics
```

---

## Disaster Recovery

### RTO (Recovery Time Objective): 1 hour
### RPO (Recovery Point Objective): 1 day

**Backup Strategy:**
- Database: Daily automated + PITR enabled
- Code: GitHub version control
- Secrets: Encrypted key management

**Recovery Procedures:**
1. Identify issue
2. Rollback deployment or restore backup
3. Verify data integrity
4. Notify users
5. Post-incident analysis

---

## Compliance & Security

- ✅ HTTPS encryption
- ✅ Data encryption at rest
- ✅ Audit logging
- ✅ GDPR compliance (data export, deletion)
- ✅ HIPAA compliance (user consent, data security)
- ✅ Regular security audits
- ✅ Penetration testing
- ✅ Dependency scanning

---

**Architecture Version**: 1.0
**Last Updated**: June 2024
