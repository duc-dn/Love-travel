let header = document.querySelector('.header')
let btnClose = document.getElementById('btn-close')
let pcMenu = document.getElementById('pc-menu')
console.log(pcMenu)
let pcMenuContainer = document.getElementById('pc-menu__container')
let menu = document.getElementById('menu')
window.addEventListener("scroll", (e) => {
    let y = pageYOffset;
    
    if (y >= 300) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
})


function showPcMenu() {
    pcMenu.style.cssText = 'display: block; opacity: 1'
    pcMenuContainer.style.transform = 'translateX: 0'
}
menu.addEventListener('click', showPcMenu) 

function hidePcMenu() {
    pcMenu.style.cssText = 'display: none;'
}
btnClose.addEventListener('click', hidePcMenu)

pcMenu.addEventListener('click', hidePcMenu)
pcMenuContainer.addEventListener("click", function(e) {
    e.stopPropagation();
})