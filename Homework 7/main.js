const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.addEventListener('load', function() {
    const users = JSON.parse(request.responseText);

    let ul = document.createElement('ul');

    users.forEach(function(user) {
        let li = document.createElement('li');
        li.textContent = user.company.name;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
});

request.addEventListener('error', function() {
    let li = document.createElement('li');
    li.textContent = 'Error loading data';
    document.body.appendChild(li);

});

request.send();

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', {
    method: 'GET',
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    let ul = document.createElement('ul');

    data.drinks.forEach(drink => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = drink.strDrinkThumb;
        img.width = 100;
        li.textContent = drink.strDrink;
        ul.appendChild(li);
        ul.appendChild(img);
    });

    document.body.appendChild(ul);
})
.catch(error => {
    let li = document.createElement('li');
    li.textContent = 'Error fetching cocktail data';
    document.body.appendChild(li);
});

