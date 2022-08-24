// Retrieve element
const random = document.querySelector("#lucky")
const search = document.querySelector('#search')
const div1 = document.querySelector("#link1")
const div2 = document.querySelector("#link2")
const div3 = document.querySelector("#link3")
const div4 = document.querySelector("#link4")
const div5 = document.querySelector("#link5")
const div6 = document.querySelector("#link6")
const div7 = document.querySelector("#link7")
const div8 = document.querySelector("#link8")
const div9 = document.querySelector("#link9")
const div10 = document.querySelector("#link10")
const searchbar = document.querySelector("#searchbar")
const stylesheet = document.querySelector("#stylesheet")
const image = document.querySelector("#googleLogo")

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
    i = 1
    console.log("i am working")
})

image.addEventListener("click",(removeLinks));

// Functions
function openLink (data) {
    open(data.url)
}

function generateLinks (data) {
    for (let i=0; i< data.length; i++) {
        const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10]
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


function removeLinks () {
    div1.remove();
    div2.remove();
    div3.remove();
    div4.remove();
    div5.remove();
    div6.remove();
    div7.remove();
    div8.remove();
    div9.remove();
    div10.remove();
    stylesheet.setAttribute("href", "style.css")
    random.removeAttribute("hidden", "hidden");
    search.removeAttribute("hidden", "hidden");
    searchbar.removeAttribute("value", "reflection nebula")
}

