import { setQuantityImages } from "./quantity-images";
import { openModal } from "./open-modal";
import { initImages } from "./init-images";
import { showArrows } from "./show-arrows";
import { hideArrows } from "./hide-arrows";

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