let iphones = {
    Purple: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896',
    Gold: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907',
    Silver: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892',
    Black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897'
}

let mainImg = document.querySelector('.main_left')
let btns = document.querySelectorAll('button[data-color]')
let colorTxt = document.querySelector('.main_right_color_chose p')
let text = ''

btns.forEach(item => {
    item.onclick = () => {
        let key = item.getAttribute('data-color')
        mainImg.style.backgroundImage = `url("${iphones[key]}")`
        text = key
    }
    item.onmouseenter = () => {
        let key = item.getAttribute('data-color')
        colorTxt.innerHTML = `Color - ${key}`
    }
    item.onmouseout = () => {
        colorTxt.innerHTML = `Color - ${text}`
    }
})