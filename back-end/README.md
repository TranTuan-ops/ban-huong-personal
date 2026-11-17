# 📦 Backend API Server - Bản Hương Platform

The RESTful API backend server for the **Bản Hương** essential oil e-commerce platform, built with **Node.js, Express (v5), Sequelize ORM, and MySQL**.

---

## 🚀 Directory Structure

```text
back-end/
├── config/              # Configurations (Database, Passport Google OAuth, PayOS)
├── controllers/         # API request handlers and business logic
│   ├── adminOrder.controller.js
│   ├── adminPost.controller.js
│   ├── adminStats.controller.js
│   ├── cart.controller.js
│   ├── faq.controller.js
│   ├── order.controller.js
│   ├── post.controller.js
│   ├── product.controller.js
│   └── user.controller.js
├── middleware/          # Middlewares (Auth verification, Role check, File uploads)
├── models/              # Sequelize database models & associations
├── routes/              # Express API endpoint routes
├── uploads/             # Static file storage for products and blog articles
├── .env.example         # Template for environment configuration
├── package.json         # Backend dependencies & metadata
└── server.js            # Server bootstrap and entry point
```

---

## ⚙️ Installation & Setup

### 1. Requirements
- Node.js (version 18.x or 20.x+)
- MySQL Server (version 8.0+)

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `back-end` folder by duplicating `.env.example`:
```bash
cp .env.example .env
```

Configure your environment variables:
```env
PORT=5000
NODE_ENV=development
YOUR_DOMAIN=http://localhost:3000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=banhuong

# Authentication & Security
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Gemini AI API
GEMINI_API_KEY=your_gemini_api_key

# Nodemailer SMTP
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_app_password

# PayOS Payment Gateway
PAYOS_CLIENT_ID=your_payos_client_id
PAYOS_API_KEY=your_payos_api_key
PAYOS_CHECKSUM_KEY=your_payos_checksum_key
```

### 4. Start the API Server
```bash
# Production start
npm start

# Development mode with hot-reloading (if nodemon is installed)
npx nodemon server.js
```
The server will run on: `http://localhost:5000`

---

## 📦 Key Dependencies & Libraries

| Package Name | Version | Description |
| :--- | :--- | :--- |
| **express** | ^5.1.0 | Fast, unopinionated, minimalist web framework for Node.js |
| **sequelize** | ^6.37.7 | Promise-based Node.js ORM for MySQL |
| **mysql2** | ^3.14.3 | High-performance MySQL client driver |
| **jsonwebtoken** | ^9.0.2 | Secure JSON Web Token creation and verification |
| **bcrypt** | ^6.0.0 | Password hashing and salt generation |
| **passport** / **passport-google-oauth20** | ^0.7.0 / ^2.0.0 | Authentication middleware for Google OAuth 2.0 Sign-In |
| **@payos/node** | ^2.0.3 | Official PayOS SDK for VietQR and bank transfer payment processing |
| **@google/generative-ai** | ^0.24.1 | Google Gemini SDK for intelligent AI suggestions and assistance |
| **nodemailer** | ^7.0.6 | Email delivery service for user account verification and password resets |
| **multer** | ^2.0.2 | Handling `multipart/form-data` for image and file uploads |
| **helmet** | ^8.1.0 | Securing Express apps by setting various HTTP headers |
| **cors** | ^2.8.5 | Cross-Origin Resource Sharing middleware |
| **socket.io** | ^4.8.1 | Real-time bidirectional event-based communication |
| **morgan** | ^1.10.1 | HTTP request logger middleware |
| **dotenv** | ^17.2.1 | Loads environment variables from `.env` file |

---

## 🛡️ Core Backend Capabilities

- **Relational Data Modeling:** Fully structured database with Sequelize (Users, Products, Orders, OrderItems, Posts, FAQs, Wishlists, Promotions).
- **Authentication & Authorization:** Secure token-based auth with JWT and role-based access control (`admin` vs `customer`).
- **Payment Processing:** PayOS payment link generation, webhook validation, and automatic order status updates.
- **Media Management:** Local file storage for product imagery and blog articles via Multer.
- **Automated Email Notifications:** Transactional emails for account creation and password recovery via Nodemailer.
