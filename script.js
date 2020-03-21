// Header

        // var#1

// const anchors = document.querySelectorAll('a[href^="#"]')
// console.log(anchors)

// for(let anchor of anchors) {
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
//         const tagsID = anchor.getAttribute('href')
//         document.querySelector('' + tagsID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })
//     })
// }

        // var#2   
        
document.addEventListener('scroll', onScroll )

function onScroll(event){
    const curPos = window.scrollY
    const sections = document.querySelectorAll('.section')
    const links = document.querySelectorAll('.navbar a')

    sections.forEach((el) => {
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
            links.forEach((a) => {
                a.classList.remove('active')
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active')
                }
            })
        }
    })
}


// Slider. Переключение слайдов


// ......


// Slider. Активация экранов телефонов


let phones = document.querySelectorAll('.slide>div')
let phonesDisplay = document.querySelectorAll('.slide>div>img:last-of-type')

for (let i = 0; i < phones.length; i++) {
    phones[i].addEventListener('click', dissapearImg)
    function dissapearImg (){
        phonesDisplay[i].classList.toggle('disappear')
    }
}


//Portfolio. Переключение табов


let tabs = document.querySelectorAll('.image_buttons>li')
console.log(tabs)

tabs.forEach((item) => {
    item.addEventListener('click', activeTab)
})
    function activeTab(){   
        tabs.forEach(item => {
            item.classList.remove('activeTab')
        })
        this.classList.add('activeTab')
        
    }




//Portfolio. Взаимодействие с картинками


let portfolioImage = document.querySelectorAll('.images_block>img')

portfolioImage.forEach((item) => {
    item.addEventListener('click', activeImage)
})

    function activeImage(){   
        portfolioImage.forEach(item => {
            item.classList.remove('activeImage')
        })
        this.classList.add('activeImage')
        
    }
