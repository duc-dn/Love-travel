const header = document.querySelector('.header')
const btnClose = document.getElementById('btn-close')
const backToTop = document.querySelector('.btn-to-top')
const pcMenuOverlay = document.getElementById('pc-menu__overlay')
const pcMenuContainer = document.getElementById('pc-menu__container')
const menu = document.getElementById('menu')

const posDestination = document.querySelector('.destinations').offsetTop;
// Xử lý navabar khi cuộn thì dính lên trên
window.addEventListener("scroll", (e) => {
    let y = pageYOffset;

    if (y >= 300) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }

    if (y >= posDestination) {
        backToTop.classList.add('active')
    } else {
        backToTop.classList.remove('active')
    }
})

// Xử lý khi click nút back to backToTop
backToTop.onclick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0)
}

// menu trên pc
function showPcMenu() {
    pcMenuOverlay.style.cssText = 'opacity: 1; display: block'
    pcMenuContainer.style.cssText = 'transform: translateX(0); opacity: 1'
}
menu.addEventListener('click', showPcMenu)


function hidePcMenu() {
    pcMenuContainer.style.cssText = 'transform: translateX(105%);'
    pcMenuOverlay.style.cssText = 'opacity: 0; display: none'
}
btnClose.addEventListener('click', hidePcMenu)
pcMenuOverlay.addEventListener('click', hidePcMenu)


pcMenuContainer.addEventListener("click", function (e) {
    e.stopPropagation();
})