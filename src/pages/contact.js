import { createElem } from "./functions";

const infos = [
    {
        id: "address",
        imgSrc: "./images/location.png",
        altImgAttr: "Address",
        text: "This Place, This City",
    },
    {
        id: "phone-num",
        imgSrc: "./images/telephone.png",
        altImgAttr: "Telephone",
        text: "+63 927 765 2692",
    },
    {
        id: "facebook",
        imgSrc: "./images/facebook.png",
        altImgAttr: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100063954195673",
        text: "KAFFYcina",
    },
    {
        id: "instagram",
        imgSrc: "./images/instagram.png",
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

const generateInfoSection = () => {
    const infoContainer = createElem("div", {
        id: "info-container",
    });
    const infoHeader = createElem("h1", {});
    infoHeader.textContent = "Contact Us";

    infoContainer.appendChild(infoHeader);

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
        infoContainer.appendChild(infoElem);
    });

    contactMain.appendChild(infoContainer);
};

const generateContactForm = () => {
    const contactFormContainer = createElem("div", {
        id: "contact-form-container",
    });

    const contactForm = createElem("form", {
        action: "#",
        id: "contact-form",
        method: "post",
    });

    const contactHeading = createElem("div", {
        id: "contact-heading",
    });

    const contactHeadingH1 = createElem("h1", {});
    contactHeadingH1.textContent = "Get in touch with us!";

    const contactHeadingP = createElem("p", {});
    contactHeadingP.textContent =
        "Complaints? Praises? Suggestions? Feel free to drop us a message below!";

    contactHeading.appendChild(contactHeadingH1);
    contactHeading.appendChild(contactHeadingP);
    contactForm.appendChild(contactHeading);

    // *create form input boxes
    const inputContainer = createElem("div", {
        id: "input-container",
    });

    const inputWrapperName = createElem("div", {
        class: "input-wrapper",
    });
    const inputName = createElem("input", {
        type: "text",
        name: "full-name",
        id: "full-name",
        placeholder: "",
        required: "",
    });

    const inputNameLabel = createElem("label", {
        for: "full-name",
    });
    inputNameLabel.textContent = "Your Name";

    inputWrapperName.appendChild(inputName);
    inputWrapperName.appendChild(inputNameLabel);
    inputContainer.appendChild(inputWrapperName);

    const inputWrapperMail = createElem("div", {
        class: "input-wrapper",
    });
    const inputMail = createElem("input", {
        type: "email",
        name: "mail",
        id: "mail",
        placeholder: "",
        required: "",
    });

    const inputMailLabel = createElem("label", {
        for: "mail",
    });
    inputMailLabel.textContent = "Your E-Mail";

    inputWrapperMail.appendChild(inputMail);
    inputWrapperMail.appendChild(inputMailLabel);
    inputContainer.appendChild(inputWrapperMail);

    const inputWrapperTextArea = createElem("div", {
        class: "input-wrapper",
    });
    const inputTextArea = createElem("textarea", {
        name: "message",
        id: "message",
        cols: "30",
        rows: "4",
        maxlength: "176",
    });

    const inputTextAreaLabel = createElem("label", {
        for: "message",
    });
    inputTextAreaLabel.textContent = "Your Message";

    inputWrapperTextArea.appendChild(inputTextArea);
    inputWrapperTextArea.appendChild(inputTextAreaLabel);
    inputContainer.appendChild(inputWrapperTextArea);

    const contactBtn = createElem("button", {});
    contactBtn.textContent = "Send Message";

    contactForm.appendChild(inputContainer);
    contactForm.appendChild(contactBtn);
    contactFormContainer.appendChild(contactForm);
    contactMain.appendChild(contactFormContainer);
};

export const generateContactPage = () => {
    document.title = "Contact Us";
    generateInfoSection();
    generateContactForm();
    contactContainer.appendChild(contactMain);
    content.appendChild(contactContainer);
    body.appendChild(content);
};
