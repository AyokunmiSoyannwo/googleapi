(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const divs = document.querySelectorAll('.div-link')
const stylesheet = document.querySelector("#stylesheet")
const random = document.querySelector("#lucky")
function generateLinks (data) {
    for (let i=0; i< data.length; i++) {
        
        const url = document.createElement("p")
        const title = document.createElement("a")
        const desc = document.createElement("p")
        title.setAttribute("class", "title")
        title.setAttribute("href", data[i].url)
        url.setAttribute("class", "url")
        desc.setAttribute("class", "description")
        title.textContent = data[i].title
        url.textContent= data[i].url
        desc.textContent=data[i].description
        divs[i].append(url)
        divs[i].append(title)
        divs[i].append(desc)
    }
    stylesheet.setAttribute("href", "styleSheet.css")
    random.setAttribute("hidden", "hidden");
    search.setAttribute("hidden", "hidden");
    
}

function openLink (data) {
    open(data.url)
}

function removeLinks () {

    document.querySelectorAll(".title").forEach(el => el.remove());
    document.querySelectorAll(".description").forEach(el => el.remove());
    document.querySelectorAll(".url").forEach(el => el.remove());

    stylesheet.setAttribute("href", "style.css")
    random.removeAttribute("hidden", "hidden");
    search.removeAttribute("hidden", "hidden");
    searchbar.removeAttribute("value", "reflection nebula")
    
}

module.exports = {generateLinks, removeLinks, openLink}

},{}],2:[function(require,module,exports){
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
search.addEventListener("click", () => {
    fetch("http://localhost:3000/results")
    .then(res => res.json())
    .then(generateLinks)
    searchbar.setAttribute("value", "reflection nebula")
})

// Event listener for search bar - should input reflection nebula when key pressed
searchbar.addEventListener("keypress", (event) => {
    event.preventDefault()
    searchbar.setAttribute("value", "reflection nebula")
})

// Event listener for the google image - should return to old style sheet
image.addEventListener("click",(removeLinks));

// Functions
// openLink: Opens link to website
// function openLink (data) {
//     open(data.url)
// }

// generateLinks: appends the data, changes the style sheet and hides buttons
// function generateLinks (data) {
//     for (let i=0; i< data.length; i++) {
        
//         const url = document.createElement("p")
//         const title = document.createElement("a")
//         const desc = document.createElement("p")
//         title.setAttribute("class", "title")
//         title.setAttribute("href", data[i].url)
//         url.setAttribute("class", "url")
//         desc.setAttribute("class", "description")
//         title.textContent = data[i].title
//         url.textContent= data[i].url
//         desc.textContent=data[i].description
//         divs[i].append(url)
//         divs[i].append(title)
//         divs[i].append(desc)
//     }
//     stylesheet.setAttribute("href", "styleSheet.css")
//     random.setAttribute("hidden", "hidden");
//     search.setAttribute("hidden", "hidden");
    
// }

// removeLinks: removes the data and brings style.css back, unhides buttons and clears search bar
// function removeLinks () {

//     document.querySelectorAll(".title").forEach(el => el.remove());
//     document.querySelectorAll(".description").forEach(el => el.remove());
//     document.querySelectorAll(".url").forEach(el => el.remove());

//     stylesheet.setAttribute("href", "style.css")
//     random.removeAttribute("hidden", "hidden");
//     search.removeAttribute("hidden", "hidden");
//     searchbar.removeAttribute("value", "reflection nebula")
    
// }


},{"./helpers":1}]},{},[2]);
