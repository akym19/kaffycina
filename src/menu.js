const createElem = (type, attributes = {}) => {
    const elem = document.createElement(type);

    for (const attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            elem.setAttribute(attr, attributes[attr]);
        }
    }
    return elem;
};

const appendToParent = (parent, child) => {
    parent.appendChild(child)
}

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

        appendToParent(foodElem, nameElem);
        appendToParent(foodElem, descElem);

        const priceElem = createElem('p', {
            class: "price"
        });

        appendToParent(foodCardElem, foodElem);
        appendToParent(foodCardElem, priceElem);

        foodCards.push(foodCardElem);
    }

    return foodCards;
};

const menu = createElem('div', {
    id: "piza-container"
});
const content = document.getElementById("content");

// for appetizer section

const appetizerSection = createElem('div', {
    id: "appetizers",
    class: "section"
});

const menuSideImgDivAppe = createElem('div', {
    id: "appe-img",
    class: "menu-img"
})

const menuSideImgAppe = createElem('img', {
    src: "../src/images/bruschetta.jpg",
    alt: "Bruschetta",
    loading: "lazy"
})

const menuCardAppe = createElem('div', {
    id: "appe-menu",
    class: "menu-card"
});

const menuHeadingAppe = createElem('div', {
    id: "appe-heading"
});

const menuIllusAppe = createElem('div', {
    class: "menu-illus"
});

const menuImgAppe = createElem('img', {
    src: "../src/images/breads.png",
    alt: "Appetizers Illustration",
    loading: "lazy"
});

const menuH1Appe = createElem('h1', {});
menuH1Appe.textContent = "Appetizers";

const appeArray = generateFoodCards(appetizers);

appendToParent(menuIllusAppe, menuImgAppe);
appendToParent(menuHeadingAppe, menuIllusAppe);
appendToParent(menuHeadingAppe, menuH1Appe);
appendToParent(menuCardAppe, menuHeadingAppe);

for (const food of appeArray) {
    appendToParent(menuCardAppe, food)
}

appendToParent(menuSideImgDivAppe, menuSideImgAppe);
appendToParent(appetizerSection, menuSideImgDivAppe);
appendToParent(appetizerSection, menuCardAppe);

appendToParent(menu, appetizerSection);
appendToParent(content, menu);

// for soups and salads section

const sousaSection = createElem('div', {
    id: "soups_salads",
    class: "section"
});

const menuSideImgDivSousa = createElem('div', {
    id: "sousa-img",
    class: "menu-img"
})

const menuSideImgSousa = createElem('img', {
    src: "../src/images/sousa.jpg",
    alt: "Salad",
    loading: "lazy"
})

const menuCardSousa = createElem('div', {
    id: "sousa-menu",
    class: "menu-card"
});

const menuHeadingSousa = createElem('div', {
    id: "sousa-heading"
});

const menuIllusSousa = createElem('div', {
    class: "menu-illus"
});

const menuImgSousa = createElem('img', {
    src: "../src/images/salad.png",
    alt: "Salad Illustration",
    loading: "lazy"
});

const menuH1Sousa = createElem('h1', {});
menuH1Sousa.textContent = "Soups and Salads";

const sousaArray = generateFoodCards(soups_salads);

appendToParent(menuIllusSousa, menuImgSousa);
appendToParent(menuHeadingSousa, menuIllusSousa);
appendToParent(menuHeadingSousa, menuH1Sousa);
appendToParent(menuCardSousa, menuHeadingSousa);

for (const food of sousaArray) {
    appendToParent(menuCardSousa, food)
}

appendToParent(menuSideImgDivSousa, menuSideImgSousa);
appendToParent(sousaSection, menuSideImgDivSousa);
appendToParent(sousaSection, menuCardSousa);

appendToParent(menu, sousaSection);
appendToParent(content, menu);

// for pasta section

const pastaSection = createElem('div', {
    id: "pasta",
    class: "section"
});

const menuSideImgDivPasta = createElem('div', {
    id: "pasta-img",
    class: "menu-img"
})

const menuSideImgPasta = createElem('img', {
    src: "../src/images/pasta.jpg",
    alt: "Pasta",
    loading: "lazy"
})

const menuCardPasta = createElem('div', {
    id: "pasta-menu",
    class: "menu-card"
});

const menuHeadingPasta = createElem('div', {
    id: "pasta-heading"
});

const menuIllusPasta = createElem('div', {
    class: "menu-illus"
});

const menuImgPasta = createElem('img', {
    src: "../src/images/spaghetti.png",
    alt: "Pasta Illustration",
    loading: "lazy"
});

const menuH1Pasta = createElem('h1', {});
menuH1Pasta.textContent = "Pasta";

const pastaArray = generateFoodCards(pasta);

appendToParent(menuIllusPasta, menuImgPasta);
appendToParent(menuHeadingPasta, menuIllusPasta);
appendToParent(menuHeadingPasta, menuH1Pasta);
appendToParent(menuCardPasta, menuHeadingPasta);

for (const food of pastaArray) {
    appendToParent(menuCardPasta, food)
}

appendToParent(menuSideImgDivPasta, menuSideImgPasta);
appendToParent(pastaSection, menuSideImgDivPasta);
appendToParent(pastaSection, menuCardPasta);

appendToParent(menu, pastaSection);
appendToParent(content, menu);

// for pizza section

const pizzaSection = createElem('div', {
    id: "pizza",
    class: "section"
});

const menuSideImgDivPizza = createElem('div', {
    id: "pizza-img",
    class: "menu-img"
})

const menuSideImgPizza = createElem('img', {
    src: "../src/images/pizza.jpg",
    alt: "Pasta",
    loading: "lazy"
})

const menuCardPizza = createElem('div', {
    id: "pizza-menu",
    class: "menu-card"
});

const menuHeadingPizza = createElem('div', {
    id: "pizza-heading"
});

const menuIllusPizza = createElem('div', {
    class: "menu-illus"
});

const menuImgPizza = createElem('img', {
    src: "../src/images/pizza.png",
    alt: "Pizza Illustration",
    loading: "lazy"
});

const menuH1Pizza = createElem('h1', {});
menuH1Pizza.textContent = "Pizza";

const pizzaArray = generateFoodCards(pizza);

appendToParent(menuIllusPizza, menuImgPizza);
appendToParent(menuHeadingPizza, menuIllusPizza);
appendToParent(menuHeadingPizza, menuH1Pizza);
appendToParent(menuCardPizza, menuHeadingPizza);

for (const food of pizzaArray) {
    appendToParent(menuCardPizza, food)
}

appendToParent(menuSideImgDivPizza, menuSideImgPizza);
appendToParent(pizzaSection, menuSideImgDivPizza);
appendToParent(pizzaSection, menuCardPizza);

appendToParent(menu, pizzaSection);
appendToParent(content, menu);