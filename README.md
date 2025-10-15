# MRMNSALT - Salt Brokerage Platform

A comprehensive platform for salt brokerage companies, featuring both a public website and internal application.

## 🏗️ Project Structure

```
MRMNSALT/
├── frontend/
│   └── website/          # React website (public-facing)
├── app/
│   ├── backend/          # Express API server
│   └── frontend/         # Internal app (future development)
├── shared/               # Shared utilities and types
├── database/             # Database migrations and schemas
├── index.js              # Backend server entry point
├── start.ps1             # Windows PowerShell startup script
├── start.sh              # Linux/Mac bash startup script
└── package.json          # Root package with unified scripts
```

## 🚀 Quick Start

### Option 1: Using PowerShell Script (Windows - Recommended)

```powershell
.\start.ps1
```

### Option 2: Using Bash Script (Linux/Mac)

```bash
chmod +x start.sh
./start.sh
```

### Option 3: Using NPM Commands

```bash
# Install all dependencies
npm run install:all

# Start both backend and website
npm run dev

# Or start individually
npm run start:backend    # Backend only
npm run start:website    # Website only
```

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database (Supabase configured)
- npm or yarn

### First Time Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MRMNSALT
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Configure environment variables**
   - Check `.env` file in the root directory
   - Ensure database credentials are correct

4. **Start the application**
   ```bash
   npm run dev
   ```

## 🌐 Access Points

Once running, access the services at:

- **Frontend Website**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both backend and website concurrently |
| `npm run start:backend` | Start backend server only |
| `npm run start:website` | Start frontend website only |
| `npm run install:all` | Install all dependencies (root + website) |

## 🔧 Technology Stack

### Frontend (Website)
- React 18.2
- React Router DOM
- React Icons
- React Scripts (Create React App)

### Backend
- Node.js
- Express 5.1
- PostgreSQL (via pg)
- CORS enabled
- dotenv for environment management

### Database
- PostgreSQL (Supabase)

## 📝 Development Notes

- The backend uses CommonJS modules (`type: "commonjs"`)
- Frontend runs on port 3000 by default
- Backend API runs on port 5000
- Database connection configured via `.env` file

## 🔒 Environment Variables

Ensure your `.env` file contains:
```
DB_HOST=db.bvvquhgqsgxrpwlqgwic.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=your_password_here
PORT=5000
```

## 🚀 Deployment

### Vercel Deployment (Frontend)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the website:
   ```bash
   cd frontend/website
   vercel
   ```

3. Connect your GoDaddy domain in Vercel dashboard:
   - Go to your project settings
   - Add your custom domain
   - Update DNS records in GoDaddy

### Backend Deployment

For production, consider deploying the backend to:
- **Vercel** (Serverless functions)
- **Railway**
- **Render**
- **Heroku**

## 🌐 Custom Domain Setup (GoDaddy)

After deploying to Vercel:

1. Go to Vercel project settings → Domains
2. Add your GoDaddy domain (e.g., `yourdomain.com`)
3. Vercel will provide DNS records
4. In GoDaddy DNS Management, add:
   - **A Record**: `@` → Vercel IP
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (up to 48 hours)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test both frontend and backend
4. Submit a pull request

## 📄 License

ISC

---

**Note**: This project is designed for salt brokerage operations. The `app/` directory contains placeholder structure for future internal application development.
