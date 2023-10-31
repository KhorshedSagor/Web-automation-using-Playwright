# Web-Automation-using-Playwright

![1_gMiUPuRGC36nxZHe2zthOg](https://github.com/KhorshedSagor/Web-automation-using-Playwright/assets/134398536/cccf4592-ff56-4a8d-9d33-cdfb41919340)


## What is Automation?

Automation is the practice of using software tools and scripts to perform tasks that would typically require human intervention. In the context of software testing, automation involves using specialized tools to execute test cases and compare the actual outcomes with the expected results automatically.

## Why we use Playwright?

Playwright offers several compelling reasons for web automation:

Multi-Browser Support: Playwright supports multiple web browsers, including Chrome, Firefox, and WebKit. This enables you to run your tests on different browsers without modifying your codebase.

Powerful Cross-Browser API: Playwright provides a powerful and consistent API for automating web interactions across different browsers. You can easily simulate user actions, interact with DOM elements, and perform browser-specific operations.

Headless and Headful Modes: Playwright allows you to run tests in headless mode for faster execution or in headful mode for debugging and troubleshooting. You have the flexibility to choose the appropriate mode based on your needs.

Robust Wait and Retry Mechanism: Playwright's built-in wait and retry mechanism ensures that your tests wait for elements to appear or conditions to be met before proceeding. This reduces flakiness and enhances test reliability.

Accessibility Testing: Playwright includes extensive support for accessibility testing, allowing you to verify that your web applications are accessible to users with disabilities.

Overall, Playwright is a powerful and efficient tool for web automation that can help you to test your application more effectively and catch issues early in the development process.


## Prerequisites
Before you can run the test suite, ensure that Node.js and npm are installed on your local machine.

## Login Page:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login


## Technology used:
- Playwright: The automation framework.
- JavaScript: The programming language used to write the test scripts.
- Visual Studio Code: The recommended code editor for this project.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

## Running the Tests

To run the test suite, execute the following command:

```
npx playwright test
```

## View Test Report

To see test report:
```npx playwright show-report```

## Test Cases

The test suite includes the following test cases:
 1. **Positive test:** Successful Login with valid credentials
 2. **Negative test:** Unsuccessful Login with invalid credentials

## Browsers Used
1. Chromium
2. Firefox
3. Webkit


## Test Report:

<img width="1086" alt="Screenshot 2023-10-31 at 6 06 18 AM" src="https://github.com/KhorshedSagor/Web-automation-using-Playwright/assets/134398536/8a72f324-b344-49e9-aa5e-46c26cf0799e">

## Video Output




https://github.com/KhorshedSagor/Web-automation-using-Playwright/assets/134398536/85a15924-4fe3-47fc-b772-9d8efcf7bb8b

