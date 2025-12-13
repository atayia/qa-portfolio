# Unofficial Client — Amazon Test Plan

## 1. Introduction
This test plan outlines the verification and validation strategy for Amazon's core workflows, including login, search, product browsing, cart management, and checkout. It covers functional behavior, UI consistency, error handling, and overall system responsiveness.

## 2. Scope
**In Scope:**
- Functional tests: login, search, add to cart, checkout
- UI tests: layout, buttons, links, images
- Positive and negative scenarios for each feature

**Out of Scope:**
- Account creation
- Prime signup flow
- 2FA/MFA
- Backend authentication logic unrelated to UI flows

## 3. Test Objectives
- Verify that authenticated users can successfully access their account
- Ensure invalid credentials produce correct error messaging
- Validate search functionality and product results accuracy
- Confirm cart and checkout workflows function correctly
- Ensure layout, fields, buttons, and links are displayed and working properly
- Capture visual confirmation of UI through screenshots

## 4. Test Approach
- Manual QA testing
- Exploratory, functional, and UI validation methods
- Regression tests executed as needed
- Grouped by feature: Login, Search, Product, Cart, Checkout
- Screenshots of each step, censored where necessary

## 5. Test Environment
- **Browsers:** Chrome (latest), Safari
- **OS:** macOS, Windows 10+
- **Network:** Standard broadband

## 6. Risks & Dependencies
- Amazon may update the UI at any time
- Network outages may affect accessibility
- Rate-limiting or security captchas may interfere with test execution
- Delays in resource availability (test accounts, test data)

## 7. Resources
- Tester email: heatqa.test@gmail.com
- Test accounts with valid credentials for login
- Product test data for search, cart, and checkout

## 8. Test Deliverables
- Test Cases: `test-cases/amazon-tests.md`
- Screenshots: `screenshots/`
- Bug Reports: `bug-reports/`
- Execution Results / Logs

## 9. Exit Criteria
- All planned test cases executed
- All critical and high-severity defects resolved
- Test execution summary approved
