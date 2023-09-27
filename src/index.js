import { generateHomepage } from "./home.js";
import { generateMenu } from "./menu.js";
import './css/styles.css';
import './css/menu.css';
import background from './images/homepage.jpg'

const home = document.getElementById("home");
const menu =  document.getElementById("menu");
const body = document.body;
const backgroundSrc = background;

document.addEventListener("DOMContentLoaded", generateHomepage);

home.addEventListener("click", () => {
    body.style.background = `url(${backgroundSrc}) no-repeat fixed center/cover`;
    generateHomepage();
})

menu.addEventListener("click", () => {
    body.style.background = "none";
    generateMenu();
});