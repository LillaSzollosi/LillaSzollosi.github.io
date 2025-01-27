
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the clicked area is outside the menu or hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');  // Close the menu
    }
});
