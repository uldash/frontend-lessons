var header = document.getElementById("header");
var btn = document.querySelector('.body__upper');

function handleButtonClick() {
    header.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener('click', handleButtonClick);