# 🌿 Bản Hương - Star Anise Essential Oil E-Commerce Platform

A modern e-commerce web platform designed to distribute and promote **100% pure, natural star anise essential oil**, providing users with natural aromatherapy, stress relief, and air purification solutions.

This project was developed as part of the **EXE201 (Experiential Entrepreneurship)** course at **FPT University**.

---

## 🌟 Key Features

- **Storefront & Product Browsing:** Explore pure star anise essential oil products by volume (4ml, 10ml, combos), view high-resolution imagery, and check real-time stock availability.
- **Product Details & Customer Reviews:** In-depth product descriptions, usage instructions, pricing calculations, customer ratings, and verified feedback.
- **Wishlist & Favorites:** Save favorite items to a personalized wishlist for quick access and tracking.
- **Shopping Cart & Checkout:** Seamless cart operations, dynamic quantity updates, address selection (Provinces/Wards), and coupon/promotion code applications.
- **Payment Gateway Integration:** Integrated online payment with QR code and bank transfer via **PayOS**, alongside traditional Cash on Delivery (COD).
- **Order Management & Re-order:** Track real-time order lifecycle status, view detailed purchase history, and instantly **re-order past items** with one click.
- **Authentication & Security:** User registration, standard login, Google Sign-In (OAuth 2.0), password reset via email, and secure session management via JWT.
- **Content & Blog System:** Educational posts and guides on aromatherapy, health benefits of star anise, and sustainable living with rich multimedia.
- **Customer Support & FAQs:** Interactive FAQ system for common inquiries, customer feedback submission, and floating quick-contact channels (Zalo, Messenger, Hotline).
- **Newsletter Subscription:** Email subscription system for receiving the latest discounts, promotional campaigns, and essential oil care guides.
- **Admin Dashboard & Management:**
  - **Analytics & Statistics:** Real-time revenue analytics, order status distributions, and customer growth charts powered by Recharts.
  - **Product & Inventory Management:** Full CRUD operations for products, categories, pricing, and stock.
  - **Order Processing:** Review, approve, update shipping statuses, and manage cancellations.
  - **Blog & Post Management:** Full CRUD blog management with CKEditor 5 rich-text editing and image uploads.
  - **FAQ Management:** Add, edit, organize, and delete frequently asked questions displayed on the storefront.
  - **User & Subscriber Management:** Manage registered user accounts, roles, and marketing subscriber email lists.

---

## 🛠️ Technology Stack

- **Frontend:**
  - **Core & Build Tool:** React 19, @craco/craco
  - **UI & Styling:** Ant Design (v5), React Icons, Lucide React, Custom CSS
  - **State Management & Routing:** React Router DOM (v7), React Context API
  - **Data Visualization & Editors:** Recharts, CKEditor 5 React
  - **Internationalization & Utilities:** i18next (react-i18next), Axios, QRCode.react, react-dropzone
  - **Payment Integration:** PayOS Checkout SDK
- **Backend:**
  - **Runtime & Framework:** Node.js, Express.js (v5)
  - **Database & ORM:** MySQL, Sequelize ORM
  - **Authentication & Security:** JSON Web Token (JWT), Passport.js (Google OAuth 2.0), bcrypt, Helmet, CORS
  - **File Uploads & Media:** Multer
  - **Mailing & AI:** Nodemailer (Gmail SMTP), Google Generative AI (Gemini SDK)
  - **Payment Processing:** PayOS Node SDK & Webhook verification

---

## ⚙️ Installation & Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/TranTuan-ops/ban-huong-personal.git
cd ban-huong-personal
```

### 2. Backend Setup

1. Navigate to the `back-end` directory and install dependencies:
   ```bash
   cd back-end
   npm install
   ```

2. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Configure your database credentials and secret keys:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=banhuong
   JWT_SECRET=your_jwt_secret_key
   ```

3. Import the database schema into MySQL (from `db/` if provided) and start the backend server:
   ```bash
   npm start
   ```
   The backend API runs at: `http://localhost:5000`

### 3. Frontend Setup

1. Open a new terminal, navigate to the `front-end` directory and install dependencies:
   ```bash
   cd front-end
   npm install
   ```

2. Configure environment variables in `.env.local`:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The web application will open at: `http://localhost:3000`

---

## 📂 Project Structure

```text
ban_huong/
├── back-end/                     # Express.js RESTful API Backend
│   ├── config/                   # Database, PayOS, and Passport configurations
│   ├── controllers/              # Request handlers and business logic
│   ├── middleware/               # Auth verification, role checks, file upload
│   ├── models/                   # Sequelize ORM data models (User, Product, Order, etc.)
│   ├── routes/                   # API endpoint definitions
│   ├── uploads/                  # Uploaded assets (products, blog images)
│   ├── .env.example              # Backend environment template
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Server entry point
│
├── front-end/                    # React.js Client Application
│   ├── public/                   # Static assets, branding, and icons
│   ├── src/
│   │   ├── components/           # Reusable components (Header, Footer, Carousel, RichTextEditor)
│   │   ├── locales/              # Multi-language translation dictionaries (en/vi)
│   │   ├── pages/                # Application views
│   │   │   ├── authentication/   # Login, Register, Verify Email
│   │   │   ├── private/          # User Profile & Admin Dashboard views
│   │   │   │   └── admin/        # Analytics, Orders, Posts, Products, FAQs, Subscribers
│   │   │   ├── public/           # Home, ProductList, ProductDetail, Cart, Checkout, Wishlist
│   │   │   │   ├── faq/          # Customer FAQ components
│   │   │   │   ├── post/         # Blog & Article view components
│   │   │   │   └── product/      # Recommended & Best-seller products
│   │   │   └── user/             # Order History, Password Reset
│   │   ├── App.js                # App routing & context configuration
│   │   └── index.js              # Client application entry point
│   ├── .env.example              # Frontend environment template
│   └── package.json              # Frontend dependencies
│
├── .gitignore                    # Git ignore rules
└── README.md                     # Project documentation
```

---

## 👥 Team Members & Contributions

- **Team Members:** EXE201 Project Team
- **Tran Tuan:**
  - **Storefront & Customer Experience:**
    - **Home Page:** Designed and implemented a modern, responsive homepage highlighting brand identity, featured collections, best sellers, and customer testimonials.
    - **Wishlist (Sản phẩm yêu thích):** Implemented the product bookmarking/favoriting system, allowing customers to easily save, manage, and purchase desired products later.

  - **Engagement:**
    - **Customer FAQ Page (Câu hỏi thường gặp cho khách hàng):** Created an intuitive FAQ section with accordion search and categories for common inquiries regarding product usage, shipping, and returns.
  - **Admin & Management System:**
    - **Admin Dashboard & Analytics (Thống kê bên Admin):** Built the administrative analytics dashboard visualizing total revenue, order volume, customer trends, and top-performing products with interactive charts using Recharts.
    - **Post & Blog Management (CRUD Post bên Admin):** Implemented full CRUD management for news and aromatherapy articles, integrated with CKEditor 5 rich-text editing and image upload capabilities.
    - **Admin FAQ Management (Quản lý FAQ bên Admin):** Developed administration tools to create, edit, categorize, and delete frequently asked questions displayed across the platform.

---
