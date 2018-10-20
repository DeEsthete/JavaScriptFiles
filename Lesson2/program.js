// var a = 0xFF;
// alert(a / 0);
// alert(typeof a);

// alert(0 / 0);
// alert(NaN == NaN);

// alert(parseInt("98djdkfjdkfjdkfdj"));
// alert(parseFloat("6.7hjdfhjfhdjfhd"));

// var a = 160;
// alert(a.toString(2)); //перевод числа в двоичную систему счисления

// alert(Math.round(2.8));

// alert("Привет\nМир");

// var str = "1234567890"
// alert(str.charAt(2));

// var str1 = "beta";
// str1.indexOf("e");

// var str1 = "hello world";
// countSym("l");
// function countSym(a)
// {
//   var currentPos = 0;
//   var countL = 0;
//   for (var i = 0; i < str1.length; i++)
//   {
//     if (str1.indexOf(a, i) > currentPos)
//     {
//       currentPos = str1.indexOf(a, i);
//       countL++;
//     }
//   }
//   alert(countL);
// }

// var obj = {
//   name:"Petya",
//   age:"24"
// }
// if("name" in obj)
// {
//   alert(obj.name + " " + obj.age);
// }
// else
// {
//   alert("Name unknown!")
// }
//
// for(key in obj)
// {
//   alert(key);
// }
//
// delete obj;

// var arr = "1,2,3,4,5,6,7,8,9,0".split(',');
// var arr2 = [0,1,2,3,4,5,6,7,8,9];
// var str = arr.join(':');
// arr.push(15);
// arr.unshift(-1);
// arr.splice(2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// var arr3 = arr.slice(5, 7);
// function sortArr(a,b)
// {
//   if(a>b)return 1;
//   else return -1;
// }
// var arr4 = arr.sort(sortArr);
// alert(arr4);

// var arr = [0,1,2,3,4,5,6,7,8,9];
// var res = toStr(arr, ":");
// function toStr(arr, sym)
// {
//   var str = "";
//   arr.forEach(function(item, i, arr) {
//     str = str + item
//     if (i != arr.length-1)
//     {
//       str = str + sym;
//     }
//   });
//   return str;
// }
// alert(res);

// var arr = [1,2,3,4,5]
// var result = arr.reduce(function(sum, current)
// {
//   return sum+current;
// }, 0);
// alert(result);

// var arr = [1,2,3,4,5]
// var result = getSum(arr);
// function getSum(arr)
// {
//   var resArr = [];
//   for(var i = 0; i < arr.length; i++)
//   {
//     var sum = 0;
//     for(var j = 0; j <= i; j++)
//     {
//       sum =  sum + arr[j];
//     }
//     resArr.push(sum);
//   }
//   return resArr;
// }
// alert(result);

var arr = [1,2,3,4,5]
var arr2 = [];
arr.reduce(function(sum, current)
{
  sum = sum + current;
  arr2.push(sum);
  return sum;
}, 0);
alert(arr2);






























//--
