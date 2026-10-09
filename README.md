# Heat QA Solutions — QA Portfolio

[![Playwright Tests](https://github.com/atayia/qa-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/atayia/qa-portfolio/actions/workflows/playwright.yml)

**Marie-Jo Atayi** · Independent QA Engineer · Building toward AI QA Engineering

🔗 **Live portfolio:** [atayia.github.io/qa-portfolio](https://atayia.github.io/qa-portfolio/)

Independent QA audits of real-world applications, documented end to end: requirements traceability,
test planning, manual execution with evidence, defect and observation reporting, and automation
running in CI.

> **Disclaimer:** All audits are independent and conducted solely for portfolio and skills
> demonstration. No company listed here has a commercial relationship with Heat QA Solutions.

---

## Roadmap

| Phase | Focus | Status |
|---|---|---|
| 1 | Manual QA | ✅ Complete |
| 2 | API Testing | ✅ Complete |
| 3 | Automation | 🔄 Active |
| 4 | AI QA Engineering — testing AI systems for output reliability, hallucination, and bias | 🎯 Next |

---

## Case Studies

### Amazon — E-Commerce UI Audit
Manual and automated verification of authentication, search, cart, and accessibility (WCAG 2.1 AA).

| Deliverable | Live page |
|---|---|
| Project hub | [View](https://atayia.github.io/qa-portfolio/amazon/amazon.html) |
| Requirements (RTM) | [View](https://atayia.github.io/qa-portfolio/amazon/amazon-requirements.html) |
| Test plan | [View](https://atayia.github.io/qa-portfolio/amazon/amazon-test-plan.html) |
| Test cases & execution log | [View](https://atayia.github.io/qa-portfolio/amazon/amazon-test-cases.html) |
| UI automation (Playwright) | [View](https://atayia.github.io/qa-portfolio/amazon/amazon-automation.html) |
| Defects & observations | [View](https://atayia.github.io/qa-portfolio/amazon/amazon-bug-reports.html) |

**Highlights**
- 8 manual test cases with screenshot and network evidence
- 3 test cases automated with Playwright (TypeScript), running in GitHub Actions on every change
- Investigated a flaky CI test and traced it to Amazon serving different page variants by network origin ([AMZ-OBS-001](https://atayia.github.io/qa-portfolio/amazon/amazon-bug-reports.html#AMZ-OBS-001))
- Identified account enumeration through the email-first sign-in flow ([AMZ-OBS-002](https://atayia.github.io/qa-portfolio/amazon/amazon-bug-reports.html#AMZ-OBS-002))

### Stripe — REST API Audit
API testing of Stripe's payment lifecycle in the sandbox: PaymentIntents, Charges, Refunds,
Auth, and Error Handling.

| Deliverable | Live page |
|---|---|
| Project hub | [View](https://atayia.github.io/qa-portfolio/stripe/stripe.html) |
| API contract (RTM) | [View](https://atayia.github.io/qa-portfolio/stripe/stripe-requirements.html) |
| Test plan | [View](https://atayia.github.io/qa-portfolio/stripe/stripe-test-plan.html) |
| Test cases | [View](https://atayia.github.io/qa-portfolio/stripe/stripe-test-cases.html) |
| API automation (Postman) | [View](https://atayia.github.io/qa-portfolio/stripe/stripe-automation.html) |
| Bug reports | [View](https://atayia.github.io/qa-portfolio/stripe/stripe-bug-reports.html) |

**Highlights**
- 14 test cases, including negative paths, auth failures, and input validation
- 12 automated with Postman script assertions (`pm.test` / `pm.expect`)
- Exported Postman collection: [`stripe/stripe-collection.json`](stripe/stripe-collection.json)

---

## Skills Demonstrated

- **Manual testing:** functional, negative, boundary (BVA), state, exploratory, accessibility (WCAG 2.1 AA, VoiceOver)
- **Test design:** requirements traceability (RTM), test planning, test case design, defect and observation reporting
- **API testing:** REST, Postman, status code and contract verification, state chaining
- **Automation:** Playwright (TypeScript), role-based locators, Postman scripts
- **CI/CD:** GitHub Actions
- **Tools:** Chrome DevTools, Git, VS Code

---

## Repository Structure

```text
qa-portfolio/
├── index.html                 ← Portfolio landing page
├── styles.css / scripts.js    ← Shared styles and footer
├── amazon/                    ← Amazon audit pages + screenshots/
├── stripe/                    ← Stripe audit pages, Postman collection + screenshots_stripe/
├── automation/                ← Playwright project (TypeScript)
│   └── tests/amazon/          ← Specs + evidence screenshots
├── .github/workflows/         ← GitHub Actions CI
├── docs/                      ← Reusable HTML component snippets
└── resume/                    ← Resume (PDF)
```

The HTML pages are the source of truth. Browse the [live portfolio](https://atayia.github.io/qa-portfolio/) rather than the raw files.

### Run the automation locally

```bash
cd automation
npm ci
npx playwright install chromium
npx playwright test
```

---

## Contact

- **LinkedIn:** [ayikouele-atayi](https://www.linkedin.com/in/ayikouele-atayi)
- **GitHub:** [atayia](https://github.com/atayia)
- **Email:** josianeatayi@gmail.com

*Last updated: October 2026*