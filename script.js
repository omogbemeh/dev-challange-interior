const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');
const headerContainer = document.querySelector('#header-container')

openMenu.addEventListener('click', (e) => {
    headerContainer.className = 'container open'
})

closeMenu.addEventListener('click', (e) => {
    headerContainer.className = 'container close'
})

