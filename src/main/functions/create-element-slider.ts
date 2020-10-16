import { $sliderContainer } from "../variables/variables.js";

export const createElementSliderContainer = (valueBox:number) => {
    const createNode = document.createElement("img");
    createNode.classList.add("imagenes");
    createNode.setAttribute("src",`static/img${valueBox}.png`);
    $sliderContainer.appendChild(createNode);

    if (valueBox!==1) createAnotherElements();
}

const createAnotherElements = () => {
    for (let i = 1; i <= 2; i++) {
        const createNode = document.createElement("img");
        createNode.classList.add("imagenes");
        createNode.setAttribute("src",`static/img${i}.png`);
        $sliderContainer.appendChild(createNode);
    }
}