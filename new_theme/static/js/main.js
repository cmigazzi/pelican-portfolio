//  Elements
var home = document.getElementById("home");
var portfolio = document.getElementById("portfolio");

function toPortfolio() {
    home.replaceWith(portfolio)
    portfolio.style.display = "block";
}

function toHome() {
    portfolio.replaceWith(home)
    portfolio.style.display = "none";
}

function toContent(target) {
    var content = document.getElementById(target+'-content')
    var title = document.getElementById(target+'-title')
    var wrapper = document.getElementById(target+'-wrapper')
    if (content.classList.contains("content")) {
        wrapper.classList.add("col-12");
        content.classList.replace("content", "content-visible");
        title.classList.replace("preview", "preview-active");

    } else {
        content.classList.replace("content-visible", "content");
        title.classList.replace("preview-active", "preview");
        wrapper.classList.remove("col-12");

    }

}