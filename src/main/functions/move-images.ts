import { $childrenSliderContainer } from "../variables/variables.js";

export const moveImagesLeft = () => {
    let valorStyleLeft:number = -1000;

    for (let i = 0; i <= 2; i++) {
        $childrenSliderContainer[i].style.left = `${valorStyleLeft}px`;
        valorStyleLeft += 500;
    }
}
export const moveImagesRight = () => {
    let valorStyleLeft:number = 0;

    for (let i = 0; i <= 2; i++) {
        $childrenSliderContainer[i].style.left = `${valorStyleLeft}px`;
        valorStyleLeft += 500;
    }
}