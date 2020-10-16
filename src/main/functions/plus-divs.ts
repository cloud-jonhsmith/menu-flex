import { showDivs } from "./show-divs.js"

let slideIndex:number = 1;

export const plusDivs = (n:any) => showDivs(slideIndex += n, n);