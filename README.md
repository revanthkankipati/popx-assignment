# PopX - React Mobile App

A pixel-perfect mobile application built with React, matching an Adobe XD design prototype. Features a complete user flow from landing to profile with form validation, localStorage persistence, and profile photo upload.

## Tech Stack

- **React 19** with Vite
- **React Router v7** for client-side navigation
- **Poppins** font for typography
- **Vercel** for deployment

## Screens

| Screen | Route | Description |
|--------|-------|-------------|
| Landing | `/` | Welcome screen with Create Account / Login buttons |
| Signup | `/signup` | Registration form with validation |
| Login | `/login` | Login form with credential validation |
| Profile | `/profile` | User profile with photo upload |

## Features

### UI/UX
- **375×812 mobile frame** (iPhone 12 Pro) centered on desktop
- **Floating labels** on all input fields with purple accents
- **Disabled button states** — buttons appear gray until required fields are filled
- **Responsive layout** — flex column with button pinned to bottom
- **Dashed dividers** matching the design spec

### Form Validation
- **Full Name** — required, minimum 3 characters
- **Phone Number** — required, 10-digit format (`/^[0-9]{10}$/`)
- **Email** — required, valid email format
- **Password** — required, minimum 6 characters
- **Agency Selection** — required radio buttons (defaults to Yes)
- Inline error messages below each field

### Data Persistence
- All user data saved to **localStorage**
- Data persists across page refreshes
- Login validates against stored credentials

### Profile Photo Upload
- Click the camera icon on the profile avatar
- Upload any image file
- Preview updates instantly
- Saved as base64 in localStorage
- Fallback to initials when no photo is set

## App Flow

```
Landing → Signup → Profile → Login → Profile
```

Users can:
1. Create an account via the Signup form
2. View their profile with saved data
3. Log out and log back in with their credentials
4. Upload a profile photo from the Profile screen

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── PhoneFrame.jsx
│   ├── FloatingInput.jsx
│   └── Button.jsx
├── pages/             # Route pages
│   ├── Welcome.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   └── Profile.jsx
├── styles/
│   └── app.css        # Global styles
├── App.jsx            # Router setup
└── main.jsx           # Entry point
```

## Deployment

Live on Vercel: [https://popx-app-xi-nine.vercel.app](https://popx-app-xi-nine.vercel.app)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
