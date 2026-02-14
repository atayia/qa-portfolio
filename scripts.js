document.addEventListener("DOMContentLoaded", function () {
    // 1. INJECT ARROWS
    const arrowHTML = `
        <a href="#top" id="backToTop" title="Back to Top"><i class="fas fa-arrow-up"></i></a>
        <a href="#footer-bottom" id="jumpToBottom" title="Jump to Bottom"><i class="fas fa-arrow-down"></i></a>
    `;
    document.body.insertAdjacentHTML('beforeend', arrowHTML);

    // 2. INJECT FOOTER (3 Columns)
    const footerElement = document.getElementById('footer-bottom');
    if (footerElement) {
        footerElement.innerHTML = `
            <div class="footer-container">
                <div class="footer-col col-left">
                    <p class="footer-disclaimer">Independent Audit • Unofficial Client</p>
                </div>
                <div class="footer-col col-center">
                    <p>&copy; ${new Date().getFullYear()} Marie-Jo Atayi | Heat QA Solutions</p>
                </div>
                <div class="footer-col col-right">
                    <div class="footer-icons">
                        <a href="mailto:josianeatayi@gmail.com"><i class="fas fa-envelope"></i></a>
                        <a href="/resume/Marie-Jo_Atayi_Resume.pdf" target="_blank"><i class="fas fa-file-pdf"></i></a>
                        <a href="https://linkedin.com/in/atayia" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/atayia" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. SCROLL BUTTON LOGIC (Back to Top / Jump to Bottom)
    const backToTop = document.getElementById('backToTop');
    const jumpToBottom = document.getElementById('jumpToBottom');

    window.onscroll = function () {
        // Show/Hide Back to Top
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if (backToTop) {
                backToTop.style.opacity = "1";
                backToTop.style.pointerEvents = "auto";
            }
        } else {
            if (backToTop) {
                backToTop.style.opacity = "0";
                backToTop.style.pointerEvents = "none";
            }
        }

        // Hide Jump to Bottom when near the footer
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
            if (jumpToBottom) {
                jumpToBottom.style.opacity = "0";
                jumpToBottom.style.pointerEvents = "none";
            }
        } else {
            if (jumpToBottom) {
                jumpToBottom.style.opacity = "1";
                jumpToBottom.style.pointerEvents = "auto";
            }
        }
    };
});