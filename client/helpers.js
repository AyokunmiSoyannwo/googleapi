const divs = document.querySelectorAll('.div-link')
const stylesheet = document.querySelector("#stylesheet")

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
