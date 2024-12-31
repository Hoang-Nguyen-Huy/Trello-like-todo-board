# Offline-capable and syncable Trello-like web application 

---
# Demo

https://github.com/user-attachments/assets/2b975240-667a-407e-a761-4aad4331a3f2

---

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
yarn install
```

### Create environment
Create .env file
```bash
DATABASE_URL="file:./database/user.db"

VITE_API_BASE_URL="http://localhost:3000"
```

### Development

Start the development server with HMR:

```bash
yarn dev
```

Start the server:

```bash
yarn dev:server
```

Your front-end application will be available at `http://localhost:5173`.
Your back-end application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
yarn build
```

## Deployment

### Docker Deployment

This template includes a Dockerfile optimized for yarn:

- `Dockerfile` - for yarn

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `yarn build`

```
├── package.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## References

- [SQLite Wasm](https://github.com/sqlite/sqlite-wasm)
- [API-oo1](https://sqlite.org/wasm/doc/trunk/api-oo1.md)
- [Persistence data options](https://sqlite.org/wasm/doc/trunk/persistence.md)
- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0)

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
