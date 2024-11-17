File Name: npm-reference.md
markdown
Copy code
# NPM Complete Reference Guide

## 1. Installation

### Node and NPM Installation
- **Download from Node.js website**: [https://nodejs.org](https://nodejs.org) (npm is bundled with Node.js).
- **Check Version**:
  ```bash
  node -v  # Node version
  npm -v   # NPM version
Updating NPM
bash
Copy code
npm install -g npm
2. Basic NPM Commands
Initializing a New Project
Create package.json: Initializes npm in the current directory.
bash
Copy code
npm init              # Step-by-step config
npm init -y           # Default settings
Installing Packages
Install locally (project-specific):
bash
Copy code
npm install <package-name>    # Example: npm install lodash
npm install <package-name>@<version>  # Specific version
Install globally (system-wide):
bash
Copy code
npm install -g <package-name>  # Example: npm install -g nodemon
Uninstalling Packages
Remove a package:
bash
Copy code
npm uninstall <package-name>
Updating Packages
Update all packages to the latest version:
bash
Copy code
npm update
Upgrade to latest versions (major updates):
bash
Copy code
npx npm-check-updates -u  # Requires npm-check-updates package
3. Key package.json Fields
json
Copy code
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "keywords": ["example", "npm", "guide"],
  "author": "Your Name",
  "license": "ISC"
}
Important Fields
dependencies: Packages required for the project to run.
devDependencies: Packages only needed for development (e.g., testing libraries).
scripts: Custom commands to automate tasks.
engines: Specify required Node/NPM versions.
license: License type (e.g., MIT, ISC).
4. NPM Scripts
Running Scripts
bash
Copy code
npm run <script-name>  # Run custom script
npm start              # Shortcut for "start" script
Common Scripts
json
Copy code
"scripts": {
  "start": "node index.js",                  # Starts the server
  "dev": "nodemon index.js",                 # Start with nodemon
  "test": "mocha tests/",                    # Run tests
  "build": "webpack --config webpack.config.js",  # Run Webpack build
  "lint": "eslint src/",                     # Run linter
  "postinstall": "echo 'Post install script'",   # Runs after package install
  "prestart": "npm run build"                # Runs before "start" script
}
5. Semantic Versioning
SemVer Format: MAJOR.MINOR.PATCH (e.g., 1.2.3)
Symbols:
^1.2.3: Accepts minor and patch updates (e.g., 1.3.0, 1.2.4).
~1.2.3: Accepts only patch updates (e.g., 1.2.4).
>=1.2.3: Any version greater than or equal to 1.2.3.
6. Useful NPM Commands
List Installed Packages
bash
Copy code
npm list            # Lists all packages in project
npm list -g         # Lists globally installed packages
npm outdated        # Shows outdated packages
Checking and Fixing Dependencies
bash
Copy code
npm audit           # Run security audit
npm audit fix       # Automatically fix vulnerabilities
npm dedupe          # Removes duplicate dependencies
Running an NPM Package Using npx
Example:
bash
Copy code
npx create-react-app my-app   # Run package without global install
7. Configuring NPM (npmrc)
Local .npmrc Configuration
Create .npmrc file in your project directory for project-specific configs.
Example Config:
plaintext
Copy code
registry=https://registry.npmjs.org/
save-exact=true               # Save exact version in dependencies
Global .npmrc (User Config)
Location: ~/.npmrc on macOS/Linux or %USERPROFILE%\.npmrc on Windows.
Example Commands:
bash
Copy code
npm config set init-author-name "Your Name"    # Set author name
npm config get init-author-name                # View config value
npm config delete init-author-name             # Delete a config
8. Creating and Publishing an NPM Package
Preparing for Publishing
Requirements:
Unique name in package.json
Updated version field
Login to NPM:
bash
Copy code
npm login
Publish Package:
bash
Copy code
npm publish         # Publish to npm registry
Unpublish Package (Only within 24 hours):
bash
Copy code
npm unpublish <package-name> --force
Versioning for Publishing
Bump Version:
bash
Copy code
npm version <major|minor|patch>
Example: npm version patch will update 1.0.0 to 1.0.1.
9. Best Practices
Use package-lock.json: Ensures consistent dependencies across environments.
Keep devDependencies separate: Only include in development, not production.
Use Semantic Versioning: Helps with managing compatibility.
Run npm audit regularly: Keeps dependencies secure.
10. Additional Resources
NPM Documentation
NPM CLI Commands
NPM Configuration Docs
markdown
Copy code

---

### Explanation

This guide provides:
1. **Installation and Setup**: How to get started with npm.
2. **Basic Commands**: Installing, updating, and removing packages.
3. **`package.json` Configurations**: Essential fields in `package.json`.
4. **Scripts**: Custom commands for automation.
5. **Versioning**: Semantic Versioning format and usage.
6. **Advanced Commands**: Security audits, listing packages, and fixing dependencies.
7. **Configuration**: Using `.npmrc` for project and global configurations.
8. **Publishing**: Steps for publishing your package to npm.
9. **Best Practices**: Tips to maintain and secure projects.
10. **Resources**: Links to official documentation.

---

If you need more specifics or additional sections (like using npm in CI/CD or setting up npm wor