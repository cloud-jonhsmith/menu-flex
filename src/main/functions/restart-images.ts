import { getQuantityImages } from "./quantity-images.js";
import { removeNodeLeft, removeNodeRight } from "./remove-node.js";
import { addNodeLeft, addNodeRight } from "./add-node.js";

export function restartImages(directionArrow:number, valorImg:number) {

    if (directionArrow > 0) {
        removeNodeLeft();
        addNodeRight(valorImg);
    } else {
        removeNodeRight();
        addNodeLeft(valorImg);
    }
}