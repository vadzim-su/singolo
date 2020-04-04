// Header

document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".navbar a");

  sections.forEach(el => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach(a => {
        a.classList.remove("active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}

// Slider. Переключение слайдов

// ......

// Slider. Активация экранов телефонов

const phones = document.querySelectorAll(".slide>div");
const phonesDisplay = document.querySelectorAll(".slide>div>img:last-of-type");

for (let i = 0; i < phones.length; i++) {
  phones[i].addEventListener("click", dissapearImg);
  function dissapearImg() {
    phonesDisplay[i].classList.toggle("disappear");
  }
}

//Portfolio. Переключение табов

const tabs = document.querySelectorAll(".image_buttons>li");
const images = document.querySelectorAll(".images_block>img");
const imagesBlock = document.querySelector(".images_block");
const classArray = [];
const newClassArray = [];

tabs.forEach(item => {
  item.addEventListener("click", activeTab);
});
function activeTab() {
  tabs.forEach(item => {
    item.classList.remove("activeTab");
  });
  this.classList.add("activeTab");

  images.forEach(item => {
    item.setAttribute("class", Math.floor(Math.random() * images.length));
    classArray.push(item);
  });

  classArray.sort((a, b) => a.getAttribute("class") - b.getAttribute("class"));

  imagesBlock.innerHTML = "";
  classArray.forEach(item => imagesBlock.appendChild(item));

  //   classArray = [];
}

//Portfolio. Взаимодействие с картинками

const portfolioImage = document.querySelectorAll(".images_block>img");

portfolioImage.forEach(item => {
  item.addEventListener("click", activeImage);
});

function activeImage() {
  portfolioImage.forEach(item => {
    item.classList.remove("activeImage");
  });
  this.classList.add("activeImage");
}

//Get a quote

const submit = document.querySelector("#submit");
const inputData = document.querySelectorAll(".inputData");
const showPopup = document.querySelector("#popup");
const closePopup = document.querySelector(".popup_close");
const buttonOk = document.querySelector(".button_ok");
const userInfo = document.querySelector(".popup__body");
const allInputs = document.querySelectorAll(".userInfo>input");
const requires = document.querySelectorAll("[required]");

submit.addEventListener("click", function(event) {
  event.preventDefault();

  if (requires[0].value && requires[1].value) {
    userInfo.innerHTML = "";

    const span1 = document.createElement("span");
    if (inputData[0].value) {
      span1.innerHTML = "Subject: " + inputData[0].value;
    } else {
      span1.innerHTML = "No subject";
    }

    userInfo.appendChild(span1);

    const span2 = document.createElement("span");
    if (inputData[1].value) {
      span2.innerHTML = "Description: " + inputData[1].value;
    } else {
      span2.innerHTML = "No description";
    }

    userInfo.appendChild(span2);

    showPopup.style.display = "block";

    buttonOk.onclick = closePopup.onclick = function() {
      showPopup.style.display = "none";
      allInputs.forEach(item => {
        item.value = "";
      });
    };
  }
});

closePopup.onclick = function() {
  showPopup.style.display = "none";
};

//bar

const logo = document.querySelector(".logo");
const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");
const overlay = document.createElement("div");
const sideBar = document.createElement("div");
const logoHead = document.createElement("div");

bar.addEventListener("click", () => {
  bar.classList.add("rotate");

  sideBar.appendChild(logoHead);
  sideBar.appendChild(navbar);
  overlay.appendChild(sideBar);
  document.body.appendChild(overlay);

  overlay.classList.add("overlay");
  sideBar.classList.add("sideBar");
  logoHead.classList.add("new_menu");

  logoHead.innerHTML = bar.innerHTML + logo.innerHTML;
});
