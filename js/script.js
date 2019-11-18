function handleMenu() {
    const menu = document.getElementById('menu');

    menu.className === 'nav__list' ? menu.className = 'responsive' : menu.className = 'nav__list';
}