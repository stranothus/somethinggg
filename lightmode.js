const navbar = document.getElementById("navbar");
const root = document.documentElement;

const observer = new MutationObserver(() => {
    let moon = navbar.querySelector(".fa-moon-o");
    let sun = navbar.querySelector(".fa-sun-o");

    moon.style.display = "none";

    sun.addEventListener("click", event => {
        sun.style.display = "none";
        moon.style.display = "block";

        root.style.setProperty("--bg-1", "#E0E0E0");
        root.style.setProperty("--bg-2", "#EFEFEF");
        root.style.setProperty("--bg-3", "#FFFFFF");
        root.style.setProperty("--txt-main", "#202020");
    });

    moon.addEventListener("click", event => {
        moon.style.display = "none";
        sun.style.display = "block";

        root.style.setProperty("--bg-1", "#101010");
        root.style.setProperty("--bg-2", "#202020");
        root.style.setProperty("--bg-3", "#303030");
        root.style.setProperty("--txt-main", "#EFEFEF");
    });
});
observer.observe(navbar, { childList: true });