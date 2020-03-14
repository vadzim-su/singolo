const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const tagsID = anchor.getAttribute('href')
        document.querySelector('' + tagsID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}