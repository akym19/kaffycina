import { generateHomepage } from "./pages/home.js";
import { generateMenu } from "./pages/menu.js";
import { generateNavbar } from "./pages/navbar.js";
import './css/styles.css';

generateNavbar();
generateHomepage();

const home = document.getElementById("home");
const menu =  document.getElementById("menu");
const body = document.body;

home.addEventListener("click", () => {
    body.textContent = "";
    generateNavbar();
    generateHomepage();
})

menu.addEventListener("click", () => {
    body.textContent = "";
    generateNavbar();
    generateMenu();
});