# Unofficial client - Amazon Manual Test Cases


**Tester Email:** heatqa.test@gmail.com  

---

## Table of Contents

- [AMZ-TC001 — Login Success (Positive Test)](#AMZ-TC001---login-success-positive-test)
- [AMZ-TC002 — Login Failure (Negative Test — Incorrect Password)](#AMZ-TC002---login-failure-negative-test-incorrect-password)
- [AMZ-TC003 — Search Product](#AMZ-AMZ-TC003---search-product)
- [AMZ-TC004 — Add to Cart](#AMZ-TC004---add-to-cart)
- [AMZ-TC005 — Remove from Cart](#AMZ-TC005---remove-from-cart)
- [AMZ-TC006 — Checkout Process](#AMZ-TC006---checkout-process)
- [AMZ-TC007 — UI Responsiveness](#AMZ-TC007---ui-responsiveness)
- [AMZ-TC008 — Logout](#AMZ-TC008---logout)


---

## AMZ-TC001 — Login Success (Positive Test)

**Description:** Verify that a user can successfully log in with correct credentials.  

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com  

**Test Steps:**  
- Navigate to Amazon login page.  
- Enter the email: `heatqa.test@gmail.com`.  
- Enter the correct password.  
- Click the "Sign-In" button.  

**Expected Result:**  
- User is redirected to the account homepage.  
- Account username/email is displayed on the top right.  

**Status:** Passed ✅  

**Screenshot:**  
`![Login Success](screenshots/amazon-login-success-censored.PNG)`  

---

## AMZ-TC002 — Login Failure (Negative Test — Incorrect Password)

**Description:** Verify that login fails when an incorrect password is entered.  

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com  

**Test Steps:**  
- Navigate to Amazon login page.  
- Enter the email: `heatqa.test@gmail.com`.  
- Enter an **incorrect password**.  
- Click the "Sign-In" button.  

**Expected Result:**  
- Login fails.  
- An error message is displayed: “Your password is incorrect” (or equivalent).  

**Status:** Passed ✅  

**Screenshot:**  
`![Login Failed](screenshots/amazon-login-failed.PNG)`  

---

## AMZ-TC003 — Search Product

**Description:** Verify that a product can be searched successfully.  

**Test Steps:**  
- Enter a keyword in the search bar (e.g., "laptop").  
- Click the search icon.  

**Expected Result:**  
- Search results page displays relevant products.  

**Status:** To be executed ⬜  

---

## AMZ-TC004 — Add to Cart

**Description:** Verify that a product can be added to the cart.  

**Test Steps:**  
- Search for a product.  
- Click on a product from the results.  
- Click "Add to Cart".  

**Expected Result:**  
- Product is added to the cart.  
- Cart counter updates correctly.  

**Status:** To be executed ⬜  

---

## AMZ-TC005 — Remove from Cart

**Description:** Verify that a product can be removed from the cart.  

**Test Steps:**  
- Add a product to the cart.  
- Navigate to the cart.  
- Remove the product.  

**Expected Result:**  
- Product is removed from the cart.  
- Cart counter updates correctly.  

**Status:** To be executed ⬜  

---

## AMZ-TC006 — Checkout Process

**Description:** Verify that checkout flow proceeds correctly.  

**Test Steps:**  
- Add product(s) to cart.  
- Click "Proceed to Checkout".  
- Fill in address and payment information.  
- Place the order.  

**Expected Result:**  
- Order is successfully placed.  
- Confirmation page is displayed.  

**Status:** To be executed ⬜  

---

## AMZ-TC007 — UI Responsiveness

**Description:** Verify that the website layout adapts to mobile and tablet screens.  

**Test Steps:**  
- Open Amazon on different screen sizes or use browser dev tools.  
- Navigate through main pages: Home, Product Page, Cart.  

**Expected Result:**  
- Layout and menus adjust properly.  
- Buttons and inputs are usable.  

**Status:** To be executed ⬜  

---

## AMZ-TC008 — Logout

**Description:** Verify that a user can successfully log out.  

**Test Steps:**  
- Log in with valid credentials.  
- Click on "Account & Lists" → "Sign Out".  

**Expected Result:**  
- User is logged out and redirected to the homepage.  

**Status:** To be executed ⬜  
