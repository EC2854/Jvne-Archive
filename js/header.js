function generateIcons() {
    const links = [
        { url: "https://sewerslvt.bandcamp.com/", icon: "./images/icons/bandcamp.png" },
        { url: "https://www.youtube.com/@Sewerslvt", icon: "./images/icons/youtube.png" },
        { url: "https://open.spotify.com/artist/30F64wQIHvLiFTGaNZ73nU?si=1zRlFwl-RfeNf_LWJzOLAg", icon: "./images/icons/spotify.png" }
    ];
    const linksContainer = document.getElementById("links");

    links.forEach((link) => {
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.style.backgroundImage = `url('${link.icon}')`;
        icon.onclick = function() {
            goTo(link.url);
        };
        linksContainer.appendChild(icon);
    });
}
function generateNavigation() {
    const links = [
        { url: "./index.html", text: "Home" },
        { url: "./discography.html", text: "Discography"}
    ];
    const navContainer = document.querySelector("nav");

    links.forEach((link) => {
        const nav = document.createElement("div");
        nav.classList.add("navbutton");
        nav.textContent = link.text;
        nav.onclick = function() {
            goTo(link.url);
        };
        navContainer.appendChild(nav);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');
    header.classList.add('animate-header');
    setTimeout(function() {
        logo.classList.add('animate-logo');
    }, 700);
    setTimeout(generateIcons, 700);
    setTimeout(generateNavigation, 700);
    
});

