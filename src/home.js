export const createElem = (type, attributes ={}) => {
    const elem = document.createElement(type);

    for (const attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            elem.setAttribute(attr, attributes[attr]);
        }
    }
    return elem;
};

export const appendToParent = (parent, child) => {
    parent.appendChild(child);
}

const content = document.getElementById('content');

const homepage = () => {
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

    appendToParent(welcome, title);
    appendToParent(welcome, intro);

    appendToParent(header, welcome)
    appendToParent(header, bookBtn)

    appendToParent(home, header)

    appendToParent(content, home)
}

export const generateHomepage = () => {
    content.textContent = "";
    homepage();
}