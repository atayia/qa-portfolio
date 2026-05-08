document.addEventListener("DOMContentLoaded", function () {

  // ==========================================================================
  // 1. FOOTER INJECTION — all pages including index.html
  // ==========================================================================
  const footerElement = document.getElementById('footer-bottom');

  if (footerElement) {

    // Calculate relative path prefix based on page depth
    const path = window.location.pathname;
    const segments = path.split('/').filter(s => s.length > 0);
    const isGitHub = window.location.hostname.includes('github.io');

    // GitHub Pages: /repo-name/folder/file.html → depth = segments - 2 (repo + file)
    // Local:        /folder/file.html            → depth = segments - 1 (file)
    let depth = isGitHub ? segments.length - 2 : segments.length - 1;
    depth = Math.max(0, depth); // Guard against negative values

    let prefix = '';
    for (let i = 0; i < depth; i++) {
      prefix += '../';
    }

    footerElement.innerHTML = `
      <div class="footer-container">
        <div class="footer-col col-left">
          <p class="footer-disclaimer">Independent Audit &bull; Unofficial Client</p>
        </div>
        <div class="footer-col col-center">
          <p>&copy; ${new Date().getFullYear()} Marie-Jo Atayi | Heat QA Solutions</p>
        </div>
        <div class="footer-col col-right">
          <div class="footer-icons">
            <a href="mailto:josianeatayi@gmail.com" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="${prefix}resume/Marie-Jo_Atayi_Resume.pdf" target="_blank" rel="noopener" aria-label="Resume">
              <i class="fas fa-file-pdf"></i>
            </a>
            <a href="https://linkedin.com/in/ayikouele-atayi/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/atayia" target="_blank" rel="noopener" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }


  // ==========================================================================
  // 2. LIGHTBOX MODAL
  // Exposed on window so onclick="openModal()" attributes work from HTML.
  // ==========================================================================
  window.openModal = function (imgSrc) {
    const modal = document.getElementById('evidenceModal');
    const modalImg = document.getElementById('modalImg');
    if (!modal || !modalImg) return;

    modal.style.display = 'flex';
    modalImg.src = imgSrc;
  };

  window.closeModal = function () {
    const modal = document.getElementById('evidenceModal');
    if (!modal) return;
    modal.style.display = 'none';
  };

  // Close on backdrop click
  document.addEventListener('click', function (e) {
    const modal = document.getElementById('evidenceModal');
    if (modal && e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeModal();
  });


  // ==========================================================================
  // 3. SCROLL BUTTONS (Back to Top / Jump to Bottom)
  // Uses addEventListener to avoid overwriting other scroll handlers.
  // ==========================================================================
  const backToTop = document.getElementById('backToTop');
  const jumpToBottom = document.getElementById('jumpToBottom');

  if (backToTop || jumpToBottom) {
    window.addEventListener('scroll', function () {
      const scrolled = document.body.scrollTop > 500 ||
                       document.documentElement.scrollTop > 500;
      const nearBottom = (window.innerHeight + window.scrollY) >=
                         document.body.offsetHeight - 200;

      if (backToTop) {
        backToTop.style.opacity = scrolled ? '1' : '0';
        backToTop.style.pointerEvents = scrolled ? 'auto' : 'none';
      }

      if (jumpToBottom) {
        jumpToBottom.style.opacity = nearBottom ? '0' : '1';
        jumpToBottom.style.pointerEvents = nearBottom ? 'none' : 'auto';
      }
    });
  }

});
