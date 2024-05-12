const menu = document.querySelector(".menu");
const icon = document.querySelector(".small_icon");
const search = document.querySelector(".search");

search.style.display = "none";

icon.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }

});

search.addEventListener("click", () => {
    menu.classList.remove("open");
    search.style.display = "none";
});