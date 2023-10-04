export const createElem = (type, attributes = {}) => {
    const elem = document.createElement(type);

    for (const attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            elem.setAttribute(attr, attributes[attr]);
        }
    }
    return elem;
};
