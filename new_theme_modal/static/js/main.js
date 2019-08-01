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
