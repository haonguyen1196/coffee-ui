const topMenu = document.getElementById('header-top-menu');
const topMenuIcon = document.getElementById('header-menu-icon');

document.addEventListener('click', (e) => {
    if(topMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('ct-menu-expended')
        topMenu.classList.toggle('hidden')
    } else {
        if(topMenu.classList.contains('ct-menu-expended')) {
            topMenu.classList.remove('ct-menu-expended')
            topMenu.classList.add('hidden')
        }
    }
})