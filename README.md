# Velvet Spoon 🍽️

A modern MERN Stack Restaurant Application built using React, Node.js, Express.js, and MongoDB Atlas.

---

# 🚀 Features

✅ Responsive Restaurant UI  
✅ Reservation System  
✅ MongoDB Database Integration  
✅ Menu Filtering  
✅ Dish Search Functionality  
✅ Testimonials Section  
✅ Scroll To Top Feature  
✅ Toast Notifications  
✅ Mobile Responsive Navbar  

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router DOM
- React Scroll
- React Hot Toast
- React Icons

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- Validator

---

# 📂 Project Structure

```bash
Restaurant Application/
│
├── backend/
│   │
│   ├── config/
│   │   └── config.env
│   │
│   ├── controller/
│   │   └── reservation.js
│   │
│   ├── database/
│   │   └── db.js
│   │
│   ├── error/
│   │   └── error.js
│   │
│   ├── models/
│   │   └── reservationSchema.js
│   │
│   ├── routes/
│   │   └── reservationRoute.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── WhoAreWe.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── Success.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── restApi.json
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Ashika-1010/Velvet-Spoon-Restaurant.git
```

---

# 🔹 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create:

```bash
backend/config/config.env
```

Add:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173

MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/restaurantDB?retryWrites=true&w=majority
```

---

# 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 API Endpoint

## Reservation API

```bash
POST /api/v1/reservation/send
```

---

# 🔐 Security

The following are ignored using `.gitignore`:

```bash
node_modules/
config.env
.env
```

---

# 👩‍💻 Author

Ashika Shetty

Built with ❤️ using MERN Stack
