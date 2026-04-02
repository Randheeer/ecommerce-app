# E‑Commerce App – Full‑Stack DevOps Project

A complete e‑commerce web application with user authentication, product management, and order processing. Deployed to Azure with a fully automated CI/CD pipeline.

## 🚀 Live Demo
[https://ecommerce-app-fury.azurewebsites.net](https://ecommerce-app-fury.azurewebsites.net)

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **Database:** Azure Cosmos DB (MongoDB API)
- **Containerization:** Docker
- **Cloud Platform:** Azure (App Service, Container Registry)
- **CI/CD:** GitHub Actions

## 📦 Key Features
- User registration / login with JWT
- Product listing and detail pages
- Admin product management (create, edit, delete)
- Shopping cart (basic)
- Order placement and history
- Responsive UI

## 🔧 Local Development
1. Clone the repo
2. Install dependencies: `cd backend && npm install`, `cd frontend && npm install`
3. Set up environment variables (see `.env.example`)
4. Run backend: `npm run dev` (port 5000)
5. Run frontend: `npm run dev` (port 5173)

## 🐳 Docker Deployment
```bash
docker build -t ecommerce-app .
docker run -p 8080:5000 --env-file backend/.env ecommerce-app
