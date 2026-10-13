# Numeriq Playwright

> A professional end-to-end browser automation suite for the Numeriq application — built with Playwright, TypeScript, Chromium, and a dedicated test project.

![Playwright](https://img.shields.io/badge/Playwright-1.63-2ead33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Chromium](https://img.shields.io/badge/Browser-Chromium-4285F4?logo=googlechrome&logoColor=white)

Numeriq Playwright is a separate browser automation project for testing the Numeriq application. It provides structured end-to-end coverage for workspace navigation, calculator tools, finance tools, global search, keyboard interaction, responsive layout, and workspace routes.

The test project is intentionally separated from the Numeriq application so the application and browser automation suite can be developed, executed, and maintained independently.

## Contents

- [Test coverage](#test-coverage)
- [Features](#features)
- [Quick start](#quick-start)
- [Using the test suite](#using-the-test-suite)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Test execution](#test-execution)
- [Test reporting](#test-reporting)
- [Formatting](#formatting)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Test coverage

The suite contains **15 Playwright test files** with **20 individual test cases**.

### Sidebar — 9 test files

| Test file            | Coverage                                                                             |
| -------------------- | ------------------------------------------------------------------------------------ |
| `calculator.spec.ts` | Opens the scientific calculator, checks the keypad, and verifies degree/radian modes |
| `equation.spec.ts`   | Opens Equation Solver                                                                |
| `finance.spec.ts`    | Opens EMI, Compound Interest, and Investment calculators                             |
| `graphing.spec.ts`   | Opens Function Plotter                                                               |
| `home.spec.ts`       | Opens the Home workspace and verifies the Numeriq brand                              |
| `matrix.spec.ts`     | Opens Matrix Calculator                                                              |
| `quadratic.spec.ts`  | Opens Quadratic Solver                                                               |
| `settings.spec.ts`   | Opens Settings                                                                       |
| `statistics.spec.ts` | Opens Statistics                                                                     |

### Navigation — 6 test files

| Test file                    | Coverage                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `finance-navigation.spec.ts` | Navigates from Home to the finance tools                                                       |
| `navigation.spec.ts`         | Navigates between Numeriq workspaces                                                           |
| `responsive-layout.spec.ts`  | Verifies the application layout at a mobile viewport                                           |
| `search-keyboard.spec.ts`    | Opens the first matching search result with Enter                                              |
| `tool-search.spec.ts`        | Finds and opens a tool using global search                                                     |
| `workspace-routes.spec.ts`   | Opens the Unit Converter, Percentage Calculator, Calculus, Complex Numbers, and Vectors routes |

## Features

| Area              | Capabilities                                                                         |
| ----------------- | ------------------------------------------------------------------------------------ |
| Sidebar coverage  | Tests the 9 primary Numeriq sidebar workspaces                                       |
| Navigation        | Verifies navigation between Numeriq workspaces                                       |
| Calculator        | Checks the scientific calculator, keypad, and angle modes                            |
| Equation Solver   | Verifies the Equation Solver workspace                                               |
| Finance tools     | Covers EMI, Compound Interest, and Investment calculators                            |
| Graphing          | Verifies the Function Plotter workspace                                              |
| Matrix Calculator | Verifies the Matrix Calculator workspace                                             |
| Quadratic Solver  | Verifies the Quadratic Solver workspace                                              |
| Statistics        | Verifies the Statistics workspace                                                    |
| Global search     | Verifies tool search and keyboard selection                                          |
| Workspace routes  | Covers Unit Converter, Percentage Calculator, Calculus, Complex Numbers, and Vectors |
| Responsive layout | Checks navigation and search at a mobile viewport                                    |
| Chromium          | Uses Chromium as the configured browser                                              |
| Trace             | Retains traces on failures                                                           |
| Screenshots       | Captures screenshots on failures                                                     |
| Video             | Retains video recordings on failures                                                 |
| HTML Report       | Provides Playwright's interactive test report                                        |
| TypeScript        | Provides strongly typed test configuration and tests                                 |
| Prettier          | Provides consistent source formatting                                                |

## Quick start

### Requirements

- Node.js 20 or newer
- npm
- Chromium
- Visual Studio Code is recommended
- Numeriq application

The Playwright project is maintained separately from the Numeriq application.

Recommended workspace:

```text
numeriq/
├── numeriq/
└── numeriq-playwright/
```

### Create the project

```bash
npm init playwright@latest
cd numeriq-playwright
```

### Clone the repository

```bash
git clone https://github.com/saravanansaranraj27/numeriq-playwright.git
cd numeriq-playwright
```

### Install dependencies

```bash
npm install
```

### Install Node.js type definitions

```bash
npm install -D @types/node
```

### Install Chromium

```bash
npx playwright install chromium
```

### Verify Playwright

```bash
npx playwright --version
```

### Verify Node.js types

```bash
npm ls @types/node
```

## Using the test suite

The Numeriq application must be running before the Playwright tests are executed.

### Start Numeriq

Open a separate PowerShell terminal:

```powershell
cd "path\to\numeriq\numeriq"
npm run dev
```

The Numeriq application runs at:

```text
http://localhost:3000/numeriq/
```

Keep the Numeriq terminal running.

### Open the Playwright project

Open another PowerShell terminal:

```powershell
cd "path\to\numeriq\numeriq-playwright"
```

Install the Playwright project dependencies:

```powershell
npm install
```

Run the complete test suite:

```powershell
npx playwright test
```

A successful run currently produces:

```text
24 passed
```

## Project structure

```text
numeriq-playwright/
├── tests/                                  # Playwright end-to-end test suite
│   ├── navigation/                         # Navigation and interaction coverage
│   │   ├── finance-navigation.spec.ts      # Navigation to finance tools
│   │   ├── navigation.spec.ts              # Primary workspace navigation
│   │   ├── responsive-layout.spec.ts       # Mobile viewport layout
│   │   ├── search-keyboard.spec.ts         # Keyboard interaction with search
│   │   ├── tool-search.spec.ts              # Global tool search
│   │   └── workspace-routes.spec.ts        # Additional workspace routes
│   ├── sidebar/                            # Sidebar workspace coverage
│   │   ├── calculator.spec.ts              # Scientific calculator tests
│   │   ├── equation.spec.ts                # Equation Solver tests
│   │   ├── finance.spec.ts                 # Finance calculator tests
│   │   ├── graphing.spec.ts                # Function Plotter tests
│   │   ├── home.spec.ts                    # Home workspace tests
│   │   ├── matrix.spec.ts                  # Matrix Calculator tests
│   │   ├── quadratic.spec.ts               # Quadratic Solver tests
│   │   ├── settings.spec.ts                # Settings workspace tests
│   │   └── statistics.spec.ts              # Statistics workspace tests
│   └── utils/
│       └── app.ts                          # Shared application-ready navigation helper
├── .vscode/
│   └── settings.json                       # VS Code format-on-save configuration
├── .gitignore                              # Git exclusions for generated files
├── .prettierrc                             # Prettier formatting configuration
├── playwright.config.ts                    # Playwright test runner configuration
├── tsconfig.json                           # TypeScript compiler configuration
├── package.json                            # Project dependencies and npm scripts
├── package-lock.json                       # Locked npm dependency versions
└── README.md                               # Project documentation
```

## Technology

- [Playwright](https://playwright.dev/) — browser automation and end-to-end testing
- [TypeScript](https://www.typescriptlang.org/) — typed test development
- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Chromium](https://www.chromium.org/) — configured browser project
- [Prettier](https://prettier.io/) — source formatting
- Playwright Test — test runner, assertions, fixtures, reporting, tracing, screenshots, and video

## Development commands

### Playwright setup

```powershell
npm init playwright@latest
npx playwright --version
npx playwright install chromium
```

### Install dependencies

```powershell
npm install
npm install -D @types/node
npm ls @types/node
```

### Run tests

```powershell
npx playwright test
npx playwright test --reporter=list
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
```

### Inspect tests

```powershell
npx playwright test --list
```

### Run a specific test file

```powershell
npx playwright test tests/navigation/navigation.spec.ts
```

Run the specific test file with the browser visible:

```powershell
npx playwright test tests/navigation/navigation.spec.ts --headed
```

### TypeScript

```powershell
npx tsc --version
npm ls typescript @types/node
```

### Formatting

```powershell
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
```

### HTML report

```powershell
npx playwright show-report
```

## Test execution

### Run the complete suite

```powershell
npx playwright test
```

### Run with the browser visible

```powershell
npx playwright test --headed
```

### Run in Playwright UI mode

```powershell
npx playwright test --ui
```

### Run in debug mode

```powershell
npx playwright test --debug
```

### Run with the list reporter

```powershell
npx playwright test --reporter=list
```

### List discovered tests

```powershell
npx playwright test --list
```

### Run a specific test file

```powershell
npx playwright test tests/navigation/navigation.spec.ts
```

### Run a specific test file in headed mode

```powershell
npx playwright test tests/navigation/navigation.spec.ts --headed
```

## Test reporting

Playwright generates an HTML report after test execution.

Open the report with:

```powershell
npx playwright show-report
```

The configured Playwright project uses:

```text
test-results/
playwright-report/
```

for generated test artifacts and reports.

The test configuration also retains useful debugging artifacts for failures:

- Screenshots
- Videos
- Traces

Generated test-result directories should not be committed to source control.

## Formatting

The project uses Prettier to keep Playwright test files and configuration consistently formatted.

Format all test files and the Playwright configuration:

```powershell
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
```

The project is maintained with clean TypeScript formatting and no commented-out test code.

## Troubleshooting

### `ERR_CONNECTION_REFUSED`

If Playwright reports:

```text
net::ERR_CONNECTION_REFUSED
```

make sure the Numeriq application is running.

Start Numeriq in a separate terminal:

```powershell
cd "path\to\numeriq\numeriq"
npm run dev
```

Then verify that the application is available at:

```text
http://localhost:3000/numeriq/
```

### Chromium is not installed

Run:

```powershell
npx playwright install chromium
```

### `@types/node` is missing

Install it with:

```powershell
npm install -D @types/node
```

Verify:

```powershell
npm ls @types/node
```

### Check TypeScript

```powershell
npx tsc --version
```

Verify the installed TypeScript packages:

```powershell
npm ls typescript @types/node
```

### Check which tests Playwright discovers

```powershell
npx playwright test --list
```

### Debug a failing test

Run:

```powershell
npx playwright test --headed
```

or:

```powershell
npx playwright test --ui
```

or:

```powershell
npx playwright test --debug
```

### Open the latest report

```powershell
npx playwright show-report
```

## Complete command reference

```powershell
git clone https://github.com/saravanansaranraj27/numeriq-playwright.git
npm init playwright@latest
npx playwright --version
npx playwright install chromium
npm install
npm install -D @types/node
npm ls @types/node
npx playwright test
npx tsc --version
npm ls typescript @types/node
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
npx playwright test --list
npx playwright test --reporter=list
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
npx playwright test tests/navigation/navigation.spec.ts
npx playwright test tests/navigation/navigation.spec.ts --headed
npx playwright show-report
```

## Contributing

Bug reports, test improvements, additional test coverage, and pull requests are welcome.

Keep changes focused and verify the Playwright suite before opening a pull request:

```powershell
npx tsc --noEmit
npx playwright test
```

Please keep the Playwright project separate from the Numeriq application and preserve the existing test organization under `tests/sidebar/`, `tests/navigation/`, and `tests/utils/`.

## License

This project is intended to accompany the Numeriq application. Refer to the Numeriq application's license for the applicable project licensing terms.
