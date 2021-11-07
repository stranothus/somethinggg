fetch("./navbar.html")
.then(response => response.text())
.then(html => {
    let navbar = document.getElementById("navbar");

    if(navbar) {
        navbar.innerHTML = html;
    }
})