import { modal } from "../variables/variables";
import { getQuantityImages } from "./quantity-images";
import { resetImages } from "./reset-images";

export const closeModal = () => {
    let quantityImagesShow:number = getQuantityImages();
    modal.removeAttribute('open');
    resetImages(quantityImagesShow);
}