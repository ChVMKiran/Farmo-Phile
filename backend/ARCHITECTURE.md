# Backend Architecture

## Request Flow
```
Client Request
    ↓
server.js (Entry Point)
    ↓
Middleware Layer (CORS, JSON, Rate Limit)
    ↓
routes/index.js (API Router)
    ↓
routes/prediction.routes.js (Route Definitions)
    ↓
controllers/prediction.controller.js (Request Handling)
    ↓
services/* (Business Logic)
    ├── ml.service.js → External ML API
    ├── fertilizer.service.js → Local Logic
    └── cropRotation.service.js → Local Logic
    ↓
Response to Client
```

## Layers

### 1. Configuration (`config/`)
- Centralized environment variable management
- Single source of truth for app settings

### 2. Routes (`routes/`)
- API endpoint definitions
- Route grouping and organization
- Minimal logic, delegates to controllers

### 3. Controllers (`controllers/`)
- Request/response handling
- Input extraction
- Error propagation to middleware
- No business logic

### 4. Services (`services/`)
- Business logic implementation
- External API communication
- Data processing and validation
- Returns data or throws errors

### 5. Models (`models/`)
- Custom error classes
- Type definitions

### 6. Data (`data/`)
- Static reference data
- Lookup tables
- Configuration constants

## Key Improvements

✅ **Separation of Concerns** - Each layer has a single responsibility  
✅ **Centralized Config** - All settings in one place  
✅ **No View Layer** - Direct JSON responses (Express handles this)  
✅ **Clean Error Handling** - Centralized middleware in server.js  
✅ **Minimal Abstraction** - Only necessary layers  
✅ **Clear Naming** - Descriptive file and function names  
✅ **Environment Ready** - Easy configuration via .env  

## Dependencies

- **express** - Web framework
- **axios** - HTTP client for ML service
- **cors** - Cross-origin support
- **express-rate-limit** - Request rate limiting
