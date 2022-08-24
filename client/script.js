
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

random.addEventListener("click", () => {
    fetch("http://localhost:3000/results/random")
    .then( res => res.json())
    .then(openLink)
})

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
}


search.addEventListener("click", () => {
    fetch("http://localhost:3000/results")
    .then(res => res.json())
    .then(generateLinks)
    console.log("I am clicking")
})

searchbar.addEventListener("keypress", (event) => {
    event.preventDefault()
    searchbar.setAttribute("value", "reflection nebula")
    i = 1
    console.log("i am working")
})
