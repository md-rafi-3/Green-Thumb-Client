# 🌿 Green-Thumb

**Green-Thumb** একটি আধুনিক, রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন যা উদ্যানপ্রেমী ও গার্ডেনারদের জন্য ডিজাইন করা হয়েছে।  
এখানে ব্যবহারকারীরা বাগান সম্পর্কিত টিপস শেয়ার করতে পারে, অন্যান্য গার্ডেনারদের অনুসরণ করতে পারে এবং মৌসুমী গাইড পেতে পারে।

---

## 🔥 প্রধান ফিচারসমূহ

### 🏠 Home Page
- স্টিকি Navbar যা সব পেজে থাকে  
- Banner Section — Swiper JS দিয়ে স্লাইডার, যা স্বয়ংক্রিয়ভাবে স্লাইড হয়  
- React Simple Typewriter ইফেক্ট যুক্ত Banner Text  
- Featured Gardeners Section — হাইলাইটেড গার্ডেনারদের দেখানো হয়  
- Trending Tips Section — জনপ্রিয় টিপসগুলো দেখানো হয়  
- Seasonal Guide Section — “View Seasonal Guide” বাটনে ক্লিক করলে বিস্তারিত পেজে যায়  
- Join Our Community Section — এখানে Sign Up ও Login অপশন, ইউজার লগইন থাকলে এই সেকশনটি হাইড থাকে  
- CountUp Section — বাগানের সংখ্যা, টিপস সংখ্যা, ইউজার সংখ্যা ইত্যাদি দেখানো হয়  
- Footer — Social Links, Privacy Policy, Cookie Policy, Terms & Conditions এর লিঙ্কসহ

### 🌱 Explore Gardeners Page
- Gardeners এর নাম ও লোকেশন দিয়ে সার্চ করার সুবিধা  
- Gardeners কার্ড ও ফলো অপশন

### 🌸 Browse Tips Page
- Tips ফিল্টার (Difficulty, Category ইত্যাদি অনুযায়ী)  
- Tips টেবিল আকারে প্রদর্শন

### ✍️ Share Tips Page
- শুধু লগইন ইউজাররা Tips শেয়ার করতে পারে  
- বিভিন্ন ইনপুট ফিল্ড যেমন শিরোনাম, বর্ণনা, ক্যাটাগরি, ছবি ইত্যাদি দিয়ে Tips শেয়ার করা যায়

### 👤 My Tips Page
- ইউজারের প্রোফাইল ডিটেইলস দেখা ও আপডেট করার অপশন (নাম, ছবি, বায়ো, এক্সপার্টিজ)  
- ইউজারের শেয়ার করা Tips এর তালিকা, যেখানে Tips এডিট ও ডিলিট করার সুবিধা রয়েছে

### 📄 Tips Details Page
- প্রতিটি Tips এর বিস্তারিত তথ্য  
- Tips লাইক করার ফিচার  
- Tips লেখকের প্রোফাইল দেখা যায়

### 🔐 Authentication
- Email/Password লগইন ও সাইন আপ  
- Google OAuth লগইন/সাইন আপ করার সুবিধা

---

## 👤 Navbar User Interaction
- Navbar এ ইউজারের ছবি দেখানো হয়  
- ছবির উপর Hover করলে ইউজারের নাম টুলটিপ হিসেবে দেখা যায়  
- ছবিতে ক্লিক করলে Dropdown মেনু আসে যেখানে **Profile** ও **Logout** অপশন থাকে  

---

## 🔐 Private Routes
নিম্নলিখিত পেজগুলো শুধুমাত্র লগইন করা ইউজাররা অ্যাক্সেস করতে পারবে:  
- Tips Details Page  
- Share Tips Page  
- My Tips Page

---

## 📱 Responsive Design
- Desktop, Tablet ও Mobile ডিভাইসে সম্পূর্ণ রেসপন্সিভ  
- Tailwind CSS ও DaisyUI দিয়ে ডিজাইন করা

---

## 🛠️ প্রযুক্তি ও লাইব্রেরি

| প্রযুক্তি                | ভার্সন  | ব্যবহার                          |
|-------------------------|---------|--------------------------------|
| React                   | 19.1.0  | Frontend framework             |
| React Router            | 7.6.0   | Routing                        |
| React Helmet Async      | 2.0.5   | SEO meta tags                  |
| Firebase                | 11.8.1  | Authentication ও backend       |
| Tailwind CSS            | 4.1.7   | Styling                       |
| DaisyUI                 | 5.0.35  | Tailwind CSS UI plugin         |
| Swiper                  | 11.2.7  | Slider / Carousel              |
| React CountUp           | 6.5.3   | Animated counters              |
| React Toastify          | 11.0.5  | Toast notifications            |
| SweetAlert2             | 11.21.2 | Beautiful alerts               |
| AOS (Animate On Scroll) | 2.3.4   | Scroll animations             |
| React Icons             | 5.5.0   | Icon library                   |
| React Simple Typewriter | 5.0.1   | Typewriter effect              |

---
