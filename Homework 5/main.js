let div = document.createElement('div');
div.className = 'container';
div.id = 'wrapper';

document.body.appendChild(div);

let img = document.createElement('img');
img.id = 'wrapper-element';
img.src = './img/img.jpg';
img.style.width = '200px';
img.style.height = '150px';
div.appendChild(img);

let btn = document.createElement('button');
btn.textContent = 'Click Me';
div.appendChild(btn);

btn.addEventListener('click', function(event) {
    alert('Button was clicked!');
});

