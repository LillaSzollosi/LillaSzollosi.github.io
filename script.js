// Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});