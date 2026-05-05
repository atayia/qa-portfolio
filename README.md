# Heat QA Solutions — QA Portfolio

Welcome to my Quality Assurance portfolio. I am building the Heat QA Solutions brand as a professional identity for my QA work, learning projects, and future career growth. This repository showcases my **Manual QA work**, with **Automation QA projects coming soon**.

This portfolio is intended primarily for:  
- **Recruiters** – to review my QA skills, documentation style, and testing approach.  
- **Future professional opportunities** – including long-term roles and potential freelance work.

---

## Portfolio Overview

Each client folder contains:

- **Test Cases** — feature-grouped test cases in Markdown format  
- **Screenshots** — evidence of executed tests (sensitive information censored)  
- **Bug Reports** — sample or demo bug reports  
- **Requirements** — sample requirement documents  
- **Test Plans** — test plan documents  
- **Automation** — placeholder folders and scripts for future automation QA

Additionally, the repository includes:

- **index.html** — the website homepage to showcase the portfolio online  
- **styles.css** — the stylesheet used for portfolio pages  
- **Client-specific HTML pages** — for each unofficial client to view deliverables via browser  

---

## Portfolio Structure


```text
qa-portfolio/
├── index.html
├── styles.css
├── README.md
├── resume/
│   └── Marie-Jo_Atayi_Resume.pdf
│
├── amazon/
│   ├── amazon.html
│   │
│   ├── test-plans/
│   │   ├── amazon-test-plan.html
│   │   └── amazon-test-plan.md
│   │
│   ├── test-cases/
│   │   ├── amazon-test-cases.html
│   │   └── amazon-tests.md
│   │
│   ├── requirements/
│   │   ├── amazon-requirements.html
│   │   └── amazon-requirements.md
│   │
│   ├── bug-reports/
│   │   └── amazon-bug-reports.html
│   │
│   ├── screenshots/
│   │   ├── amazon-login-success.png
│   │   ├── amazon-login-failed.png
│   │   ├── amazon-screenshots.html
│   │   └── thumbs/
│   │       ├── amazon-login-success-thumb.png
│   │       └── amazon-login-failed-thumb.png
│   │
│   └── automation/
│       ├── amazon-automation.html
│       ├── README.md
│       ├── requirements.txt
│       ├── configs/
│       │   └── config.yaml
│       ├── pages/
│       │   ├── login_page.py
│       │   └── search_page.py
│       ├── tests/
│       │   ├── test_login.py
│       │   └── test_search.py
│       └── utils/
│           └── driver_factory.py
│
├── delta/
│   ├── delta.html
│   │
│   ├── test-plans/
│   │   ├── delta-test-plan.html
│   │   └── delta-test-plan.md
│   │
│   ├── test-cases/
│   │   ├── delta-test-cases.html
│   │   └── delta-tests.md
│   │
│   ├── requirements/
│   │   ├── delta-requirements.html
│   │   └── delta-requirements.md
│   │
│   ├── bug-reports/
│   │   └── delta-bug-reports.html
│   │
│   ├── screenshots/
│   │   └── delta-screenshots.html
│   │
│   └── automation/
│       ├── delta-automation.html
│       ├── README.md
│       ├── requirements.txt
│       ├── configs/
│       │   └── config.yaml
│       ├── pages/
│       │   ├── login_page.py
│       │   └── search_page.py
│       ├── tests/
│       │   ├── test_login.py
│       │   └── test_search.py
│       └── utils/
│           └── driver_factory.py
│
└── macys/
    ├── macys.html
    │
    ├── test-plans/
    │   ├── macys-test-plan.html
    │   └── macys-test-plan.md
    │
    ├── test-cases/
    │   ├── macys-test-cases.html
    │   └── macys-tests.md
    │
    ├── requirements/
    │   ├── macys-requirements.html
    │   └── macys-requirements.md
    │
    ├── bug-reports/
    │   └── macys-bug-reports.html
    │
    ├── screenshots/
    │   └── macys-screenshots.html
    │
    └── automation/
        ├── macys-automation.html
        ├── README.md
        ├── requirements.txt
        ├── configs/
        │   └── config.yaml
        ├── pages/
        │   ├── login_page.py
        │   └── search_page.py
        ├── tests/
        │   ├── test_login.py
        │   └── test_search.py
        └── utils/
            └── driver_factory.py
```

---


---

## How to View Test Cases and Deliverables

1. Start from the main `index.html` page and select a client (Amazon, Delta, or Macy’s) to open that client’s **summary page**, which provides an overview of deliverables and links to dedicated internal HTML pages. 
2. Each client page contains **tiles** for:
   - Test Plans  
   - Requirements  
   - Test Cases  
   - Bug Reports  
   - Automation (coming soon placeholders)  
3. Clicking a tile opens the corresponding internal HTML deliverable page (Test Plans, Requirements, Test Cases, Bug Reports, or Automation).
4. Screenshots are embedded directly within Test Cases as execution evidence. A dedicated Screenshots HTML page is linked from the Test Plan to provide a centralized visual reference using thumbnail previews.


---

## Portfolio Navigation Notes

- **All clients are unofficial** and are used solely for skills demonstration and portfolio purposes.
- Each client follows a **consistent deliverable structure**, with every major artifact presented through a **dedicated internal HTML page**:
  - Test Cases  
  - Test Plans  
  - Requirements  
  - Bug Reports  
  - Screenshots (where applicable)  
  - Automation (in progress / placeholder)
- HTML pages serve as the **primary review interface** for this portfolio.  
  Markdown files are retained as **source or reference artifacts** within the repository.
- Screenshots are handled intentionally:
  - Execution evidence is embedded directly within relevant **Test Case pages**, and  
  - A dedicated **Screenshots HTML page** is linked from Test Plans or client summaries when a consolidated view is appropriate.
- All screenshots containing sensitive or identifying information are **properly censored**.
- Each client includes an **Automation QA folder** structured with configs, pages, tests, utilities, and documentation to demonstrate scalability and readiness for automation work.
- The portfolio is structured for **clear, recruiter-friendly navigation**, without requiring reviewers to browse raw repository files.
- The main `index.html` acts as the **central entry point**, linking to each client’s summary page.
- All links use **relative paths** to prevent breakage if the repository is renamed or cloned.

---

## Future Work

1. Continue executing manual test cases and expanding execution evidence.
2. Add and refine corresponding bug reports per client.
3. Finalize and polish all internal HTML deliverable pages.
4. Expand automation scripts and fully link automation pages as development progresses.
5. Apply optional UI enhancements (icons, dark theme, visual polish).
6. Keep footer “last updated” information current to reflect ongoing improvements.

---

## Contact

For questions or professional opportunities, please connect via email, LinkedIn, or GitHub.  
Links are available on `index.html` and on individual client pages.

- Email: josianeatayi@gmail.com  
- LinkedIn: [ayikouele-atayi](https://www.linkedin.com/in/ayikouele-atayi)  
- GitHub: [atayia](https://github.com/atayia)
