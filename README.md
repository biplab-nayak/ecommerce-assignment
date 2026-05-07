# ecommerce-assignment

1. Prerequisites

    You must have Node.js installed before running any commands.

    Download: Node.js Official Website (https://nodejs.org/en)

    Verify: Open your terminal and type node -v

2. Setup

    Right-click on `package.json` and select "Open in Integrated Terminal"
    
    In the terminal, type the following command:
    ```
    npm run setup
    ```
    
    This command will execute the setup script which:
    - First installs all npm dependencies
    - Then installs Playwright browsers and system dependencies
    
    Wait for the process to complete before running any tests.

3. Troubleshooting

    **If you get an execution policy error when running `npm run setup`:**
    
    Open PowerShell and execute the following command:
    ```
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
    ```
    
    This allows scripts to run under your user account. After executing this, try running `npm run setup` again.

4. Running Tests in UI Mode

    In the same terminal, execute the following command:
    ```
    npm run test:ui
    ```
    
    This will launch the Playwright Test UI mode where you can:
    - See all available test cases
    - Run individual or all tests
    - View test results and execution details
    - Debug tests interactively