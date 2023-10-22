import { createElem } from "./functions";

const body = document.body;

const navbar = createElem("nav", {
    id: "navbar",
});
const ul = createElem("ul", {});

const liLogo = createElem("li", {
    id: "logo",
});
const aLogo = createElem("a", {
    href: "#",
});
const imgLogo = createElem("img", {
    src: "../../dist/images/logo.jpg",
    alt: "Kaffycina Logo",
});

aLogo.appendChild(imgLogo);
liLogo.appendChild(aLogo);

const liHome = createElem("li", {
    id: "home",
});
const aHome = createElem("a", {
    href: "#",
});
aHome.textContent = "Home";

liHome.appendChild(aHome);

const liMenu = createElem("li", {
    id: "menu",
});
const aMenu = createElem("a", {
    href: "#",
});
aMenu.textContent = "Menu";

liMenu.appendChild(aMenu);

const liContact = createElem("li", {
    id: "contact",
});
const aContact = createElem("a", {
    href: "#",
});
aContact.textContent = "Contact Us";

liContact.appendChild(aContact);

const liOrder = createElem("li", {
    id: "onlineOrder",
});
const aOrder = createElem("a", {
    href: "#",
});
const orderBtn = createElem("button", {});
orderBtn.textContent = "Order Online";

aOrder.appendChild(orderBtn);
liOrder.appendChild(aOrder);

ul.appendChild(liLogo);
ul.appendChild(liHome);
ul.appendChild(liMenu);
ul.appendChild(liContact);
ul.appendChild(liOrder);

navbar.appendChild(ul);

export const generateNavbar = () => {
    return body.appendChild(navbar);
};
