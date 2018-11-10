var object = document.getElementById("div2");
function removeChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
removeChild(object);