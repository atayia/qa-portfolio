document.addEventListener("DOMContentLoaded", function () {

    // Get the current URL path segments
    const path = window.location.pathname;
    const segments = path.split('/').filter(s => s.length > 0);

    // 2. Calculate how deep we are
    // GitHub Pages: /repo-name/folder/subfolder/index.html -> ["repo", "folder", "subfolder", "index.html"]
    // Ignore the 'repo' name and the 'filename'.
    const isGitHub = window.location.hostname.includes('github.io');

    // Depth -> total segments minus the repo name
    let depth = isGitHub ? segments.length - 2 : segments.length - 1;

    // Build the prefix dynamically (e.g., "", "../", or "../../")
    let prefix = "";
    if (depth > 0) {
        for (let i = 0; i < depth; i++) {
            prefix += "../";
        }
    }

    console.log("Path Segments:", segments);
    console.log("Calculated Prefix:", prefix);

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
                        <a href="${prefix}resume/Marie-Jo_Atayi_Resume.pdf" target="_blank"><i class="fas fa-file-pdf"></i></a>
                        <a href="https://linkedin.com/in/ayikouele-atayi/" target="_blank"><i class="fab fa-linkedin"></i></a>
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