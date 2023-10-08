import { createElem } from "./functions";

const infos = [
    {
        id: "address",
        imgSrc: "../src/images/location.png",
        altImgAttr: "Address",
        text: "This Place, This City",
    },
    {
        id: "phone-num",
        imgSrc: "../src/images/telephone.png",
        altImgAttr: "Telephone",
        text: "+63 927 765 2692",
    },
    {
        id: "facebook",
        imgSrc: "../src/images/facebook.png",
        altImgAttr: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100063954195673",
        text: "KAFFYcina",
    },
    {
        id: "instagram",
        imgSrc: "../src/images/instagram.png",
        altImgAttr: "Instagram",
        href: "https://instagram.com/kaffycina?igshid=ZGUzMzM3NWJiOQ%3D%3D",
        text: "@KAFFYcina",
    },
];

const infoContent = (item) => {
    let detail;
    if (item.id == "facebook" || item.id == "instagram") {
        detail = createElem("a", {
            href: item.href,
            target: "_blank",
        });
        detail.textContent = item.text;
    } else {
        detail = createElem("p", {});
        detail.textContent = item.text;
    }
    return detail;
};

const body = document.body;
const content = createElem("div", {
    id: "content",
});
const contactContainer = createElem("div", {
    id: "contact-container",
});
const contactMain = createElem("div", {
    id: "contact-main",
});

export const generateInfoSection = () => {
    const infoMain = createElem("div", {
        id: "info",
    });
    const infoHeader = createElem("h1", {});
    infoHeader.textContent = "Contact Us";

    infoMain.appendChild(infoHeader);

    infos.forEach((info) => {
        const infoElem = createElem("div", {
            id: info.id,
            class: "details",
        });

        const infoIcon = createElem("img", {
            src: info.imgSrc,
            alt: info.altImgAttr,
            loading: "lazy",
        });

        const detail = infoContent(info);

        infoElem.appendChild(infoIcon);
        infoElem.appendChild(detail);
        infoMain.appendChild(infoElem);
    });

    contactMain.appendChild(infoMain);
    contactContainer.appendChild(contactMain);
    content.appendChild(contactContainer);
    body.appendChild(content);
};
