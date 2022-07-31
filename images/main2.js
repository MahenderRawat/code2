//single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));

//multiple element
//console.log(document.querySelectorAll('.item'));

const ul= document.querySelector('.items');
//ul.remove();

ul.firstElementChild.textContent='Hello';
ul.children[1].innerHTML='Bobby';
ul.lastElementChild.innerHTML='<h1>Hello boy</h1>';
ul.firstElementChild.style.background='green';
ul.children[1].style.background='yellow';

const btn=document.querySelector('.btn');
btn.style.background = 'blue';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='blue';
    document.querySelector('.btn').style.background='white';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello man</h1>';
}); 
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='skyblue';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.btn').style.background='red';
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello man</h1>';
}); 
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='grey';
    document.querySelector('.btn').style.background='blue';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello man</h1>';
}); 