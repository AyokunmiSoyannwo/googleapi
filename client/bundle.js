(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const section = document.querySelector("#links-section")
const stylesheet = document.querySelector("#stylesheet")

function generateLinks (data) {
    document.querySelectorAll(".div-link").forEach(el => el.remove());
    const random = document.querySelector("#lucky")
    const search = document.querySelector('#search')
    const divs = []
    for (let i=0; i< data.length; i++) {
        const div = document.createElement("div")
        div.setAttribute("class", "div-link")
        divs.push(div)
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
        section.append(divs[i])
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
    
    const random = document.querySelector("#lucky")
    const search = document.querySelector('#search')
    
    document.querySelectorAll(".div-link").forEach(el => el.remove());

    stylesheet.setAttribute("href", "style.css")
    random.removeAttribute("hidden", "hidden");
    search.removeAttribute("hidden", "hidden");
    
}

function searchFunc () {
    fetch("http://localhost:3000/results")
    .then(res => res.json())
    .then(check)
}

function check (data) {
    if(!searchbar.value){
        console.log('I am running')
        alert("please search something")
    } else if(data.some((x) => (x.title.toLowerCase()).includes(searchbar.value.toLowerCase())) ) {
        console.log('i have found it')
        const results = data.filter((x) => (x.title.toLowerCase()).includes(searchbar.value.toLowerCase())) 
        generateLinks(results) 
    } else {
        console.log('not found')
        alert("Search something else please")
    }}
module.exports = {generateLinks, removeLinks, openLink, searchFunc, check}

},{}],2:[function(require,module,exports){
// const e = require("cors")
const helpers = require("./helpers")
const generateLinks = helpers.generateLinks
const removeLinks = helpers.removeLinks
const openLink = helpers.openLink
const searchFunc = helpers.searchFunc
const check = helpers.check

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

image.addEventListener("click", () =>{
    setTimeout(() => {
        window.location.reload(true);
    },200);
});

searchbar.addEventListener("search", searchFunc )






},{"./helpers":1}]},{},[2]);
