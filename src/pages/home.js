import { createElem } from "../functions";

const homepage = () => {
    const body = document.body;
    const content = createElem('div', {
        id: "content"
    });
    const introcontent = "Indulge in a symphony of flavors at our one-of-a-kind restaurant, where every bite is a delightful journey. At Kaffycina, we are passionate about crafting exquisite dishes that tantalize your taste buds and leave you craving for more. Whether you're a fan of Pasta, Chicken, Salad, or Desserts, we have something special waiting just for you.";
    const resName = "KAFFYCINA";

    const home = createElem('div', {
        id: "home-container"
    })

    const header = createElem('div', {
        id: 'homepage-header'
    });

    const welcome = createElem('div', {
        class: 'container-welcome'
    });

    const title = createElem('h1', {});
    title.textContent = resName;

    const intro = createElem('p', {
        class: 'intro'
    });
    intro.textContent = introcontent;

    const bookBtn = createElem('button', {
        id: 'bookTable'
    });
    bookBtn.textContent = 'Book A Table';

    welcome.appendChild(title);
    welcome.appendChild(intro);

    header.appendChild(welcome);
    header.appendChild(bookBtn);

    home.appendChild(header);

    content.appendChild(home);
    body.appendChild(content)
}

export const generateHomepage = () => {
    document.title = "Kaffycina"
    homepage();
}