# Electron + SvelteKit Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Electron Version](https://img.shields.io/badge/Electron-^37.2.5-blue)]()
[![SvelteKit Version](https://img.shields.io/badge/SvelteKit-^2.22.0-orange)]()

A modern starter template for building cross-platform desktop applications using Electron and SvelteKit with TypeScript support.

<img width="1920" height="1041" alt="image" src="https://github.com/user-attachments/assets/62c85318-967e-42cc-bcb6-17440a903cab" />

## Features

- ⚡ **Electron 37** + **SvelteKit 2** integration
- 🛠️ TypeScript support (via `tsconfig.json`)
- 📦 Vite-powered build system (`vite.config.ts`)
- 🔄 Hot-reload during development
- 🖥️ Cross-platform support (Windows, macOS, Linux)
- 🛡️ Preload script security (`preload.cjs`)
- 📁 Organized project structure with separate `main` and `renderer` processes
- 🎨 Global styling with `app.css`
- 🔧 Development utilities in `scripts/` folder

## Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+
- Git

## Installation

### Option 1: Use `npx degit` (Recommended)

You can create a new project directly from this template using:

```bash
npx degit chinni-03/electron-sveltekit-template my-app
cd my-app
npm install
npm run dev
```
### Option 2: Clone the repository
```bash
git clone https://github.com/chinni-03/electron-sveltekit-template.git
cd electron-sveltekit-template
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

## Project Structure
```
electron-sveltekit-template/
├── electron            # Electron folder for main and preload files
|   ├── main.js            # Electron main process entry
|   ├── preload.cjs        # Preload script (CommonJS)
├── src/
│   ├── lib/           # Shared libraries and utilities
│   ├── routes/        # SvelteKit routes and pages
│   ├── app.css        # Global styles
│   ├── app.d.ts       # TypeScript declarations
│   ├── app.html       # Main HTML template
├── scripts/
│   └── dev-electron.js # Electron development script
├── static/            # Static assets (images, fonts, etc.)
├── .gitignore         # Git ignore rules
├── .npmrc             # npm configuration
├── package-lock.json  # Exact dependency tree
├── package.json       # Project metadata and scripts
├── README.md          # This file
├── svelte.config.js   # SvelteKit configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Available Scripts

| Script    | Description                              |
|-----------|------------------------------------------|
| `dev`     | Start development server with HMR        |
| `build`   | Build production-ready application       |
| `preview` | Preview production build locally         |
| `package` | Package application for current OS       |
| `make`    | Create distributables for all platforms  |

## Configuration Guide

### Main Process
Edit `main.js` to configure:
- Window settings
- Native menus
- Application lifecycle

### Preload Script
Modify `preload.cjs` to:
- Expose safe Node.js APIs
- Set up IPC communication
- Manage security policies

### Build Configuration
Adjust `vite.config.ts` for:
- Custom build options
- Environment variables
- Renderer process settings

## Development Tips

- **Hot Reloading**: Both renderer and main processes support hot reload during development  
- **Debugging**: Use Chrome DevTools for renderer process and VS Code for main process  
- **Static Assets**: Place images/fonts in `static/` folder  
- **Type Checking**: Run `tsc --noEmit` to check types without compiling  

## Building for Production

```bash
# Build the application
npm run build
```
## Troubleshooting

### Issue: "Module not found" errors
**Solution**:  
Delete `node_modules` and `package-lock.json`, then run:
```bash
npm install
```

## Issue: Preload script not working

**Solution**:

  1. Ensure all exposed APIs are properly defined in `preload.cjs`
  2. Verify the preload script path in `main.js` is correct:
     ```javascript
     // In main.js
     webPreferences: {
       preload: path.join(__dirname, 'preload.cjs')
     }
     ```
  3. Check for any TypeScript errors in the preload script
  4. Ensure the preload script is using CommonJS syntax (.cjs extension)
  
  ## Contributing
  We welcome contributions! Here's how to get started:
  
  1. Fork the repository
  2. Create a new branch:
  ```bash
  git checkout -b feature-branch
  ```
  3. Commit your changes:
  ```bash
  git commit -am 'Add new feature'
  ```
  4. Push to the branch:
  ```bash
  git push origin feature-branch
  ```
  5. Open a Pull Request with:
    - Description of changes
    - Screenshots if applicable
    - Reference to related issues

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/chinni-03/electron-sveltekit-template/blob/main/LICENSE) file for full details.

## Support
For support, please:
  1. [Open an issue](https://github.com/chinni-03/electron-sveltekit-template/issues) on GitHub
  2. Include:
     - OS version
     - Node.js version
     - Steps to reproduce
     - Expected vs actual behavior
     - Screenshots if applicable

##

<p align="center">
  Built with ❤️ by <a href="https://github.com/chinni-03">chinni-03</a>
</p>
