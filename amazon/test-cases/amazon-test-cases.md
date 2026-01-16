# Manual Test Cases - Amazon Suite

### TC-AMZ-001: Valid Login (Positive)
* **Priority:** P0
* **Requirement:** REQ-AMZ-01
* **Preconditions:** User on Sign-in page; Cache cleared.
* **Test Data:** `heatqa.test@gmail.com` / `********`
* **Steps:**
    1. Enter email and click Continue.
    2. Enter valid password and click Sign-In.
* **Expected:** Redirect to Home; Header displays "Hello, Heat".
* **Actual:** Redirect successful; Header updated.
* **Status:** PASS

---

### TC-AMZ-002: Invalid Password (Negative)
* **Priority:** P1
* **Requirement:** REQ-AMZ-02
* **Test Data:** `heatqa.test@gmail.com` / `WrongPass123!`
* **Steps:**
    1. Enter valid email.
    2. Enter incorrect password and click Sign-In.
* **Expected:** Login fails; Error "There was a problem. Your password is incorrect" displays.
* **Actual:** Access denied; Error message verified.
* **Status:** PASS

---

### TC-AMZ-003: Alphanumeric Search (Positive)
* **Priority:** P1
* **Requirement:** REQ-AMZ-03
* **Test Data:** Query: `Logitech MX Master 3S`
* **Steps:**
    1. Input query into global search bar.
    2. Press Enter.
* **Expected:** SERP loads relevant Logitech products; Results count > 0.
* **Actual:** Accurate results displayed; filters functional.
* **Status:** PASS

---

### TC-AMZ-004: Shopping Cart - Persistence (State)
* **Priority:** P2
* **Requirement:** REQ-AMZ-04
* **Preconditions:** User "Heat" has 1 item in cart.
* **Steps:**
    1. Verify cart count is (1).
    2. Log out and close browser.
    3. Re-open browser and log in as `heatqa.test@gmail.com`.
* **Expected:** Cart count persists as (1) post-login.
* **Actual:** Cart state synchronized successfully.
* **Status:** PASS

---

### TC-AMZ-005: Global Search - No Results (Negative)
* **Priority:** P2
* **Requirement:** REQ-AMZ-03
* **Test Data:** Query: `zxyvwk123456789`
* **Steps:**
    1. Input non-existent string into search bar.
    2. Press Enter.
* **Expected:** "No results for..." message displayed with product suggestions.
* **Actual:** Graceful fallback UI triggered.
* **Status:** PASS

---

### TC-AMZ-006: Shopping Cart - Max Quantity (Boundary)
* **Priority:** P2
* **Requirement:** REQ-AMZ-04
* **Test Data:** Qty: `999`
* **Steps:**
    1. Navigate to Cart.
    2. Attempt to update quantity to 999.
* **Expected:** System enforces inventory limit; error message displayed.
* **Actual:** Stock limit enforced correctly.
* **Status:** PASS