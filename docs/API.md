# ZENA AI - API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://api.zena-ai.com/api
```

## Authentication
All endpoints (except `/auth/register` and `/auth/login`) require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

---

## Auth Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}

Response: 201 Created
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "token": "jwt_token"
  }
}
```

### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "token": "jwt_token",
    "refreshToken": "refresh_token"
  }
}
```

### Refresh Token
```
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "refresh_token"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "token": "new_jwt_token"
  }
}
```

### Logout
```
POST /auth/logout
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## User Endpoints

### Get Profile
```
GET /users/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "profile": {
      "age": 30,
      "gender": "male",
      "bloodType": "O+",
      "allergies": ["Penicillin"]
    }
  }
}
```

### Update Profile
```
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "profile": {
    "age": 30,
    "gender": "male",
    "bloodType": "O+",
    "allergies": ["Penicillin"],
    "emergencyContact": "+1234567890"
  }
}

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

---

## Chat Endpoints

### Get All Chats
```
GET /chats
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "chat_id",
      "title": "Health Concern",
      "topic": "general_health",
      "createdAt": "2024-01-01T10:00:00Z"
    }
  ]
}
```

### Create Chat
```
POST /chats
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My Health Question",
  "topic": "symptoms"
}

Response: 201 Created
{
  "success": true,
  "data": {
    "id": "chat_id",
    "title": "My Health Question",
    "topic": "symptoms"
  }
}
```

### Get Chat Messages
```
GET /chats/:chatId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "id": "chat_id",
    "messages": [
      {
        "id": "msg_id",
        "role": "user",
        "content": "I have a headache",
        "createdAt": "2024-01-01T10:00:00Z"
      },
      {
        "id": "msg_id",
        "role": "assistant",
        "content": "A headache can have many causes...",
        "createdAt": "2024-01-01T10:01:00Z"
      }
    ]
  }
}
```

### Send Message
```
POST /chats/:chatId/messages
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "I have been feeling dizzy",
  "fileUrl": "https://..." (optional)
}

Response: 201 Created
{
  "success": true,
  "data": {
    "id": "msg_id",
    "role": "user",
    "content": "I have been feeling dizzy",
    "createdAt": "2024-01-01T10:00:00Z"
  }
}
```

---

## Medical Records Endpoints

### Get Medical Records
```
GET /medical-records
Authorization: Bearer <token>
Query: ?category=lab_reports&page=1&limit=10

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "record_id",
      "title": "Blood Test Results",
      "category": "lab_reports",
      "fileUrl": "https://...",
      "aiSummary": "Results show normal values...",
      "createdAt": "2024-01-01T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 15,
    "page": 1,
    "limit": 10
  }
}
```

### Upload Medical Record
```
POST /medical-records
Authorization: Bearer <token>
Content-Type: multipart/form-data

Form Data:
- title: "Blood Test"
- category: "lab_reports"
- file: <binary_file>
- recordDate: "2024-01-01" (optional)

Response: 201 Created
{
  "success": true,
  "data": {
    "id": "record_id",
    "title": "Blood Test",
    "category": "lab_reports",
    "fileUrl": "https://...",
    "extractedText": "Results...",
    "aiSummary": "Summary..."
  }
}
```

### Get Record Details
```
GET /medical-records/:recordId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

### Delete Medical Record
```
DELETE /medical-records/:recordId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Record deleted successfully"
}
```

---

## Hospital Finder Endpoints

### Search Hospitals
```
GET /hospital-finder/search
Query: ?latitude=40.7128&longitude=-74.0060&radius=5&type=hospital

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "hospital_id",
      "name": "City Medical Center",
      "type": "hospital",
      "address": "123 Main St",
      "distance": 2.5,
      "rating": 4.5,
      "phoneNumber": "+1234567890",
      "operatingHours": "24/7"
    }
  ]
}
```

### Get Hospital Details
```
GET /hospital-finder/:hospitalId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

---

## Emergency SOS Endpoints

### Get SOS Contacts
```
GET /emergency-sos/contacts
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "contact_id",
      "name": "Emergency Contact",
      "relationship": "Family",
      "phoneNumber": "+1234567890",
      "priority": 1
    }
  ]
}
```

### Add SOS Contact
```
POST /emergency-sos/contacts
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe",
  "relationship": "Brother",
  "phoneNumber": "+1234567890",
  "priority": 1
}

Response: 201 Created
{
  "success": true,
  "data": { ... }
}
```

### Trigger SOS
```
POST /emergency-sos/trigger
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "I need immediate help"
}

Response: 200 OK
{
  "success": true,
  "message": "Emergency contacts notified"
}
```

---

## Notification Endpoints

### Get Notifications
```
GET /notifications
Authorization: Bearer <token>
Query: ?unread=true&page=1&limit=20

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "notif_id",
      "title": "Appointment Reminder",
      "message": "Your appointment is tomorrow",
      "type": "appointment_reminder",
      "isRead": false,
      "createdAt": "2024-01-01T10:00:00Z"
    }
  ]
}
```

### Mark as Read
```
PUT /notifications/:notificationId/read
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

---

## Appointment Endpoints

### Get Appointments
```
GET /appointments
Authorization: Bearer <token>
Query: ?status=scheduled&page=1&limit=10

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "appt_id",
      "title": "Doctor Checkup",
      "appointmentDate": "2024-02-01T10:00:00Z",
      "status": "scheduled",
      "doctorName": "Dr. Smith"
    }
  ]
}
```

### Create Appointment
```
POST /appointments
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Dental Checkup",
  "appointmentDate": "2024-02-15T14:00:00Z",
  "duration": 30,
  "appointmentType": "in-person",
  "doctorName": "Dr. Johnson",
  "hospitalName": "Dental Care Center",
  "notes": "Regular checkup"
}

Response: 201 Created
{
  "success": true,
  "data": { ... }
}
```

---

## Error Handling

All errors follow this format:
```
{
  "success": false,
  "message": "Error message",
  "error": {
    "code": "ERROR_CODE",
    "details": "Additional details"
  }
}
```

### Common Status Codes
- `200 OK` - Success
- `201 Created` - Resource created
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Missing/invalid token
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

---

## Rate Limiting

- **General**: 100 requests per 15 minutes
- **Auth**: 5 attempts per 15 minutes
- **File Upload**: 10 uploads per hour

Headers returned:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1704110400
```

---

## Pagination

Paginated endpoints support:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)
- `sort`: Sort field (default: `-createdAt`)

Response includes:
```
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 156,
    "pages": 16
  }
}
```

---

## WebSocket Events (Coming Soon)

Real-time chat and notifications via WebSocket connection.

---

**Last Updated**: January 2024
**Version**: 1.0.0
