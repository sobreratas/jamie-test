
//CARD CLASS INTERSECTION OBSERVER 
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

cards.forEach(card => {
    observer.observe(card)
})

//MIDDLE CARD CLASS INTERSECTION OBSERVER 
const middleCards = document.querySelectorAll(".middle-card");

const middleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

middleCards.forEach(card => {
    observer.observe(card)
})

//RIGHT VERTICAL CARD CLASS INTERSECTION OBSERVER 
const rightVerticalCards = document.querySelectorAll(".right-vertical-card");

const rightVerticalObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

rightVerticalCards.forEach(card => {
    observer.observe(card)
})

//LEFT CARD CLASS INTERSECTION OBSERVER 
const leftCards = document.querySelectorAll(".left-card");

const leftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

leftCards.forEach(leftCard => {
    observer.observe(leftCard)
})

//RIGHT CLASS INTERSECTION OBSERVER 
const rightCards = document.querySelectorAll(".right-card");

const rightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

rightCards.forEach(rightCard => {
    observer.observe(rightCard)
})

//TAB LINK FUNCTIONALITY
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


//GO TO TOP BUTTON FUNCTIONALITY AND DARK MODE STYLES
// const sidemenu = document.getElementById("sidemenu");
const goTopBtn = document.querySelector(".go-top-btn")
// let toggleBtn = document.querySelector(".toggle-btn");
// let btnIcon = document.getElementById("btnIcon");
// const softwareDevText = document.querySelector(".software-dev");
// const arrowUp = document.querySelector(".fa-arrow-up");
// const lightDarkLi = document.querySelector(".light-dark");
// const themeBtn = document.querySelector(".theme-btn")
// const w = document.documentElement.clientWidth

// themeBtn.onclick = function () {
//     document.body.classList.toggle("light-mode");

//     if (document.body.classList.contains("light-mode")) {
//         toggleBtn.classList = "fa-regular fa-moon toggle-btn";
//         sidemenu.style.right = "-200px";
//         goTopBtn.style.visibility = "visible";
//         arrowUp.style.color = "white";
//         lightDarkLi.innerText = "Dark"
//         themeBtn.style.border = "1px solid black"
//     } else {
//         toggleBtn.classList = "fa-regular fa-sun toggle-btn";
//         sidemenu.style.right = "-200px";
//         goTopBtn.style.visibility = "visible";
//         arrowUp.style.color = "black";
//         lightDarkLi.innerText = "Light"
//         themeBtn.style.border = "1px solid white"
//         softwareDevText.style.color = "#fff";  
//     }
// }

function openmenu() {
    sidemenu.style.right = "0px";
    goTopBtn.style.visibility = "hidden"

}

function closemenu() {
    sidemenu.style.right = "-200px";
    goTopBtn.style.visibility = "visible"
}

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;

//HEADER PARALLAX SCROLL
const headerText = document.querySelector(".header-text");

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    headerText.style.left = value * -2 + 'px';
});

const slideContainer = document.querySelector(".slide-container");
        const indicatorContainer = document.querySelector(".indicator-container");

        const images = [
            { path: 'images/history-1.jpg' },
            { path: 'images/history-2.jpg' },
            { path: 'images/history-3.jpg' },
            { path: 'images/history-4.jpg' },
            { path: 'images/history-5.jpg' },
            { path: 'images/history-6.jpg' },

        ];

        let current = 0;

        window.addEventListener('DOMContentLoaded', () => {
            let indicatorMap = images.map(image => {
                return `<div class="indicator"></div>`
            })

            indicatorContainer.innerHTML = indicatorMap.join('');
            let imageMap = images.map(image => {
                return `<img src="${image.path}" alt="">`
            })

            slideContainer.innerHTML = imageMap.join('');

            const prevBtn = document.getElementById("prevBtn");
            const nextBtn = document.getElementById("nextBtn");
            const indicators = document.querySelectorAll(".indicator");

            indicators[0].classList.add("active");
            prevBtn.classList.add("hidden")
            const prev = () => {
                removeActiveFromIndicator();
                setPrevCurrent();
            }

            const next = () => {
                removeActiveFromIndicator();
                setNextCurrent();
            }

            function removeActiveFromIndicator() {
                indicators.forEach(indicator => {
                    indicator.classList.remove("active");
                })
            }

            function setPrevCurrent() {
                if (current === 0) {
                    
                    nextBtn.classList.remove("hidden")
                    current = images.length - 1;
                    slideContainer.style.transform = `translateX(-${current * 100}%)`;
                    indicators[current].classList.add("active");
                } else {
                    current -= 1
                    if(current === 0){
                        prevBtn.classList.add("hidden")
                    }
                    nextBtn.classList.remove("hidden")
                    slideContainer.style.transform = `translateX(-${current * 100}%)`;
                    indicators[current].classList.add("active");
                }
                console.log(current)
            }

            function setNextCurrent() {
                if (current === images.length - 1) {
                    nextBtn.classList.add("hidden");
                    current = 0;
                    slideContainer.style.transform = `translateX(-${current * 100}%)`;
                    indicators[current].classList.add("active");
                } else {
                    current += 1;
                    if (current === images.length - 1) {
                        nextBtn.classList.add("hidden"); // Hide next button when on second-to-last image
                    }
                    prevBtn.classList.remove("hidden"); // Ensure previous button is visible
                    slideContainer.style.transform = `translateX(-${current * 100}%)`;
                    indicators[current].classList.add("active");
                }
            }

            prevBtn.addEventListener('click', prev);
            nextBtn.addEventListener('click', next);
        });
