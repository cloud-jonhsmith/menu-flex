import { modal } from "../variables/variables.js";
import { getQuantityImages } from "./quantity-images.js";
import { resetImages } from "./reset-images.js";

export const closeModal = () => {
    let quantityImagesShow:number = getQuantityImages();
    modal.removeAttribute('open');
    resetImages(quantityImagesShow);
}