import { setQuantityImages } from "./quantity-images.js";
import { openModal } from "./open-modal.js";
import { initImages } from "./init-images.js";
import { showArrows } from "./show-arrows.js";
import { hideArrows } from "./hide-arrows.js";

export function clickBox(valorBox:any)  {
    let quantityImagesShow:number = parseInt(valorBox.innerHTML);
    setQuantityImages(quantityImagesShow);

    if (quantityImagesShow===1) {
        hideArrows();
        openModal();
        initImages();
    } else {
        showArrows();
        openModal();
        initImages();
    }
}