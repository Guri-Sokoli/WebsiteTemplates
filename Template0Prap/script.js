document.addEventListener("DOMContentLoaded", function() {
    // Get all header links with data-scroll-to attribute
    const headerLinks = document.querySelectorAll("a[data-scroll-to]");

    // Add click event listeners to each link
    headerLinks.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("data-scroll-to");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset =
                    targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                });
            }
        });
    });
});

window.addEventListener("unload", function() {
    // Your unload event code
});

window.addEventListener("pagehide", function() {
    // Your pagehide event code
});
