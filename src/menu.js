const createElem = (type, attributes = {}) => {
    const elem = document.createElement(type);

    for (const attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            elem.setAttribute(attr, attributes[attr]);
        }
    }
    return elem;
};

const content = document.getElementById("content");

    const appetizers = [
        {
            class: "appe-card",
            name: "Bruschetta",
            desc: "Toasted garlic with diced tomatoes, balsamic vinegar, basil and cheese.",
            price: "$8.25"
        },
        {
            class: "appe-card",
            name: "Fried Mozarella",
            desc: "Homemade fried cheese served with marinara sauce.",
            price: "$8.00"
        },
        {
            class: "appe-card",
            name: "Antipasto Originale",
            desc: "Original Italian cuts, salami, prosciutto, ham, fresh mozzarella, tomatoes, artichokes and garlic oil eggplant.",
            price: "$17.25"
        },
        {
            class: "appe-card",
            name: "Shrimp Scampi",
            desc: "Small shrimp sauteed with garlic white wine and heavy cream served over toasted bread.",
            price: "$10.50"
        },
        {
            class: "appe-card",
            name: "Melanzane Caprese",
            desc: "Fried eggplant with mozzarella, tomato and basil, lightly baked in the oven.",
            price: "$10.50"
        }
    ];

    const soups_salads = [
        {
            class: "sousa-card",
            name: "Tuscany",
            desc: "Baby spinach, dried cranberries, almonds & blue cheese crumbs in a citrus vinegar dressing.",
            price: "$9.45"
        },
        {
            class: "sousa-card",
            name: "Soup of the Day",
            desc: "Homemade soup. Ask your server.",
            price: "$6.99"
        },
        {
            class: "sousa-card",
            name: "Caprese",
            desc: "Sliced fresh mozzarella, fresh tomatoes with basil and balsamic vinaigrette.",
            price: "$10.50"
        },
        {
            class: "sousa-card",
            name: "Cesare",
            desc: "Romaine, croutons, parmesan cheese, ceasar dressing.",
            price: "$8.45"
        },
        {
            class: "sousa-card",
            name: "Della Casa",
            desc: "Mix greens, onions, tomatoes, cucumbers, Kalamata olives and white beans.",
            price: "$8.99"
        }
    ];

    const pasta = [
        {
            class: "pasta-card",
            name: "Bolognese",
            desc: "Homemade meat sauce.",
            price: "$14.25"
        },
        {
            class: "pasta-card",
            name: "Carbonara",
            desc: "Creamy sauce with onions, pancetta and egg yolk.",
            price: "$14.50"
        },
        {
            class: "pasta-card",
            name: "Patriota",
            desc: "Tomatoes, basil, garlic and fresh mozzarella in white wine sauce.",
            price: "$15.25"
        },
        {
            class: "pasta-card",
            name: "Aglio E Olio",
            desc: "Garlic oil & crushed red pepper in a white wine sauce.",
            price: "$12.25"
        },
        {
            class: "pasta-card",
            name: "Fra Diavolo",
            desc: "Choice of pasta with garlic spicy plum tomato sauce.",
            price: "$15.25"
        }
    ];

    const pizza = [
        {
            class: "pizza-card",
            name: "Pepperoni  & Basil",
            desc: "Ezzo's pepperoni, burrata, basil, red sauce.",
            price: "$17.25"
        },
        {
            class: "pizza-card",
            name: "Sausage",
            desc: "Sausage, giardiniera, mozzarella basil, red sauce.",
            price: "$15.50"
        },
        {
            class: "pizza-card",
            name: "Miso Mushroom",
            desc: "Shiitake mushrooms, black garlic, miso, onions, green onions, mozzarella.",
            price: "$15.25"
        },
        {
            class: "pizza-card",
            name: "Cheese",
            desc: "Classic cheese pizza with burrata, parmesan, basil, red sauce (vegetarian).",
            price: "$12.25"
        },
        {
            class: "pizza-card",
            name: "Fig & Pig",
            desc: "Caramelized onions, figs, confit pork, good balsamic.",
            price: "$15.25"
        }
    ];

    const generateFoodCards = (foodArray) => {
        const foodCards = [];

        for (const food of foodArray) {
            const foodCardElem = createElem('div', {
                class: `food-card ${food.class}`
            });

            const foodElem = createElem('div', {
                class: "food"
            });

            const nameElem = createElem('h2', {
                class: "name"
            });
            nameElem.textContent = food.name;

            const descElem = createElem('p', {
                class: "desc"
            });
            descElem.textContent = food.desc;

            foodElem.appendChild(nameElem);
            foodElem.appendChild(descElem);

            const priceElem = createElem('p', {
                class: "price"
            });

            foodCardElem.appendChild(foodElem);
            foodCardElem.appendChild(priceElem);

            foodCards.push(foodCardElem);
        }

        return foodCards;
    };

    const appeArray = generateFoodCards(appetizers);
    const sousaArray = generateFoodCards(soups_salads);
    const pastaArray = generateFoodCards(pasta);
    const pizzaArray = generateFoodCards(pizza);

    const menuElem = createElem('div', {
        id: 'menu'
    });

    // for appetizer section

    const appetizerSection = createElem('div', {
        id: "appetizers",
        class: "section"
    });

    const appeDesign = createElem('div', {
        id: "appe-img",
        class: "menu-img"
    })

    const appeDesignImg = createElem('img', {
        src: "../src/images/bruschetta.jpg",
        alt: "Bruschetta",
        loading: "lazy"
    })

    const appeCard = createElem('div', {
        id: "appe-menu",
        class: "menu-card"
    });

    const appeHeading = createElem('div', {
        id: "appe-heading"
    });

    const appeIllus = createElem('div', {
        class: "menu-illus"
    });

    const appeImg = createElem('img', {
        src: "../src/images/breads.png",
        alt: "Appetizers Illustration",
        loading: "lazy"
    });

    const appeH1 = createElem('h1', {});
    appeH1.textContent = "Appetizers";