//var elem = document.getElementById('fDiv');
//elem.insertAdjacentHTML("afterBegin", "luuuuuuuuuuuuuuuuuuuuuuuuuuul");

//var elem = document.getElementById('ul1');
//var frag = document.createDocumentFragment();
//for (var i = 0; i < 10; i++) {
//    var li = document.createElement('li');
//    li.innerHTML = i;
//    frag.appendChild(li);
//}
//elem.appendChild(frag);

//var elem = document.getElementById('fDiv');
//var st = elem.style;
//st.width = "100px";
//st.height = "100px";
//st.background = "Red";
//st.cssText = st.cssText + "font-size: 48px";

//var elem = document.getElementById('aa');
//console.log(window.getComputedStyle(elem).color);

//var elem = document.getElementById('fDiv');
//function clickMe()
//{
//    console.log(elem.offsetLeft, elem.offsetTop);
//    console.log(elem.clientWidth, elem.clientHeight);
//    console.log(elem.scrollWidth, elem.scrollHeight);
//    console.log(elem.scrollLeft, elem.scrollTop);
//}

//var elem = document.getElementById('un');
//function clickMe()
//{
//    elem.scrollIntoView(true);
//}

//var element = document.elementFromPoint(300, 300);
//element.style.background = "red";

//function getCoords(elem) {
//    var box = elem.getBoundingClientRect();
//    return{
//        top: box.top + window.pageYOffset,
//        left: box.left + window.pageXOffset
//    };
//}
//console.log(getCoords(document.elementFromPoint(300, 300)).top);
//console.log(getCoords(document.elementFromPoint(300, 300)).left);

//var element = document.getElementById("fDiv");
//element.onclick = function () {
//    alert("LUL");
//}
//element.addEventListener("click", Cliciuk);
//function Cliciuk(e)
//{
//    console.log(e);
//    element.removeEventListener("click", Cliciuk);
//}

//var element = document.getElementById("fjf");
//function clickOnDiv() {
//    alert("Leha");
//}
//function clickOnCode() {
//    alert("Code");
//}
//element.addEventListener("click", eventA);
//function eventA(e) {
//    alert("LehaEvent");
//    e.stopPropagation();
//}
//var el2 = document.getElementById("codee");
//el2.addEventListener("click1", eventA);
//function eventA(e) {
//    alert("CodeEvent");
//    e.stopPropagation();
//}

//var elem = document.getElementById('AGoogle');
//elem.addEventListener("click", eventFunc);
//function eventFunc(e) {
//    e.preventDefault();
//}

//var elem = document.forms["myForm"];
//var button = elem.elements.myButton;
//var input = elem.elements.myInput;
//button.onclick = function () {
//    console.log(input.value);
//}

//var elem = document.forms["myForm"];
//var select = elem.elements.mySelect;
//select.onchange = function () {
//    console.log(select.options[select.selectedIndex].value);
//}

var table = document.getElementById("myTable");
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", clickOnCell);
}
function clickOnCell(e) {
    var value = prompt("Input");
    e.currentTarget.innerHTML = value;
}
function addRow() {
    var newRow = document.createElement("tr");
    var qq = table.rows[0].cells;
    for (var i = 0; i < qq.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML = "1";
        newRow.appendChild(newTd);
    }
    table.appendChild(newRow);
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", clickOnCell);
    }
}
function addColumn() {
    var aa = table.rows;
    for (var i = 0; i < aa.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML = "1";
        aa[i].appendChild(newTd);
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", clickOnCell);
    }
}