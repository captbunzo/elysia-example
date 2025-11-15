# Elysia Example Project

A modern, type-safe REST API built with [Elysia](https://elysiajs.com/), [Bun](https://bun.sh/), and [TypeScript](https://www.typescriptlang.org/). This project demonstrates best practices for building scalable web APIs with automatic OpenAPI documentation generation.

## 🚀 Features

- **Type-Safe API Development**: Built with TypeScript and Elysia's type system
- **Automatic OpenAPI Documentation**: Generated API docs with Scalar UI
- **Error Handling**: Comprehensive error handling with custom error types
- **Environment Configuration**: Type-safe environment variable handling
- **Development Tools**: ESLint, Prettier, and hot reload support
- **Build Pipeline**: Optimized builds with tsdown and Bun's compiler
- **Modular Architecture**: Well-organized route structure with versioning

## 📁 Project Structure

```
src/
├── index.ts                # Application entry point
├── config/                 # Configuration management
│   └── index.ts            # Environment variables & config
├── lib/                    # Shared library code
│   └── v1/                 # Version 1 API exports
├── plugins/                # Elysia plugins
│   ├── error.handler.ts    # Global error handling
│   └── integrations/       # Third-party integrations
│       └── openapi.ts      # OpenAPI documentation setup
├── routes/                 # API route definitions
│   └── api/                # API routes
│       ├── api.route.ts    # Main API router
│       └── v1/             # Version 1 API routes
└── types/                  # TypeScript type definitions
    ├── api-errors.ts       # Custom error types
    └── http-status-code.ts # HTTP status constants
```

## 🛠️ Prerequisites

- [Bun](https://bun.sh/) >= 1.0.0
- Node.js >= 18.0.0 (for compatibility)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/captbunzo/elysia-example.git
cd elysia-example
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
# Copy and modify environment variables
cp .env.example .env
```

Create a `.env` file with the following variables:

```env
HOST=localhost
PORT=3000
NODE_ENV=development
```

## 🚀 Usage

### Development

Start the development server with hot reload:

```bash
bun run dev
```

The server will start at `http://localhost:3000` (or your configured port).

### Production

Build and start the production server:

```bash
bun run build
bun run start
```

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run start` - Start production server
- `bun run build` - Build for production
- `bun run clean` - Clean build artifacts
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting
- `bun run lint` - Lint and fix code with ESLint
- `bun run lint:check` - Check linting without fixing
- `bun run cloc` - Count lines of code

## 📚 API Documentation

Once the server is running, you can access the interactive API documentation:

- **Swagger/OpenAPI Docs**: `http://localhost:3000/api/scalar`
- **OpenAPI JSON**: `http://localhost:3000/api/openapi.json`

### API Endpoints

- `GET /` - Hello World endpoint
- `GET /api` - API status endpoint
- `GET /api/v1` - API v1 status endpoint
- `GET /api/v1/users/@me` - Get current user information (example endpoint)

## 🏗️ Architecture

### Error Handling

The project includes a comprehensive error handling system that:

- Catches and formats all API errors consistently
- Returns structured error responses with appropriate HTTP status codes
- Supports custom error types for business logic

### Configuration

Environment-based configuration with type safety:

- Required environment variables are validated at startup
- Type-safe config object available throughout the application

### OpenAPI Integration

Automatic API documentation generation:

- Routes are automatically documented
- Type schemas are generated from TypeScript types
- Interactive documentation with Scalar UI

## 🔧 Development

### Code Style

This project uses:

- **ESLint** for linting with strict TypeScript rules
- **Prettier** for code formatting
- **TypeScript** with strict mode enabled

### Adding New Routes

1. Create a new route file in the appropriate version directory
2. Define your route with proper TypeScript types
3. Add OpenAPI documentation tags
4. Register the route in the parent router

Example:

```typescript
export const myRoute = new Elysia({ prefix: '/my-route', tags: ['MyTag'] }).get(
    '/',
    () => ({ message: 'Hello' }),
    {
        detail: {
            summary: 'My Route',
            description: 'Description of my route',
        },
    }
);
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Paul Thompson**

- Email: captbunzo@gmail.com
- GitHub: [@captbunzo](https://github.com/captbunzo)

## 🐛 Issues & Contributions

- Report bugs: [GitHub Issues](https://github.com/captbunzo/elysia-example/issues)
- Contribute: Pull requests are welcome!

## 🔗 Links

- [Elysia Documentation](https://elysiajs.com/)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
