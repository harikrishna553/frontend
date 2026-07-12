#!/bin/bash

# Cube Semantic SQL Playground - Quick Start Script

echo "🚀 Cube Semantic SQL Playground - Quick Start"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version is too old. Please upgrade to Node.js 18+."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install root dependencies (for concurrently)
echo "📦 Installing root dependencies..."
npm install --no-workspaces

if [ $? -ne 0 ]; then
    echo "⚠️  Root dependencies install had issues, continuing..."
fi

echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

cd ..
echo "✅ Backend dependencies installed"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..
echo "✅ Frontend dependencies installed"
echo ""

# Create .env files if they don't exist
if [ ! -f "backend/.env" ]; then
    echo "📝 Creating backend/.env from template..."
    cp backend/.env.example backend/.env
fi

if [ ! -f "frontend/.env" ]; then
    echo "📝 Creating frontend/.env from template..."
    cp frontend/.env.example frontend/.env
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 To START the application, run:"
echo "   ./start.sh"
echo ""
echo "   OR manually with:"
echo "   npm run dev"
echo ""
echo "🛑 To STOP the application:"
echo "   ./stop.sh"
echo ""
echo "�📍 The application will be available at:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:4000"
echo ""
echo "Happy coding! 🎉"
