// Header
 
        
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

tabs.forEach((item) => {
    item.addEventListener('click', activeTab)
})
    function activeTab(){   
        tabs.forEach(item => {
            item.classList.remove('activeTab')
        })
        this.classList.add('activeTab')
        
    }

// ......


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


    //Get a quote


    let submit = document.querySelector('#submit')
    let inputData = document.querySelectorAll('.inputData')
    let showPopup = document.querySelector('#popup')
    let closePopup = document.querySelector('.popup_close');
    let buttonOk = document.querySelector('.button_ok')
    let userInfo = document.querySelector('.popup__body')
    let allInputs = document.querySelectorAll('.userInfo>input')

    submit.addEventListener('click', function(event) {
        event.preventDefault();

        showPopup.style.display = 'block'

        let span1 = document.createElement('span')
        if(inputData[0].value){
            span1.innerHTML = 'Subject: ' + inputData[0].value
           } 
           else {
            span1.innerHTML = 'No subject'
           }
          

        let span2 = document.createElement('span')
        if(inputData[1].value){
            span2.innerHTML = 'Description: ' + inputData[1].value
           } 
           else {
            span2.innerHTML = 'No description'
           }
        userInfo.appendChild(span1)
        userInfo.appendChild(span2)
        
        buttonOk.onclick = closePopup.onclick = function(){
            showPopup.style.display = 'none'
            allInputs.forEach((item) => {
                item.value = ''
            }) 
    
            span1.remove()
            span2.remove()
    
        }

    });

    closePopup.onclick = function () {
        showPopup.style.display = 'none'
    }

    // window.onclick = function (e) {
    //     if (e.target == showPopup) {
    //         showPopup.style.display = 'none'
    //     }
    // }


