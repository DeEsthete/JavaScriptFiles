// var element = document.body.children;
// console.log(element);
//var e1 = element[3].previousSibling;
//var e2 = element[3].nextSibling;
//console.log(e1);
//console.log(e2);
//var par = element[3].parentNode;
//console.log(par);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

//console.log(document.body.firstElementChild.rows[1].cells[1].cellIndex);

// var tab = document.getElementById("tb1");
// console.log(tab);

// var ps = document.getElementsByTagName("p");
// console.log(ps);

//var ps = document.getElementsByName("inp");
//console.log(ps);

// var ps = document.getElementsByClassName("p1");
// console.log(ps);

// var mas = document.querySelectorAll(".green");
// console.log(mas);

// var mas = document.querySelectorAll('p');
// for (var i = 0; i < mas.length; i++)
// {
//     console.log(mas[i].matches('.green'))
// }

// var a = document.getElementById('qaz');
// var ws = a.closest('.parent');
// console.log(ws);
//var mas = document.body.childNodes;
// for(var i = 0 ; i < mas.length; i++)
// {
//   console.log(mas[i].nodeType, mas[i].nodeName, mas[i].tagName);
// }
// console.log(" ");
// for(var i = 0 ; i < mas.length; i++)
// {
//   console.log(mas[i].innerHTML, mas[i].outerHTML);
// }

// var mas = document.body.childNodes;
// for(var i = 0 ; i < mas.length; i++)
// {
//   mas[i].innerHTML = "text";
// }
// for(var i = 0 ; i < mas.length; i++)
// {
//   console.log(mas[i].innerHTML, mas[i].outerHTML);
// }

// var mas = document.body.childNodes;
// for(var i = 0 ; i < mas.length; i++)
// {
//   if(mas[i].nodeType == 3)
//   {
//     mas[i].nodeValue = "vfvfvfvfffvf";
//   }
// }

//var mas = document.body.children;
//for(var i = 0 ; i < mas.length; i++)
//{
//    console.log(mas[i].textContent);
//}

//var mas = document.querySelectorAll('p');
//for (var i = 0; i < mas.length; i++)
//{
//    mas[i].hidden = true;
//} 

//var mas = document.querySelectorAll('a');
//for (var i = 0; i < mas.length; i++) {
//    if (mas[i].getAttribute('href').indexOf('://') != -1) {
//        //mas[i].setAttribute('class', 'outside');
//        mas[i].classList.add('outside');
//    }
//    else {
//        //mas[i].setAttribute('class', 'inside');
//        mas[i].classList.add('inside');
//    }
//}

//var mas = document.querySelectorAll('a');
//for (var i = 0; i < mas.length; i++)
//{
//    mas[i].dataset.site = "qaqzzzz";
//}

//var mas = document.querySelectorAll('div');
//var a = document.getElementById('link');
//for (var i = 0; i < mas.length; i++) {
//    if (mas[i].contains(a)) {
//        console.log(mas[i]);
//    }
//}

//var mas = document.body.childNodes;
//var result = mas[0].compareDocumentPosition(mas[1]);
//console.log(result);

//var p = document.createElement('p');
//p.innerHTML = "lorem";
//document.body.appendChild(p);

//var ul = document.getElementById('qaz');
//var newLi = document.createElement('li');
//newLi.innerHTML = "3";
//ul.insertBefore(newLi, ul.children[2]);

var ul = document.getElementById('qaz');
var ul2 = ul.cloneNode(true);
ul2.setAttribute('id', "newQaz");
var newLi = document.createElement('li');
newLi.innerHTML = "3";
ul2.insertBefore(newLi, ul2.children[2]);
document.body.appendChild(ul2);

ul2.removeChild(ul2.children[1]);
ul2.children[0].remove();
ul.replaceChild(newLi, ul.children[0]);