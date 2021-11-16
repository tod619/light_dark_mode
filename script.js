// Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]')

// functions

// Switch theme dynamically when checkbox is changed
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark')
    } else {
        document.documentElement.setAttribute('data-theme','light')
    }
}

// add event listners
toggleSwitch.addEventListener('change', switchTheme)