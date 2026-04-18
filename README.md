# 🌱 Urban Farming Marketplace Backend

A scalable backend system for an Urban Farming platform where users can buy produce, rent farming spaces, track plant growth, and interact with a community.
Built using Express.js, Prisma ORM, and PostgreSQL.

## 🚀 Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (ADMIN, VENDOR, CUSTOMER)
- Secure password hashing

### 👨‍🌾 Vendor Management
- Users can apply to become vendors
- Admin approval required
- Certification system for vendors

### 🥕 Product Management
- Vendors can create, update, delete products
- Admin approval required before products are visible
- Customers can only purchase approved products

### 🏡 Rental System
- Vendors can list farm spaces
- Customers can rent spaces
- Availability-based booking system (assignment-compliant)

### 📦 Order System
- Customers can order products
- Admin can update order status (PENDING → COMPLETED)
- Only approved products can be ordered

### 🌿 Plant Tracking (Real-time Concept)
- Users can track plant growth stages
- Update plant health and progress
- Reflects real-time state via API updates

### 🧑‍🤝‍🧑 Community Module
- Users can create, update, delete posts
- Share farming experiences

### 🛡️ Security Features
- Rate limiting on sensitive routes
- Centralized error handling
- Input validation
- Role-based middleware

## 🧰 Tech Stack

- Backend Framework: Express.js
- ORM: Prisma
- Database: PostgreSQL
- Authentication: JWT
- Validation: Custom middleware

## 📁 Project Structure

```text
src/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── vendor/
│   ├── produce/
│   ├── rental/
│   ├── order/
│   ├── community/
│   ├── certification/
│   ├── plant/
│   └── admin/
├── middleware/
├── utils/
├── config/
└── routes/
```

## ⚙️ Installation & Setup

```bash
git clone https://github.com/DurjoyGH/Urban_Farming_Backend
cd Urban_Farming_Backend
npm install
```

## 🔧 Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
JWT_EXPIRES=7d
PORT=5000
```

You can change `PORT` to your preferred port.

## 🗄️ Database Setup

```bash
npx prisma migrate dev
npx prisma generate
```

## 🌱 Seeder

Populate database with:
- 3 roles (ADMIN, VENDOR, CUSTOMER)
- 10 vendors
- 100 products

```bash
npx prisma db seed
```

## ▶️ Run Server

```bash
cd src
node server.js
```

## 📬 API Documentation

Postman Collection included:
- `urban-farming-postman-collection.json`

Includes:
- Auth (Register/Login)
- Vendor creation & approval
- Product CRUD + approval
- Orders
- Rentals
- Plant tracking
- Community posts

Detailed API response and performance strategy doc:
- [docs/api-response-performance-strategy.md](docs/api-response-performance-strategy.md)

## 📦 API Response Structure

All APIs follow a consistent format:

```json
{ "success": true, "message": "Operation successful", "data": {} }
```

## ❌ Error Response

```json
{ "success": false, "message": "Error message" }
```

Handled via centralized error middleware.

## ⚡ Performance Strategy

- Pagination for large data (products, posts)
- Optimized Prisma queries (select, include)
- Rate limiting on sensitive endpoints
- Minimal DB calls per request
- Avoided unnecessary joins

## 📊 Benchmark (Basic)

- Tested locally using Postman
- Average response time: 50–150ms
- Scalable structure with pagination
- Suitable for moderate traffic

## 🔮 Future Improvements

- Redis caching
- Database indexing
- Load balancing

## ⚠️ Design Decisions

### Rental System

Rental is implemented using:

```text
availability = true/false
```

(No separate booking table as per assignment constraints)

### Plant Tracking

Implemented as an extension module to support:
- Growth stage tracking
- Health monitoring
- Real-time updates via API

## 🔐 Rate Limiting

Applied on:
- Auth routes (login/register)
- Order creation
- Rental booking
- Community posting
- Admin actions

## 👨‍💻 Author

Tarin Prosad Ghosh  
CSE, Jashore University of Science and Technology

## 📌 Conclusion

This project demonstrates:
- Clean architecture
- Scalable backend design
- Real-world business logic
- Secure API implementation

⭐ Thank you for reviewing this project!
