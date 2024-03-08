document.addEventListener("DOMContentLoaded", function() {
 
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
 
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
       
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        form.reset(); 
    });
});
