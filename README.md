# 🌿 Green Thumb - Gardening Tips & Community Website

## 🌱 Project Overview

**Green Thumb** is a vibrant gardening tips and community platform for gardening enthusiasts. Users can explore tips, share their own, manage profiles, and connect with fellow gardeners. The site is fully responsive and works beautifully across desktop, mobile, and tablet devices.

---

## 🔑 Key Features

### 🏠 Home Page
- Sticky Navbar displaying user's profile picture
- Banner with Swiper.js slider and React Typewriter effect
- **Featured Gardeners** section showcasing top gardeners
- **Trending Tips** section displaying popular tips
- **Seasonal Guide** section with a "View Seasonal Guide" button
- **Join Our Community** section (hidden if user is logged in)
- **CountUp** stats section with site insights
- Footer includes social links, privacy policy, cookie policy, and terms & conditions

### 🔝 Navbar Features
- Hover over profile picture shows user name
- Click on profile picture reveals profile and logout options

### 🔍 Explore Gardeners Page
- Search by name or location
- Gardener cards with follow option

### 📚 Browse Tips Page
- Filter tips by difficulty level
- Tips presented in table layout

### ✍️ Share Tips Page
- Logged-in users can submit new gardening tips

### 🙋 My Tips Page
- View and update user profile (name, photo, bio, expertise)
- View, edit, and delete own shared tips

### 🔐 Login & Signup Pages
- Google authentication support
- User registration
- Password reset feature

### 📄 Tips Details Page
- View detailed tip content
- Like tips (requires login)
- View tip author’s profile

### 🛡️ Private Routes
- `Tips Details`, `Share Tips`, and `My Tips` are restricted to logged-in users

---

## 🧰 Technologies & Libraries Used

| Library / Package            | Version   | Purpose                          |
|-----------------------------|-----------|----------------------------------|
| React                       | 19.1.0    | Frontend UI                      |
| React Router                | 7.6.0     | Routing                          |
| Firebase                    | 11.8.1    | Backend & Authentication         |
| Tailwind CSS + DaisyUI      | 4.1.7     | Styling and UI Components        |
| Swiper                      | 11.2.7    | Carousel/Slider                  |
| React CountUp               | 6.5.3     | CountUp animation                |
| React Toastify              | 11.0.5    | Toast notifications              |
| SweetAlert2                 | 11.21.2   | Custom alert modals              |
| AOS                         | 2.3.4     | Scroll animation                 |
| React Icons                 | 5.5.0     | Icons library                    |
| React Simple Typewriter     | 5.0.1     | Typewriter effect                |
| React Tooltip               | 5.28.1    | Tooltip features                 |
| React Helmet Async          | 2.0.5     | Document head management         |

---

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/green-thumb-client.git
```

2. **Navigate to the project folder:**

```bash
cd green-thumb-client
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set up Firebase config in `.env` file:**

```ini
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_id
VITE_APPID=your_app_id
```

5. **Start the development server:**

```bash
npm run dev
```

---

## 🔗 Live Website

🌐 [Green Thumb Live Site](https://green-thumb-auth.web.app/)

## 🗂️ Server Repository

📦 [Server Code ](https://github.com/md-rafi-3/green-Thumb-Express-Server)
