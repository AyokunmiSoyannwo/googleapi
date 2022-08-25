const e = require("cors")
const helpers = require("./helpers")
const generateLinks = helpers.generateLinks
const removeLinks = helpers.removeLinks
const openLink = helpers.openLink

// Retrieve element
const random = document.querySelector("#lucky")
const search = document.querySelector('#search')
const divs = document.querySelectorAll('.div-link')
const searchbar = document.querySelector("#searchbar")
const stylesheet = document.querySelector("#stylesheet")
const image = document.querySelector("#googleLogo")
// const section = document.querySelector('#about-section')

// Event Listeners
// Event listener for the 'I'm feeling lucky button' - should generate a new tab with a random link
random.addEventListener("click", () => {
    fetch("http://localhost:3000/results/random")
    .then( res => res.json())
    .then(openLink)
})

//Event listener for the 'search' button - should generate the search results
search.addEventListener("click", searchFunc)



// Event listener for the google image - should return to old style sheet
image.addEventListener("click",(removeLinks));

searchbar.addEventListener("search", searchFunc )

function searchFunc () {
    fetch("http://localhost:3000/results")
    .then(res => res.json())
    .then(check)
}

function check (data) {
    if (searchbar.value ) {
    const results = data.filter((x) => (x.title.toLowerCase()).includes(searchbar.value.toLowerCase())) 
    generateLinks(results)
    } else {
        alert("please search something")
    }}

