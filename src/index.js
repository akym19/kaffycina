import { generateHomepage } from "./pages/home.js";
import { generateMenu } from "./pages/menu.js";
import { generateNavbar } from "./pages/navbar.js";
import './css/styles.css';
import './css/menu.css';
import background from './images/homepage.jpg'

generateNavbar();
generateHomepage();

const home = document.getElementById("home");
const menu =  document.getElementById("menu");
const body = document.body;
const backgroundSrc = background;

home.addEventListener("click", () => {
    body.textContent = "";
    body.style.background = `url(${backgroundSrc}) no-repeat fixed center/cover`;
    generateNavbar();
    generateHomepage();
})

menu.addEventListener("click", () => {
    body.textContent = "";
    body.style.background = "none";
    generateNavbar();
    generateMenu();
});