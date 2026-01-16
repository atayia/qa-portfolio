# Test Plan: Authentication & Search Modules

### 1. Scope
Testing focuses on the core user lifecycle: Authentication, Product Discovery (Search), and Cart Persistence for the Amazon 2026 release.

### 2. Strategy
A risk-based approach utilizing manual Functional testing, Negative path verification, and Boundary Value Analysis (BVA).

### 3. Environments
* **Browsers:** Chrome (v120+), Firefox (Latest)
* **Devices:** Windows Desktop, iOS (Mobile Emulation via DevTools)

### 4. Tools
* **Chrome DevTools:** Network/Console monitoring.
* **Postman:** API response verification.

### 5. Exit Criteria
* 100% of P0 and P1 test cases executed.
* Zero High-severity/Blocker bugs remaining in "Open" status.

### 6. Deliverables
* [Manual Test Cases](amazon-test-cases.md)
* [Defect Log / Bug Reports](amazon-bug-reports.md)