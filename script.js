document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    hamburger.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Close the dropdown if clicked outside
    window.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});