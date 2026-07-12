#!/bin/bash

# Cube Semantic SQL Playground - Stop Script

echo "🛑 Stopping Cube Semantic SQL Playground..."
echo "=============================================="
echo ""

# Function to kill process on a specific port
kill_port() {
    local port=$1
    local name=$2
    
    # Find processes using the port
    pids=$(lsof -ti:$port 2>/dev/null)
    
    if [ -z "$pids" ]; then
        echo "ℹ️  No $name process found on port $port"
    else
        echo "🔴 Stopping $name (port $port)..."
        echo "$pids" | xargs kill -9 2>/dev/null
        
        # Verify the process was killed
        sleep 1
        if lsof -ti:$port >/dev/null 2>&1; then
            echo "⚠️  Warning: $name process might still be running on port $port"
        else
            echo "✅ $name stopped successfully"
        fi
    fi
}

# Stop backend (port 4000)
kill_port 4000 "Backend"

echo ""

# Stop frontend (port 3000)
kill_port 3000 "Frontend"

echo ""

# Also kill any node processes related to the project
echo "🔍 Checking for related Node.js processes..."
project_pids=$(ps aux | grep -E "(tsx watch|vite)" | grep -v grep | awk '{print $2}')

if [ -z "$project_pids" ]; then
    echo "ℹ️  No related Node.js processes found"
else
    echo "🔴 Stopping related processes..."
    echo "$project_pids" | xargs kill -9 2>/dev/null
    echo "✅ Related processes stopped"
fi

echo ""
echo "✅ All processes stopped!"
echo ""
echo "📍 To start the application again, run:"
echo "   npm run dev"
echo ""
