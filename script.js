// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textbox = document.getElementById('text-box')

// functions

// dark or light images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

// switch to dark mode theme
function darkMode(){
    nav.style.backgroundColor = 'rgb( 0 0 0 / 50%)'
    textbox.style.backgroundColor = 'rgb( 255 255 255 / 50%)'
    toggleIcon.children[0].textContent = "Dark Mode"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    imageMode('dark')
    
}

// switch to light mode theme
function lightMode(){
    nav.style.backgroundColor = 'rgb( 255 255 255 / 50%)'
    textbox.style.backgroundColor = 'rgb( 0 0 0 / 50%)'
    toggleIcon.children[0].textContent = "Light Mode"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    imageMode('light')
}

// Switch theme dynamically when checkbox is changed
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme','light')
        lightMode()
    }
}

// add event listners
toggleSwitch.addEventListener('change', switchTheme)