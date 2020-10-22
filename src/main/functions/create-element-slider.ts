import { $sliderContainer } from "../variables/variables";

export const createElementSliderContainer = (valueBox:number) => {
    createElement(valueBox);

    if (valueBox!==1) {
        for (let i = 1; i <= 2; i++) {
            createElement(i);
        }
    }
}

const createElement = (value:number) => {
        const createNode = document.createElement("img");
        createNode.classList.add("imagenes");
        createNode.setAttribute("src",`static/img${value}.png`);
        $sliderContainer.appendChild(createNode);
}