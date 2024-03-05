document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Form submission handling
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Here you can perform actions like sending the form data to a server or displaying a thank you message
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        form.reset(); // Clear the form fields after submission
    });
});
