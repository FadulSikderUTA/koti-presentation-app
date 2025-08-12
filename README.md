# Koti Presentation System

Professional presentation system for **Koti Credit Bureau** featuring business plan, technical architecture, and interactive credit scoring framework presentations.

## 🚀 Features

- **Password Protected Access** - Secure authentication system with session management
- **Business Plan Presentation** - 20 comprehensive slides covering market opportunity, financial projections, and strategic roadmap
- **Credit Scoring Framework** - Interactive visualization of Koti's 5-phase credit scoring methodology
- **Professional Design System** - McKinsey-style aesthetic with smooth animations and responsive design
- **Multi-Page Architecture** - Seamless navigation between different presentation types

## 🛠 Technology Stack

- **Framework:** Next.js 15.4.6 with React 19.1.0
- **Styling:** Tailwind CSS 3.4.17 with custom presentation theme
- **Animation:** Framer Motion 12.23.12 for slide transitions and interactions
- **Authentication:** Custom password protection with CryptoJS SHA256 hashing
- **Icons:** Lucide React with Radix UI primitives
- **Charts:** Chart.js for data visualization

## 🔧 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FadulSikderUTA/koti-presentation-app.git
cd koti-presentation-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables (see [Environment Variables](#environment-variables) section)

5. Start development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌍 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Password Protection (Required)
# SHA256 hash of your chosen password
NEXT_PUBLIC_ENCRYPTED_PASSWORD=your_sha256_password_hash_here

# Session Configuration (Optional)
# Session duration in minutes (default: 30)
NEXT_PUBLIC_SESSION_DURATION_MINUTES=30
```

### Generating Password Hash

Use the included script to generate a SHA256 hash for your password:

```bash
node scripts/generate-password-hash.js your_password_here
```

This will output the hash that you should use for `NEXT_PUBLIC_ENCRYPTED_PASSWORD`.

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_ENCRYPTED_PASSWORD`: Your SHA256 password hash
   - `NEXT_PUBLIC_SESSION_DURATION_MINUTES`: Session duration (optional, default: 30)

3. Deploy automatically on every push to main branch

### Other Platforms

The application is a standard Next.js app and can be deployed on:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Next.js

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── business-plan/           # Business presentation slides
│   ├── credit-scoring/          # Interactive credit scoring demo
│   ├── globals.css             # Global styles and presentation theme
│   └── page.tsx                # Main landing page
├── components/                  # React components
│   ├── slides/                 # Presentation slide components
│   ├── credit-scoring/         # Credit scoring visualization components
│   ├── PasswordForm.tsx        # Password protection UI
│   └── ProtectedRoute.tsx      # Authentication wrapper
├── contexts/                   # React contexts
│   └── AuthContext.tsx         # Authentication state management
├── scripts/                    # Utility scripts
│   └── generate-password-hash.js # Password hash generator
└── public/                     # Static assets
    └── team/                   # Team member photos
```

## 🔐 Security Features

- **Password Protection:** SHA256 hashed passwords with secure client-side validation
- **Session Management:** Configurable session timeout with automatic logout
- **Secure Storage:** No sensitive data stored in localStorage beyond session timestamps
- **Environment Variable Protection:** Sensitive configuration kept in environment variables

## 🎨 Design System

- **Color Scheme:** McKinsey-inspired gradient theme (green to teal)
- **Typography:** Roboto font family with professional weight hierarchy
- **Layout:** Responsive design optimized for desktop, tablet, and mobile
- **Animations:** Smooth Framer Motion transitions and hover effects

## 📊 Presentation Content

### Business Plan (20 Slides)
1. Title & Company Overview
2. Mission Statement
3. Problem Statement
4. Market Data & Opportunity
5. Our Solution
6. Business Solutions
7. Value Proposition
8. Revenue Model
9. Market Opportunity
10. Customer Profiles
11. Go-to-Market Strategy
12. Implementation Timeline
13. Financial Projections
14. Capital Plan
15. Profitability Model
16. **Scoring Component** (Trinity Scoring App)
17. Market Traction
18. Competitive Analysis
19. Team Overview
20. Contact Information

### Credit Scoring Framework
Interactive 5-phase methodology visualization:
- Business Objectives Definition
- Target Definition & Criteria
- Data Collection Ecosystem
- Model Development & Validation
- Implementation & Monitoring

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📝 License

This project is proprietary software of Koti Credit Bureau.

## 🤝 Contributing

This is a private project. For internal development questions, please contact the development team.

---

**Koti Credit Bureau** • www.kotibd.com • © 2025
