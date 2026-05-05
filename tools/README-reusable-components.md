# Heat QA Component Library

## 1. Evidence Block (Grid)
*To be used at the bottom of any Test Case or Bug Report.*

```html
<div class="evidence-area">
  <div class="evidence-box">
    <h4>UI Validation</h4>
    <img src="../screenshots/your-image.png" alt="UI Screenshot" class="tc-screenshot">
  </div>
  
  <div class="evidence-box">
    <h4>API / Console Log</h4>
    <div class="placeholder-box">
      <i class="fas fa-code"></i> [Placeholder: api_response_200.png]
    </div>
  </div>
</div>

<div class="tc-separator"></div>
```



## 2. Audit Trail & History Table
*To be used for the Defect History section in Bug Reports or Requirement Logs.*

```html
<div class="audit-trail-container">
  <h3 class="label-text audit-trail-header"><i class="fas fa-history"></i> Defect History & Audit Trail</h3>
  <table class="history-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Status</th>
        <th>Action / Note</th>
        <th>Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jan 21, 2026</td>
        <td><span class="status-badge status-new">New</span></td>
        <td>Initial discovery and documentation.</td>
        <td>Heat</td>
      </tr>
      <tr>
        <td>--</td>
        <td><span class="status-pending-text">Pending</span></td>
        <td>Developer Triage</td>
        <td>--</td>
      </tr>
    </tbody>
  </table>
</div>
```




