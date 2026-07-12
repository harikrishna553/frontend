# Quick Start Guide

## Get Started in 3 Steps

### 1. Run Setup Script

The easiest way to get started:

```bash
./setup.sh
```

This script will:
- Check Node.js version
- Install all dependencies (backend and frontend)
- Create .env files from templates
- Verify everything is ready to run

### 2. Start the Application

```bash
./start.sh
```

Or manually:
```bash
npm run dev
```

This starts both frontend and backend servers concurrently.

Wait a few seconds for the servers to start up.

### 3. Open Your Browser

Navigate to: [http://localhost:3000](http://localhost:3000)

---

## Stopping the Application

When you're done, stop all servers:

```bash
./stop.sh
```

Or press `Ctrl+C` in the terminal where the servers are running.

---

## Quick Reference

```bash
# First time setup
./setup.sh

# Start application
./start.sh

# Stop application
./stop.sh
```

---

## What You'll See

### Top Toolbar
- **SQL Dialect Selector** - Choose your target database
- **Validate Button** - Check your semantic model and query
- **Generate SQL Button** - Create SQL from your query spec
- **Load Sample** - Load example data
- **Clear** - Reset all editors
- **Theme Toggle** - Switch between light/dark mode

### Left Panel: Semantic Model Editor
Write your Cube schema in YAML format. This defines your data model with:
- Cubes (tables)
- Measures (aggregations)
- Dimensions (attributes)
- Joins (relationships)

### Right Panel: Query Spec Editor
Define your analytical query in JSON format with:
- Measures to calculate
- Dimensions to group by
- Filters to apply
- Time dimensions with granularity
- Order and limit

### Bottom Panel: Output
Three tabs show different information:
- **Generated SQL** - The final SQL query ready to run
- **Validation** - Errors and warnings with suggestions
- **Compiler Logs** - Debug information from the Cube compiler

## Your First Query

1. **Click "Load Sample"** to fill editors with example data
2. **Click "Validate"** to check for errors
3. **Click "Generate SQL"** to create the SQL query
4. **View the generated SQL** in the bottom panel

## Manual Setup (Alternative)

If you prefer manual setup:

```bash
# Install dependencies
npm install

# Create environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start development servers
npm run dev
```

## Troubleshooting

### "Port already in use" error

```bash
# Kill processes on ports 3000 and 4000
lsof -ti:3000 | xargs kill
lsof -ti:4000 | xargs kill
```

### Dependencies not installing

```bash
# Clean and reinstall
npm run clean
npm install
```

### Can't connect to backend

Check that:
1. Backend is running on port 4000
2. Frontend .env has correct API URL
3. CORS is enabled in backend

## Next Steps

- Try different SQL dialects
- Modify the semantic model
- Create complex queries with filters
- Explore validation errors and suggestions
- Read the full [README.md](README.md) for detailed documentation

## Need Help?

- Check the [Architecture](#architecture) section in README
- Review sample code in `backend/src/data/samples.ts`
- Open an issue on GitHub

---

Enjoy building with Cube Semantic SQL Playground! 🎉
