// Завантаження списку користувачів з використанням API
function loadUsers() {
  fetch('https://gorest.co.in/public-api/users')
    .then(response => response.json())
    .then(data => {
      // Відображення списку користувачів на головній сторінці
      const userList = document.getElementById('userList');
      data.data.forEach(user => {
        const userElement = document.createElement('li');
        userElement.innerHTML = `<a href="#" onclick="loadUserPosts(${user.id})">${user.name}</a>`;
        userList.appendChild(userElement);
      });
    })
    .catch(error => console.error('Помилка при завантаженні списку користувачів:', error));
}

// Завантаження списку постів користувача з використанням API
function loadUserPosts(userId) {
  fetch(`https://gorest.co.in/public-api/users/${userId}/posts`)
    .then(response => response.json())
    .then(data => {
      // Відображення списку постів користувача на сторінці постів
      const postList = document.getElementById('postList');
      postList.innerHTML = '';
      data.data.forEach(post => {
        const postElement = document.createElement('li');
        postElement.innerHTML = `<a href="#" onclick="loadPostDetails(${post.id})">${post.title}</a>`;
        postList.appendChild(postElement);
      });
    })
    .catch(error => console.error(`Помилка при завантаженні списку постів користувача ${userId}:`, error));
}

// Завантаження деталей окремого поста з використанням API
function loadPostDetails(postId) {
  fetch(`https://gorest.co.in/public-api/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
      // Відображення деталей окремого поста на сторінці деталей поста
      const postDetails = document.getElementById('postDetails');
      postDetails.innerHTML = `
        <h2>${data.data.title}</h2>
        <p>${data.data.body}</p>
      `;
      loadComments(postId);
    })
    .catch(error => console.error(`Помилка при завантаженні деталей поста ${postId}:`, error));
}

// Завантаження коментарів до окремого поста з використанням API
function loadComments(postId) {
  fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
    .then(response => response.json())
    .then(data => {
      // Відображення коментарів до поста на сторінці деталей поста
      const commentsList = document.getElementById('commentsList');
      commentsList.innerHTML = '';
      data.data.forEach(comment => {
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
          <strong>${comment.name}</strong>
      })
    })