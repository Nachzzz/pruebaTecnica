# Onboarding Flow Challenge

This repository contains the implementation of a dynamic **14-step onboarding flow**, developed as a technical challenge. The project replicates the provided Figma design with high fidelity using **Laravel Breeze**, **React**, and **Inertia.js**.

The goal was to replace the default registration page with a complete, multi-step wizard experience that culminates in a Dashboard Preview.

## 🚀 Technologies Stack

- **Frontend:** React, Tailwind CSS, Lucide React (Iconography).
- **Backend:** Laravel 10+, Laravel Breeze, Inertia.js.
- **State Management:** React Hooks (`useState`, `useRef`, `useEffect`).
- **Design System:** Custom Dark Mode with Neon Pink (`#FF004C`) accents.

---

## 🛠️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
- PHP 8.1 or higher
- Composer
- Node.js & NPM
- MySQL

### 1. Clone the repository
```powershell
git clone "https://github.com/Nachzzz/pruebaTecnica.git"
```
```powershell
cd pruebaTecnica
```

2. Install Backend Dependencies
```powershell
composer install
```

3. Configure Environment
```powershell
cp .env.example .env
php artisan key:generate
```

Note: Make sure to configure your database credentials (DB_DATABASE, DB_USERNAME, etc.) in the .env file.

4. Install Frontend Dependencies
```powershell
npm install
```

5. Run Database Migrations
```powershell
php artisan migrate
```

## ▶️ How to Run
You need to run both the Laravel backend server and the Vite frontend build process.

Option A: Standard Development Open two separate terminal instances:

Start Laravel server:

```powershell
php artisan serve
```


Start Vite server:

```powershell
npm run dev
```


Option B: Using Laravel Sail (Docker) If you prefer using Docker:

```powershell
./vendor/bin/sail up -d
```
```powershell
./vendor/bin/sail npm run dev
```

## 👀 How to View the Onboarding Flow
The onboarding flow has been integrated directly into the registration route, replacing the default Breeze view.

Open your browser and navigate to:

http://localhost:8000/register

You will be greeted by Step 1 (Select Role) of the new onboarding wizard.

Complete all 14 steps to experience the full flow, including:

Data collection (Role, Info, Categories, Socials).

Profile Photo upload with instant preview.

Final Step: A live preview of the generated Dashboard.

## 🧪 Key Features Implemented
Multi-Step Wizard: Custom logic to manage state across 14 distinct screens without page reloads.

Custom UI Components:

Accessible Radio Buttons and Toggle Switches styled from scratch to match Figma.

"Neon Pink" active states and Dark Mode styling.

Interactive Dashboard Preview:

Drag-to-Scroll: Implemented custom mouse event logic (useRef) to allow "grab and drag" scrolling on the dashboard tabs (desktop friendly).

Real-time Rendering: The dashboard preview dynamically renders the user's uploaded photo and entered name before account creation.

Input Validation: Real-time logic for limiting category selection (max 3) and form requirements.

## Author
Salto, Jorge Ignacio | Software Developer

🌐 [Portfolio](https://portfolio-nach.vercel.app)

💼 [LinkedIn](https://www.linkedin.com/in/jorge-ignacio-salto-0b29221bb/)
