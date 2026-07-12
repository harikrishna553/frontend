#!/bin/bash

# Cube Semantic SQL Playground - Start Script

echo "🚀 Starting Cube Semantic SQL Playground..."
echo "=============================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ] || [ ! -d "backend/node_modules" ] || [ ! -d "frontend/node_modules" ]; then
    echo "⚠️  Dependencies not found. Running setup first..."
    ./setup.sh
    echo ""
fi

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    echo "📝 Creating backend/.env from template..."
    cp backend/.env.example backend/.env
fi

if [ ! -f "frontend/.env" ]; then
    echo "📝 Creating frontend/.env from template..."
    cp frontend/.env.example frontend/.env
fi

echo "🎯 Starting both backend and frontend servers..."
echo ""
echo "📍 Application will be available at:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:4000"
echo ""
echo "💡 Press Ctrl+C to stop the servers"
echo "   Or run ./stop.sh in another terminal"
echo ""

# Start the application
npm run dev
