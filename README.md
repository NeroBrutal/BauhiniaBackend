# BauhiniaBackend

Backend for the Bauhinia application built with Node.js and Express.

## Project Structure

```
BauhiniaBackend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── index.js         # Application entry point
├── tests/               # Test files
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── jest.config.js      # Jest testing configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NeroBrutal/BauhiniaBackend.git
cd BauhiniaBackend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env` file

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-restart)
- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Health Check
- `GET /health` - Returns server health status

### Root
- `GET /` - Returns welcome message and API information

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Code Quality

This project uses ESLint for code quality. Run linting with:
```bash
npm run lint
```

Auto-fix linting issues:
```bash
npm run lint:fix
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details. 
