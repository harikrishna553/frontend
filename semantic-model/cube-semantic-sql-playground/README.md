# Cube Semantic SQL Playground

A modern, full-stack web application for validating Cube semantic models and generating SQL queries from query specifications. Built with React, TypeScript, Node.js, and Monaco Editor for a professional developer experience.

![Cube Semantic SQL Playground](https://img.shields.io/badge/Status-Production%20Ready-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![React](https://img.shields.io/badge/React-18.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## Features

### Core Functionality
- ✅ **Semantic Model Validation** - Validate Cube schemas (YAML/JSON format)
- ✅ **Query Spec Validation** - Validate analytical query definitions against semantic models
- ✅ **SQL Generation** - Generate production-ready SQL using Cube.js compiler
- ✅ **Multi-Dialect Support** - PostgreSQL, BigQuery, Snowflake, MySQL, MS SQL, Databricks, ClickHouse, Athena, Redshift
- ✅ **Real-time Validation** - Instant feedback with detailed error messages and suggestions

### User Interface
- 🎨 **Monaco Editor Integration** - VSCode-like editing experience with syntax highlighting
- 🌓 **Dark Mode Support** - Toggle between light and dark themes
- 📐 **Resizable Panels** - Customize your workspace layout
- 📊 **Multiple Output Views** - Generated SQL, validation results, and compiler logs
- 💾 **Sample Data** - Pre-loaded examples to get started quickly

### Developer Experience
- 🔍 **Detailed Error Messages** - Precise error locations with helpful suggestions
- 📋 **Execution Plans** - View query execution details
- 🔧 **Compiler Logs** - Debug SQL generation process
- 🚀 **Fast Validation** - Optimized for quick feedback loops

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Monaco Editor** for code editing
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Vite** for build tooling
- **React Resizable Panels** for layout

### Backend
- **Node.js** with TypeScript
- **Express** for API server
- **Cube.js Schema Compiler** for validation and SQL generation
- **CORS** enabled for local development

## Prerequisites

- Node.js 18+ 
- npm 9+

## Installation

1. **Clone the repository**
   ```bash
   cd cube-semantic-sql-playground
   ```

2. **Install dependencies**
   ```bash
   ./setup.sh
   ```

   This will install all dependencies for both frontend and backend.

3. **Start the application**
   ```bash
   ./start.sh
   ```

   Or manually:
   ```bash
   npm run dev
   ```

The application will be available at:
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:4000

## Running the Application

### Quick Start

**Setup (first time only):**
```bash
./setup.sh
```

**Start:**
```bash
./start.sh
```

**Stop:**
```bash
./stop.sh
```

### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:4000`
- Frontend development server on `http://localhost:3000`

### Stop the Application

To stop all running servers:

```bash
./stop.sh
```

This script will:
- Stop the backend server (port 4000)
- Stop the frontend server (port 3000)
- Kill any related Node.js processes

### Run Individual Services

**Backend only:**
```bash
npm run dev:backend
```

**Frontend only:**
```bash
npm run dev:frontend
```

### Production Build

**Build both frontend and backend:**
```bash
npm run build
```

**Build individually:**
```bash
npm run build:backend
npm run build:frontend
```

**Start production server:**
```bash
npm start
```

This runs the backend server with the built frontend assets.

## Project Structure

```
cube-semantic-sql-playground/
├── backend/                    # Backend Node.js application
│   ├── src/
│   │   ├── data/              # Sample data
│   │   │   └── samples.ts     # Sample semantic models and queries
│   │   ├── routes/            # API routes
│   │   │   ├── validate.ts    # Validation endpoints
│   │   │   ├── generate-sql.ts # SQL generation endpoints
│   │   │   └── samples.ts     # Sample data endpoints
│   │   ├── services/          # Business logic
│   │   │   ├── semantic-validator.ts
│   │   │   ├── query-validator.ts
│   │   │   └── sql-generator.ts
│   │   ├── types/             # TypeScript types
│   │   │   └── index.ts
│   │   └── index.ts           # Application entry point
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # Frontend React application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Toolbar.tsx    # Top toolbar with actions
│   │   │   ├── EditorPanel.tsx # Dual editor layout
│   │   │   ├── MonacoEditor.tsx # Monaco editor wrapper
│   │   │   └── OutputPanel.tsx # Results display
│   │   ├── services/          # API services
│   │   │   └── api.ts         # Backend API client
│   │   ├── store/             # State management
│   │   │   └── index.ts       # Zustand store
│   │   ├── types/             # TypeScript types
│   │   │   └── index.ts
│   │   ├── App.tsx            # Main application component
│   │   ├── main.tsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── package.json               # Root package.json (workspace)
├── .gitignore
└── README.md
```

## Usage Guide

### 1. Writing Semantic Models

In the left editor, define your Cube semantic model in YAML:

```yaml
cubes:
  - name: orders
    sql_table: orders
    
    measures:
      - name: count
        type: count
      
      - name: total_revenue
        sql: amount
        type: sum
    
    dimensions:
      - name: status
        sql: status
        type: string
      
      - name: created_at
        sql: created_at
        type: time
```

### 2. Writing Query Specs

In the right editor, define your analytical query in JSON:

```json
{
  "measures": ["orders.total_revenue", "orders.count"],
  "dimensions": ["orders.status"],
  "timeDimensions": [
    {
      "dimension": "orders.created_at",
      "granularity": "day",
      "dateRange": "Last 30 days"
    }
  ],
  "order": [
    { "id": "orders.total_revenue", "desc": true }
  ],
  "limit": 100
}
```

### 3. Validate and Generate SQL

1. **Select SQL Dialect** - Choose from the dropdown (PostgreSQL, BigQuery, etc.)
2. **Click "Validate"** - Check semantic model and query spec for errors
3. **Click "Generate SQL"** - Generate SQL from your specifications
4. **View Results** - Check the output panel for:
   - Generated SQL
   - Validation errors/warnings
   - Compiler logs

### 4. Using Samples

Click **"Load Sample"** to load pre-configured examples:
- E-commerce semantic model
- Sample query specifications
- Working configurations for testing

## API Endpoints

### Validation

**Validate Semantic Model**
```
POST /api/validate/semantic
{
  "semanticSpec": "...",
  "format": "yaml"
}
```

**Validate Query**
```
POST /api/validate/query
{
  "querySpec": {...},
  "semanticSpec": "...",
  "format": "yaml"
}
```

**Validate All**
```
POST /api/validate/all
{
  "querySpec": {...},
  "semanticSpec": "...",
  "format": "yaml"
}
```

### SQL Generation

**Generate SQL**
```
POST /api/generate-sql
{
  "querySpec": {...},
  "semanticSpec": "...",
  "dialect": "postgres",
  "format": "yaml"
}
```

### Samples

**Get All Samples**
```
GET /api/samples/all
```

**Get Semantic Model Samples**
```
GET /api/samples/semantic
```

**Get Query Spec Samples**
```
GET /api/samples/query
```

### Health Check

```
GET /api/health
```

## Supported SQL Dialects

- **PostgreSQL** - Standard PostgreSQL syntax
- **BigQuery** - Google BigQuery with timestamp functions
- **Snowflake** - Snowflake data warehouse
- **MySQL** - MySQL/MariaDB
- **MS SQL Server** - Microsoft SQL Server
- **Databricks** - Databricks SQL
- **ClickHouse** - ClickHouse analytics DB
- **Athena** - Amazon Athena
- **Redshift** - Amazon Redshift

Each dialect has specific:
- Identifier quoting (e.g., `"col"` vs `` `col` ``)
- Time truncation functions
- LIMIT/OFFSET syntax
- Aggregate functions

## Architecture

### Backend Architecture

```
Express Server
├── Routes Layer (validate, generate-sql, samples)
├── Services Layer
│   ├── SemanticValidator - Validates Cube schemas
│   ├── QueryValidator - Validates query specs
│   └── SqlGenerator - Generates SQL from specs
└── Cube.js Compiler Integration
```

### Frontend Architecture

```
React App
├── Components Layer (UI Components)
├── Store Layer (Zustand State Management)
├── Services Layer (API Communication)
└── Monaco Editor Integration
```

### Data Flow

1. User edits semantic model or query spec
2. Click Validate → API call to `/api/validate/all`
3. Backend validates using Cube compiler
4. Results displayed in validation panel
5. Click Generate SQL → API call to `/api/generate-sql`
6. Backend generates SQL based on dialect
7. SQL displayed in output panel

## Development

### Code Style

- TypeScript with strict mode enabled
- ESLint for linting (optional setup)
- Prettier for formatting (optional setup)

### Adding New Features

1. **Backend**: Add routes in `backend/src/routes/`
2. **Frontend**: Add components in `frontend/src/components/`
3. **State**: Update Zustand store in `frontend/src/store/`
4. **Types**: Keep types in sync between frontend and backend

### Testing Locally

1. Start the backend: `npm run dev:backend`
2. Start the frontend: `npm run dev:frontend`
3. Open `http://localhost:3000`
4. Test validation and SQL generation

## Troubleshooting

### Validation or SQL Generation Errors

**"Request failed with status code 400"** - Check:
1. Query Spec is valid JSON
2. Semantic Model has valid YAML syntax
3. Backend terminal logs for specific errors

**Common issues:**
- Invalid JSON in Query Spec editor
- Missing required fields (e.g., `name`, `type`, `sql`)
- Incorrect member references (should be `cubeName.memberName`)

**How to fix:**
- Click "Load Sample" to see working examples
- Check browser console (F12) for detailed errors
- Look at backend terminal for validation messages

### Port Already in Use

If port 4000 or 3000 is in use:

```bash
# Find process on macOS/Linux
lsof -ti:4000 | xargs kill
lsof -ti:3000 | xargs kill
```

### Dependencies Issues

**If npm install fails at root:**
```bash
# Install backend and frontend separately
cd backend && npm install
cd ../frontend && npm install
cd ..

# Or use the setup script
./setup.sh
```

**Clean and reinstall:**
```bash
npm run clean
./setup.sh
```

### Application Not Loading

1. **Check both servers are running:**
   - Backend: http://localhost:4000/api/health
   - Frontend: http://localhost:3000

2. **Start servers separately if needed:**
   ```bash
   # Terminal 1 - Backend
   npm run dev:backend
   
   # Terminal 2 - Frontend  
   npm run dev:frontend
   ```

3. **Check for errors in terminals**

### CORS Errors

Ensure backend CORS is configured correctly in `backend/src/index.ts`

### Monaco Editor Not Loading

Check that monaco-editor is properly installed:

```bash
cd frontend
npm install monaco-editor @monaco-editor/react
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development.

## Acknowledgments

- Built with [Cube.js](https://cube.dev/) compiler
- Powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- UI components inspired by VSCode, Cube Playground, and dbt Cloud

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Happy coding!** 🚀
