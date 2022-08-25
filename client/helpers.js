const section = document.querySelector("#links-section")
const stylesheet = document.querySelector("#stylesheet")

function generateLinks (data) {
    document.querySelectorAll(".div-link").forEach(el => el.remove());
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

    document.querySelectorAll(".div-link").forEach(el => el.remove());

    stylesheet.setAttribute("href", "style.css")
    random.removeAttribute("hidden", "hidden");
    search.removeAttribute("hidden", "hidden");
    
}

module.exports = {generateLinks, removeLinks, openLink}
