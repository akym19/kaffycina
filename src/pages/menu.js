import { createElem, appendToParent } from "../functions";

const sections = [
    {
        id: "appetizers",
        name: "Appetizers",
        sideImg: "../src/images/bruschetta.jpg",
        headingImg: "../src/images/breads.png",
        items: [
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
        ],
    },
    {
        id: "soups_salads",
        name: "Appetizers",
        sideImg: "../src/images/sousa.jpg",
        headingImg: "../src/images/salad.png",
        items: [
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
        ],
    },
    {
        id: "pasta",
        name: "Pasta",
        sideImg: "../src/images/pasta.jpg",
        headingImg: "../src/images/spaghetti.png",
        items: [
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
            },
        ],
    },
    {
        id: "pizza",
        name: "Pizza",
        sideImg: "../src/images/pizza.jpg",
        headingImg: "../src/images/pizza.png",
        items: [
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
        ]
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

        // appendToParent(foodElem, nameElem);
        // appendToParent(foodElem, descElem);

        foodElem.appendChild(nameElem);
        foodElem.appendChild(descElem);


        const priceElem = createElem('p', {
            class: "price"
        });

        // appendToParent(foodCardElem, foodElem);
        // appendToParent(foodCardElem, priceElem);

        foodCardElem.appendChild(foodElem);
        foodCardElem.appendChild(priceElem);


        foodCards.push(foodCardElem);
    }

    return foodCards;
};

const generateSections = () => {
    const body = document.body;
    const content = createElem('div', {
        id: "content"
    });
    const menu = createElem('div', {
        id: "menu-container"
    });

    sections.forEach((section) => {
        const sectionElem = createElem('div', {
            id:section.id,
            class: "section"
        });
    
        const menuSideImgDiv = createElem('div', {
            id: `${section.id}-img`,
            class: "menu-img"
        });
    
        const menuSideImg = createElem('img', {
            src: section.sideImg,
            alt: section.name,
            loading: "lazy"
        });
    
        const menuCard = createElem('div', {
            id: `${section.id}-menu`,
            class: "menu-card"
        });
    
        const menuHeading = createElem('div', {
            id: `${section.id}-heading`
        });
    
        const menuIllus = createElem('div', {
            class: "menu-illus"
        });
    
        const menuImg = createElem('div', {
            src: section.headingImg,
            alt: `${section.name} Illustration`,
            loading: "lazy"
        });
    
        const menuH1 = createElem('h1', {});
        menuH1.textContent = section.name;
    
        const foodArray = generateFoodCards(section.items);
    
        // appendToParent(menuIllus, menuImg);
        // appendToParent(menuHeading, menuIllus);
        // appendToParent(menuHeading, menuH1);
        // appendToParent(menuCard, menuHeading);
    
        menuIllus.appendChild(menuImg);
        menuHeading.appendChild(menuIllus);
        menuHeading.appendChild(menuH1);
        menuCard.appendChild(menuHeading);
    
        foodArray.forEach((food) => {
            // appendToParent(menuCard, food);
            menuCard.appendChild(food);
        });
    
        // appendToParent(menuSideImgDiv, menuSideImg);
        // appendToParent(sectionElem, menuSideImgDiv);
        // appendToParent(sectionElem, menuCard);
    
        // appendToParent(menu, sectionElem);
        
        menuSideImgDiv.appendChild(menuSideImg);
        sectionElem.appendChild(menuSideImgDiv);
        sectionElem.appendChild(menuCard);
    
        menu.appendChild(sectionElem);
        content.appendChild(menu);
        body.appendChild(content)
    })
}

export const generateMenu = () => {
    generateSections();
}