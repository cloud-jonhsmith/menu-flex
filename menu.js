var menu = document.getElementById("menu-movil")
var cross = document.getElementById("cross")
var items = document.getElementById("nav-menu")
var item1 = document.getElementById("item1")
var item2 = document.getElementById("item2")
var item3 = document.getElementById("item3")

menu.addEventListener("click", function(){
    menu.style.display="none"
    cross.style.display="block"
    cross.style.alignSelf="flex-end"

    items.style.display="flex"

    item1.style.display="block"
    item2.style.display="block"
    item3.style.display="block"
})

cross.addEventListener("click", function(){
    /* cross.style.display="none"
    menu.style.display="block"

    item1.style.display="none"
    item2.style.display="none"
    item3.style.display="none" */
    location.reload()
})
