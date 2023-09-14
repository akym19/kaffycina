console.log('This is the start');


export const homepage = () => {
    const introcontent = "Indulge in a symphony of flavors at our one-of-a-kind restaurant, where every bite is a delightful journey. At Kaffycina, we are passionate about crafting exquisite dishes that tantalize your taste buds and leave you craving for more. Whether you're a fan of Pasta, Chicken, Salad, or Desserts, we have something special waiting just for you.";
    const resName = "KAFFYCINA";
    const content = document.getElementById('content');

    const createElem = (type, attributes ={}) => {
        const elem = document.createElement(type);

        for (const attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                elem.setAttribute(attr, attributes[attr]);
            }
        }
        return elem;
    };

    const header = createElem('div', {
        id: 'homepage-header'
    });

    const nav = createElem('nav', {});

    const ul = createElem('ul', {});

    const liHome = createElem('li', {
        href: '#'
    });
    liHome.textContent = 'Home';

    const liMenu = createElem('li', {
        href: '#'
    });
    liMenu.textContent = 'Menu';

    const liContact = createElem('li', {
        href: '#'
    });
    liContact.textContent = 'Contact Us';

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

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    nav.appendChild(ul);

    header.appendChild(nav);
    header.appendChild(welcome);
    header.appendChild(bookBtn);

    content.appendChild(header);

    document.body.appendChild(content);
}