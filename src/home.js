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

    const nav = createElem('nav', {
        id: "navbar"
    });

    const ul = createElem('ul', {});

    const liLogo = createElem('li', {
        id: 'logo'
    });
    const aLogo = createElem('a', {
        href: '#'
    });

    const imgLogo = new Image();
    imgLogo.src = '../src/logo.jpg'

    const liHome = createElem('li', {
        id: "home"
    });
    const aHome = createElem('a', {
        href: '#'
    })
    aHome.textContent = 'Home';

    const liMenu = createElem('li', {
        id: "menu"
    });
    const aMenu = createElem('a', {
        href: '#'
    })
    aMenu.textContent = 'Menu';

    const liContact = createElem('li', {
        id: "contact"
    });
    const aContact = createElem('a', {
        href: '#'
    })
    aContact.textContent = 'Contact Us';

    const liOnlineOrder = createElem('li', {
        id: "onlineOrder"
    });
    const aOnlineOrder = createElem('a', {
        href: '#'
    })
    const orderBtn = createElem('button', {});
    orderBtn.textContent = "Order Online";

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

    aLogo.appendChild(imgLogo);
    aOnlineOrder.appendChild(orderBtn);
    
    liLogo.appendChild(aLogo);
    liHome.appendChild(aHome);
    liMenu.appendChild(aMenu);
    liContact.appendChild(aContact);
    liOnlineOrder.appendChild(aOnlineOrder);

    ul.appendChild(liLogo);
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);
    ul.appendChild(liOnlineOrder);

    nav.appendChild(ul);

    header.appendChild(welcome);
    header.appendChild(bookBtn);

    content.appendChild(nav);
    content.append(header);

    document.body.appendChild(content);
}