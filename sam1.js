// GET ELEMENT BY CLASS//
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}*/

// GET ELEMENT BY TAGNAME//
/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}*/

// QUERY SELECTOR //
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4p #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';*/

// QUERYSELECTORALL //
/*var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}*/

/*var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display="none";*/

//TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
//parentNode Propertie
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);*/

//ParentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
*/

//chilnode

//console.log(itemList.childNodes);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";
*/
//FirstChild
console.log(itemList.firstChild);
//firstElement child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
/*console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
*/

//Next Sibling
/*console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);*/

//Previous Sibling
/*console.log(itemList.previousSibling);
//PreviousElement Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';*/

//Create Element

// Create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'Hello';

// Add id
newDiv.id = 'hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontsize = '30px';

container.insertBefore(newDiv, h1);

var firstItem = document.getElementById("items");
var newItem = document.createTextNode("Hello World");
firstItem.parentNode.insertBefore(newItem,firstItem);