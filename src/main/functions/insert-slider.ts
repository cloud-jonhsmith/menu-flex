export const insertSlider = (imgNumber:number) => {
    let node:any = document.createElement("img");

    node.setAttribute("src", `static/img${imgNumber}.png`);
    node.classList.add("imagenes");
    
    return node;
}