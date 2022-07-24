//console.dir(document);
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

//GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('title');
console.log(items);
console.log(items[0]);
items[0].style.color = "green";
items[0].style.fontWeight='bold';

var item = document.getElementsByClassName('list-group-item');
console.log(item);
item[2].style.backgroundColor ='green';
for(var i=0; i<item.length; i++)
{
    item[i].style.fontWeight = 'bold';
}
