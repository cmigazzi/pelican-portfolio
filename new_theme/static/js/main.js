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
    if (content.style.display == "none") {
        content.style.display = "inline-block";
        title.style.backgroundColor = "#c5c5c5";
        title.style.color = "#081528";

    } else {
        content.style.display = "none";
        title.style.removeProperty("background-color");
        title.style.removeProperty("color");
    }

}