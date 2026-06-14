# Database Schema - ZENA AI

## Overview

ZENA AI uses PostgreSQL with Prisma ORM for robust, scalable data management.

## Core Models

### User
Main user account with authentication

- `id`: CUID (primary key)
- `email`: Unique email address
- `password`: Hashed password (optional - for OAuth users)
- `firstName`, `lastName`: User name
- `googleId`: Google OAuth ID
- `emailVerified`: Email verification status
- `role`: user | admin
- `timestamps`: createdAt, updatedAt

### UserProfile
Extended health profile information

- `userId`: Foreign key to User (1:1)
- `age`, `gender`, `height`, `weight`
- `bloodType`
- `allergies`: Array of allergy strings
- `existingConditions`: Array of medical conditions
- `currentMedications`: Array of medications
- `emergencyContact`, `phoneNumber`
- `location`: city, country, latitude, longitude

### Chat
Conversation sessions with AI

- `userId`: Foreign key to User (1:N)
- `title`: Chat title
- `topic`: Chat category
- `isActive`: Boolean flag
- `timestamps`: createdAt, updatedAt

### Message
Individual messages in chats

- `chatId`: Foreign key to Chat
- `userId`: Foreign key to User
- `role`: user | assistant
- `content`: Message text
- `fileUrl`: Optional file attachment
- `citations`: Array of reference URLs
- `createdAt`: Timestamp

### MedicalRecord
User's uploaded medical documents

- `userId`: Foreign key to User
- `title`, `category`: lab_reports | prescriptions | imaging | vaccinations | other
- `fileUrl`: Cloudinary URL
- `fileSize`, `mimeType`
- `recordDate`: Date of medical record
- `extractedText`: OCR-extracted text
- `aiSummary`: AI-generated summary
- `abnormalValues`: Array of flagged values

### Hospital
Healthcare facility directory

- `name`, `type`: hospital | clinic | pharmacy
- `address`, `city`, `country`
- `latitude`, `longitude`: GPS coordinates
- `phoneNumber`, `website`
- `rating`, `reviewCount`
- `googlePlaceId`: Google Maps integration
- `services`: Array of services offered

### SOSContact
Emergency contacts

- `userId`: Foreign key to User
- `name`, `relationship`, `phoneNumber`
- `priority`: Integer priority order

### Notification
User notifications

- `userId`: Foreign key to User
- `type`: medication_reminder | appointment_reminder | health_check | general
- `title`, `message`
- `isRead`: Boolean flag
- `scheduledFor`: Optional scheduled time

### Appointment
Medical appointments

- `userId`: Foreign key to User
- `appointmentDate`: Scheduled date/time
- `duration`: Minutes
- `status`: scheduled | completed | cancelled
- `doctorName`, `hospitalName`
- `reminderSent`: Boolean flag

### AuditLog
System audit trail

- `userId`: Foreign key to User
- `action`: Action performed
- `entity`, `entityId`: What was changed
- `changes`: JSON of changes
- `ipAddress`, `userAgent`: Request metadata

### AdminUser
Admin dashboard users

- `email`: Unique admin email
- `role`: moderator | admin | super_admin
- `permissions`: Array of permission strings

## Indexes

Optimized indexes on:
- `users.email`, `users.googleId`
- `chats.userId`, `chats.createdAt`
- `messages.chatId`, `messages.userId`
- `hospitals.latitude,longitude`
- `appointments.userId`, `appointments.appointmentDate`
- `notifications.userId`, `notifications.isRead`

## Relationships

```
User (1) ─── (1) UserProfile
User (1) ─── (N) Chat
User (1) ─── (N) Message
User (1) ─── (N) MedicalRecord
User (1) ─── (N) SOSContact
User (1) ─── (N) Notification
User (1) ─── (N) Appointment
User (1) ─── (N) AuditLog

Chat (1) ─── (N) Message
```

## Setup

```bash
# Generate Prisma client
npx prisma generate

# Create/update migrations
npx prisma migrate dev --name init

# View database in Studio
npx prisma studio

# Seed sample data
npm run seed
```

## Scaling Considerations

- Connection pooling via Supabase
- Read replicas for analytics
- Partitioning for large tables (messages, audit logs)
- Caching layer (Redis) for frequent queries
- Archival strategy for old records
