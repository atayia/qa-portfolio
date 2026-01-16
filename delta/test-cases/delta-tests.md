# Unofficial client - Delta Manual Test Cases

**Tester Email:** heatqa.test@gmail.com

---

## Table of Contents

- [DLT-TC001 — Login Success (Positive Test)](#dlt-tc001---login-success-positive-test)
- [DLT-TC002 — Login Failure (Negative Test)](#dlt-tc002---login-failure-negative-test)
- [DLT-TC003 — Search Flight](#dlt-tc003---search-flight)
- [DLT-TC004 — Book Flight](#dlt-tc004---book-flight)
- [DLT-TC005 — Cancel Booking](#dlt-tc005---cancel-booking)
- [DLT-TC006 — UI Responsiveness](#dlt-tc006---ui-responsiveness)
- [DLT-TC007 — Logout](#dlt-tc007---logout)

---

## DLT-TC001 — Login Success (Positive Test)

**Description:** Verify a user can log in with valid credentials.

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com

**Test Steps:**  
- Navigate to Delta login page.  
- Enter email: `heatqa.test@gmail.com`.  
- Enter correct password.  
- Click "Sign In".  

**Expected Result:**  
- User successfully logs in.  
- Homepage displays user information.  

**Status:** To be executed ⬜  

**Screenshot:**  
`![Login Success](screenshots/delta-login-success.PNG)`

---

## DLT-TC002 — Login Failure (Negative Test)

**Description:** Verify login fails with incorrect password.

**Preconditions:**  
- User has a valid account: heatqa.test@gmail.com

**Test Steps:**  
- Navigate to Delta login page.  
- Enter email: `heatqa.test@gmail.com`.  
- Enter incorrect password.  
- Click "Sign In".  

**Expected Result:**  
- Login fails and error message is displayed.  

**Status:** To be executed ⬜  

**Screenshot:**  
`![Login Failed](screenshots/delta-login-failed.PNG)`

---

## DLT-TC003 — Search Flight

**Description:** Verify users can search for flights.  

**Test Steps:**  
- Enter origin, destination, and travel dates.  
- Click "Search".  

**Expected Result:**  
- Relevant flights appear in search results.  

**Status:** To be executed ⬜  

---

## DLT-TC004 — Book Flight

**Description:** Verify a user can book a flight successfully.  

**Test Steps:**  
- Select a flight from search results.  
- Enter passenger details.  
- Complete payment process.  

**Expected Result:**  
- Booking confirmation page is displayed.  

**Status:** To be executed ⬜  

---

## DLT-TC005 — Cancel Booking

**Description:** Verify a user can cancel a booking.  

**Test Steps:**  
- Navigate to "My Trips".  
- Select a booking and click "Cancel".  

**Expected Result:**  
- Booking is successfully canceled.  

**Status:** To be executed ⬜  

---

## DLT-TC006 — UI Responsiveness

**Description:** Verify Delta site adapts to mobile/tablet screens.  

**Test Steps:**  
- Open site on various screen sizes.  
- Navigate main pages.  

**Expected Result:**  
- Layout and menus adjust properly.  

**Status:** To be executed ⬜  

---

## DLT-TC007 — Logout

**Description:** Verify a user can log out successfully.  

**Test Steps:**  
- Log in with valid credentials.  
- Click "Sign Out".  

**Expected Result:**  
- User is logged out and redirected to homepage.  

**Status:** To be executed ⬜  
