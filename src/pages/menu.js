import { createElem } from "./functions";

const sections = [
    {
        id: "appetizers",
        name: "Appetizers",
        sideImg: "../../dist/images/bruschetta.jpg",
        headingImg: "../../dist/images/breads.png",
        items: [
            {
                class: "appe-card",
                name: "Mung Bean Sprout Rolls",
                desc: "Crispy rolls with mung bean sprouts, veggies, and dipping sauce.",
                price: "$7.99",
            },
            {
                class: "appe-card",
                name: "Bruschetta",
                desc: "Toasted garlic with diced tomatoes, balsamic vinegar, basil and cheese.",
                price: "$8.25",
            },
            {
                class: "appe-card",
                name: "Fried Mozarella",
                desc: "Homemade fried cheese served with marinara sauce.",
                price: "$8.00",
            },
            {
                class: "appe-card",
                name: "Antipasto Originale",
                desc: "Original Italian cuts, salami, prosciutto, ham, fresh mozzarella, tomatoes, artichokes and garlic oil eggplant.",
                price: "$17.25",
            },
            {
                class: "appe-card",
                name: "Shrimp Scampi",
                desc: "Small shrimp sauteed with garlic white wine and heavy cream served over toasted bread.",
                price: "$10.50",
            },
            {
                class: "appe-card",
                name: "Melanzane Caprese",
                desc: "Fried eggplant with mozzarella, tomato and basil, lightly baked in the oven.",
                price: "$10.50",
            },
        ],
    },
    {
        id: "soups_salads",
        name: "Soups & Salads",
        sideImg: "../../dist/images/sousa.jpg",
        headingImg: "../../dist/images/salad.png",
        items: [
            {
                class: "sousa-card",
                name: "Kani Salad",
                desc: "Crab stick salad with cucumbers and greens, ripe mango, served with homemade dressing.",
                price: "$9.45",
            },
            {
                class: "sousa-card",
                name: "Tuscany",
                desc: "Baby spinach, dried cranberries, almonds & blue cheese crumbs in a citrus vinegar dressing.",
                price: "$9.45",
            },
            {
                class: "sousa-card",
                name: "Soup of the Day",
                desc: "Homemade soup. Ask your server.",
                price: "$6.99",
            },
            {
                class: "sousa-card",
                name: "Caprese",
                desc: "Sliced fresh mozzarella, fresh tomatoes with basil and balsamic vinaigrette.",
                price: "$10.50",
            },
            {
                class: "sousa-card",
                name: "Cesare",
                desc: "Romaine, croutons, parmesan cheese, ceasar dressing.",
                price: "$8.45",
            },
            {
                class: "sousa-card",
                name: "Della Casa",
                desc: "Mix greens, onions, tomatoes, cucumbers, Kalamata olives and white beans.",
                price: "$8.99",
            },
        ],
    },
    {
        id: "pasta",
        name: "Pasta",
        sideImg: "../../dist/images/pasta.jpg",
        headingImg: "../../dist/images/spaghetti.png",
        items: [
            {
                class: "pasta-card",
                name: "Bacon Carbonara",
                desc: "Creamy pasta with bacon, cheese, and creamy sauce.",
                price: "$12.99",
            },
            {
                class: "pasta-card",
                name: "Pasta Al Telefono",
                desc: "Classic Italian pasta dish with fresh mozzarella, tomato sauce and basil leaves.",
                price: "$14.50",
            },
            {
                class: "pasta-card",
                name: "Bolognese",
                desc: "Homemade meat sauce.",
                price: "$14.25",
            },
            {
                class: "pasta-card",
                name: "Carbonara",
                desc: "Creamy sauce with onions, pancetta and egg yolk.",
                price: "$14.50",
            },
            {
                class: "pasta-card",
                name: "Patriota",
                desc: "Tomatoes, basil, garlic and fresh mozzarella in white wine sauce.",
                price: "$15.25",
            },
            {
                class: "pasta-card",
                name: "Aglio E Olio",
                desc: "Garlic oil & crushed red pepper in a white wine sauce.",
                price: "$12.25",
            },
            {
                class: "pasta-card",
                name: "Fra Diavolo",
                desc: "Choice of pasta with garlic spicy plum tomato sauce.",
                price: "$15.25",
            },
        ],
    },
    {
        id: "pizza",
        name: "Pizza",
        sideImg: "../../dist/images/pizza.jpg",
        headingImg: "../../dist/images/pizza.png",
        items: [
            {
                class: "pizza-card",
                name: "Pepperoni  & Basil",
                desc: "Ezzo's pepperoni, burrata, basil, red sauce.",
                price: "$17.25",
            },
            {
                class: "pizza-card",
                name: "Sausage",
                desc: "Sausage, giardiniera, mozzarella basil, red sauce.",
                price: "$15.50",
            },
            {
                class: "pizza-card",
                name: "Miso Mushroom",
                desc: "Shiitake mushrooms, black garlic, miso, onions, green onions, mozzarella.",
                price: "$15.25",
            },
            {
                class: "pizza-card",
                name: "Cheese",
                desc: "Classic cheese pizza with burrata, parmesan, basil, red sauce (vegetarian).",
                price: "$12.25",
            },
            {
                class: "pizza-card",
                name: "Fig & Pig",
                desc: "Caramelized onions, figs, confit pork, good balsamic.",
                price: "$15.25",
            },
        ],
    },
];

const generateFoodCards = (foodArray) => {
    const foodCards = [];

    for (const food of foodArray) {
        const foodCardElem = createElem("div", {
            class: `food-card ${food.class}`,
        });

        const foodElem = createElem("div", {
            class: "food",
        });

        const nameElem = createElem("h2", {
            class: "name",
        });
        nameElem.textContent = food.name;

        const descElem = createElem("p", {
            class: "desc",
        });
        descElem.textContent = food.desc;

        foodElem.appendChild(nameElem);
        foodElem.appendChild(descElem);

        const priceElem = createElem("p", {
            class: "price",
        });
        priceElem.textContent = food.price;

        foodCardElem.appendChild(foodElem);
        foodCardElem.appendChild(priceElem);

        foodCards.push(foodCardElem);
    }

    return foodCards;
};

const generateSections = () => {
    const body = document.body;
    const content = createElem("div", {
        id: "content",
    });
    const menu = createElem("div", {
        id: "menu-container",
    });

    sections.forEach((section) => {
        const sectionElem = createElem("div", {
            id: section.id,
            class: "section",
        });

        const sectionSideImgDiv = createElem("div", {
            id: `${section.id}-img`,
            class: "menu-img",
        });

        const sectionSideImg = createElem("img", {
            src: section.sideImg,
            alt: section.name,
            loading: "lazy",
        });

        const sectionCard = createElem("div", {
            id: `${section.id}-menu`,
            class: "menu-card",
        });

        const sectionHeading = createElem("div", {
            id: `${section.id}-heading`,
        });

        const sectionIllus = createElem("div", {
            class: "menu-illus",
        });

        const sectionImg = createElem("img", {
            src: section.headingImg,
            alt: `${section.name} Illustration`,
            loading: "lazy",
        });

        const sectionH1 = createElem("h1", {});
        sectionH1.textContent = section.name;

        const foodArray = generateFoodCards(section.items);

        sectionIllus.appendChild(sectionImg);
        sectionHeading.appendChild(sectionIllus);
        sectionHeading.appendChild(sectionH1);
        sectionCard.appendChild(sectionHeading);

        foodArray.forEach((food) => {
            sectionCard.appendChild(food);
        });

        sectionSideImgDiv.appendChild(sectionSideImg);
        sectionElem.appendChild(sectionSideImgDiv);
        sectionElem.appendChild(sectionCard);

        menu.appendChild(sectionElem);
        content.appendChild(menu);
        body.appendChild(content);
    });
};

export const generateMenu = () => {
    document.title = "Kaffycina Menu";
    generateSections();
};
