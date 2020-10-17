import { $childrenSliderContainer } from "../variables/variables.js";

export const detectaImagen = () => {
    let detectaImagen:string = $childrenSliderContainer[1].getAttribute("src");
    let valorImagen:number = 0;

    valorImagen = parseInt(detectaImagen.substring(10,11));

    return valorImagen;
}