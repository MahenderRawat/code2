/*console.dir(document);
console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
//document.title= 123;
//console.log(document.title)
console.log(document.forms[0]);

//GETELEEMENTBYID//
console.log(document.getElementById('header-title'));
var headerTitle= document.getElementById('header-title');
var header= document.getElementById('main-header');
headerTitle.textContent='hello';
headerTitle.innerText='good bye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h>';    
header.style.borderBottom = 'solid 3 px #000';
*/
/*GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('title');
console.log(items);
console.log(items[0]);
items[0].style.color = "green";
items[0].style.fontWeight='bold';

var li = document.getElementsByTagName('li');
console.log(li);
li[1].style.backgroundColor ='green';
for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight = 'bold';
}

//var item = document.getElementsByClassName('list-group-item');
//onsole.log(item);
/*li[2].style.backgroundColor ='skyblue';
for(var i=0; i<li.length; i++)
{
    li[i].style.fontWeight = 'bold';
}
li[2].style.display = 'none';

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px black';
*/

/*var item = document.querySelectorAll('.list-group-item');
//item[1].style.color = 'green';

//var odd = document.querySelectorAll('li:nth-child(odd');
//for(var i = 0; i < odd.length ; i++)
{
    odd[i].style.backgroundColor = 'green';
}
*/


//TRAVERSING THE DOM

var itemList = document.querySelector('#items');
/*parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'skyblue';
console.log(itemList.parentNode.parentNode.parentNode);*/

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.childNodes[0]);
// itemList.childNodes[1].style.backgroundColor = 'yellow';

// console.log(itemList.children); 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild

// console.log(itemList.firstChild);

// //firstElementChile
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// itemList.firstElementChild.style.backgroundColor = 'red';

// //lastElementChild
// itemList.lastElementChild.textContent = 'Hello 4'
// itemList.lastElementChild.style.backgroundColor  = 'blue';

//nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
 
// // //previouSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

//createElement

// Create a Div

var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'hello Div');

var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

var ul = document.querySelector('div ul');
var li = document.querySelector('div li');

ul.insertBefore(newDiv, li);

newDiv.style.color = 'red';