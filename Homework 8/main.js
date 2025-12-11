let wrapper = document.getElementById("wrapper");
let postWrapper = document.getElementById("postWrapper");
let closeBtn = document.querySelector(".close");
let addBtn = document.querySelector(".add");
let addWrapper = document.querySelector(".addwrapper");
let btn = document.getElementById("btn");
let addForm = document.getElementById("addForm");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((posts) => {
    posts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");

      postDiv.dataset.id = post.id;
      postDiv.dataset.title = post.title;
      postDiv.dataset.body = post.body;

      postDiv.innerHTML = `
                <h3>Post ID: ${post.id}</h3>
                <h2>${post.title}</h2>
            `;

      wrapper.appendChild(postDiv);
    });
  })
  .catch((error) => {
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.textContent = `Error: ${error.message}`;
    wrapper.appendChild(errorDiv);
  });

wrapper.addEventListener("click", function (e) {
  let post = e.target.closest(".post");
  if (post) {
    postWrapper.style.display = "block";
    postWrapper.textContent = `${post.dataset.body}`;
    closeBtn.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  postWrapper.style.display = "none";
  addWrapper.style.display = "none";
});

addBtn.addEventListener("click", function () {
  addWrapper.style.display = "block";
});

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let title = document.getElementById("titleInput").value;
  let body = document.getElementById("bodyInput").value;

  // Optional: POST to JSONPlaceholder
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, userId: 11 }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.dataset.id = post.id;
      postDiv.dataset.title = post.title;
      postDiv.dataset.body = post.body;

      postDiv.innerHTML = `
        <h3>Post ID: ${post.id}</h3>
        <h2>${post.title}</h2>
     `;

      wrapper.appendChild(postDiv);
    })
    .then((json) => console.log("Post saved:", json))
    .catch((error) => {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add("error");
      errorDiv.textContent = `Error: ${error.message}`;
      wrapper.appendChild(errorDiv);
    });

  addWrapper.style.display = "none";
  addForm.reset();
});
