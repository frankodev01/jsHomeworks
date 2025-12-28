import { burgerBar } from './burger.js';

burgerBar();

axios.get('http://localhost:3000/posts')
    .then(function (response) {
        const posts = response.data;
        posts.forEach(function (post) {
            let ul = document.createElement('ul');
            let liId = document.createElement('li');

            liId.textContent = `ID: ${post.id}`;
            ul.appendChild(liId);

            let liTitle = document.createElement('h3');
            liTitle.textContent = `Title: ${post.title}`;
            ul.appendChild(liTitle);

            document.body.appendChild(ul);
        });
    })
    .catch(function (error) {
        console.error('Error fetching posts:', error);
    });