import { insertSliderLeft, insertSliderRight} from "./insert-slider.js";

export const insertBeforeSliderImg = (node:any, imgNumber:number) => {
    node.setAttribute("src", `static/img${imgNumber}.png`);
    insertSliderLeft(node);
}
export const insertAfterSliderImg = (node:any, imgNumber:number) => {
    node.setAttribute("src", `static/img${imgNumber}.png`);
    insertSliderRight(node);
}