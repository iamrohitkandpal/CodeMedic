# InfraPilot

AI-Powered Infrastructure Design, Simulation & Deployment System

## Overview

InfraPilot is an AI-powered infrastructure architecture designer and validator with real-time visualization, simulation, and cloud deployment capabilities. It helps teams design, simulate, optimize, and manage infrastructure before deploying applications.

### Key Features

- 🔍 Infrastructure visualization and flow mapping
- 🛡️ Performance and security validation
- 🧪 Traffic simulation and DDoS scenario testing
- 💰 Cost-efficient infrastructure recommendations
- 🚀 Automated deployment with guardrails

## Project Structure

```
infrapilot/
├── .github/           # GitHub workflows and configuration
├── frontend/          # React + TypeScript + Tailwind application
├── backend/           # Node.js API services
├── ai_engine/         # FastAPI + Transformers AI engine
├── docs/              # Documentation
└── scripts/           # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.9+
- Docker and Docker Compose
- pnpm (recommended) or yarn

### Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/infrapilot.git
   cd infrapilot
   ```

2. Start the development environment:
   ```
   docker compose up
   ```

3. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - AI Engine: http://localhost:8080

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
