function hamburger() {
    var navLinks = document.getElementById("nav-links");
    var authButtons = document.querySelector(".auth-buttons");
    
    navLinks.classList.toggle("show");
    authButtons.classList.toggle("show");
    
    
    var hamburgerIcon = document.querySelector(".hamburger-menu");
    hamburgerIcon.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    var navLinks = document.getElementById("nav-links");
    var authButtons = document.querySelector(".auth-buttons");
    var hamburgerIcon = document.querySelector(".hamburger-menu");
    
    if (!event.target.closest('nav')) {
        navLinks.classList.remove("show");
        authButtons.classList.remove("show");
        hamburgerIcon.classList.remove("active");
    }
});