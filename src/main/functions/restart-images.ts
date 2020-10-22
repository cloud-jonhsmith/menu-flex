import { removeNodeLeft, removeNodeRight } from "./remove-node";
import { addNodeLeft, addNodeRight } from "./add-node";

export function restartImages(directionArrow:number, valorImg:number) {

    if (directionArrow > 0) {
        removeNodeLeft();
        addNodeRight(valorImg);
    } else {
        removeNodeRight();
        addNodeLeft(valorImg);
    }
}