# Unofficial client - Macy’s Manual Test Cases

**Tester Email:** heatqa.test@gmail.com

---

## Table of Contents

- [TC001 — Login Success (Positive Test)](#tc001---login-success-positive-test)
- [TC002 — Login Failure (Negative Test)](#tc002---login-failure-negative-test)
- [TC003 — Search Product](#tc003---search-product)
- [TC004 — Add to Cart](#tc004---add-to-cart)
- [TC005 — Remove from Cart](#tc005---remove-from-cart)
- [TC006 — Checkout Process](#tc006---checkout-process)
- [TC007 — UI Responsiveness](#tc007---ui-responsiveness)
- [TC008 — Logout](#tc008---logout)

---

## TC001 — Login Success (Positive Test)

**Description:** Verify a user can log in with valid credentials.

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com

**Test Steps:**  
- Navigate to Macy’s login page.  
- Enter email: `heatqa.test@gmail.com`.  
- Enter correct password.  
- Click "Sign In".  

**Expected Result:**  
- User successfully logs in.  
- Homepage displays user info.  

**Status:** To be executed ⬜  

**Screenshot:**  
`![Login Success](screenshots/macys-login-success.PNG)`

---

## TC002 — Login Failure (Negative Test)

**Description:** Verify login fails with incorrect password.

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com

**Test Steps:**  
- Navigate to Macy’s login page.  
- Enter email: `heatqa.test@gmail.com`.  
- Enter incorrect password.  
- Click "Sign In".  

**Expected Result:**  
- Login fails and error message is displayed.  

**Status:** To be executed ⬜  

**Screenshot:**  
`![Login Failed](screenshots/macys-login-failed.PNG)`

---

## TC003 — Search Product

**Description:** Verify users can search for products.  

**Test Steps:**  
- Enter product name in search bar.  
- Click search.  

**Expected Result:**  
- Relevant products appear in search results.  

**Status:** To be executed ⬜  

---

## TC004 — Add to Cart

**Description:** Verify a product can be added to cart.  

**Test Steps:**  
- Select a product from search results.  
- Click "Add to Cart".  

**Expected Result:**  
- Product is added.  
- Cart counter updates.  

**Status:** To be executed ⬜  

---

## TC005 — Remove from Cart

**Description:** Verify a product can be removed from cart.  

**Test Steps:**  
- Navigate to cart.  
- Remove a product.  

**Expected Result:**  
- Product is removed.  
- Cart counter updates.  

**Status:** To be executed ⬜  

---

## TC006 — Checkout Process

**Description:** Verify checkout flow works.  

**Test Steps:**  
- Add product(s) to cart.  
- Click "Checkout".  
- Complete payment details.  

**Expected Result:**  
- Order is successfully placed.  

**Status:** To be executed ⬜  

---

## TC007 — UI Responsiveness

**Description:** Verify Macy’s site adapts to mobile/tablet screens.  

**Test Steps:**  
- Open site on different screen sizes.  
- Navigate main pages.  

**Expected Result:**  
- Layout and menus adjust properly.  

**Status:** To be executed ⬜  

---

## TC008 — Logout

**Description:** Verify a user can log out.  

**Test Steps:**  
- Log in with valid credentials.  
- Click "Sign Out".  

**Expected Result:**  
- User is logged out and redirected to homepage.  

**Status:** To be executed ⬜  
