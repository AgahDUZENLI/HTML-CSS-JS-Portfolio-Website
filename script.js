function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Selects the menu element
    const icon = document.querySelector(".hamburger-icon"); // Selects the hamburger icon element

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
