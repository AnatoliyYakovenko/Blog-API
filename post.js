const containerEl = document.querySelector(".container");
const linkListEl = document.querySelector(".post-container");
const goBackBtn = document.querySelector(".btn");

baseUrl = "https://gorest.co.in/public/v2/users";
baseUrlCom = "https://gorest.co.in/public/v2/posts";

goBackBtn.addEventListener("click", () => {
  window.location.href = "/posts.html";
});

// function getUserId() {
//   const params = new URL(document.location).searchParams;
//   return params.get("id");
// }
// function createMessage(message, type) {
//   const cl = `alert-${type}`;
//   const errorMessageBox = document.createElement("div");
//   errorMessageBox.classList.add("alert", cl);
//   errorMessageBox.innerText = message;
//   return errorMessageBox;
// }

// function createPost(post) {
//   const post = document.createElement("li");
//   post.classList.add("post-item");

//   const postTitle = document.createElement("h5");
//   postTitle.classList.add("post-title");
//   postTitle.innerText = post.title;

//   const postBody = document.createElement("p");
//   postBody.classList.add("post-body");
//   postBody.innerText = post.body;

//   post.appendChild(postTitle);
//   post.appendChild(postBody);

//   return post;
// }
// async function getOnePostById() {
//   const id = getUserId();
//   const res = await fetch(`${baseUrl}/${id}/posts`);
//   const post = await res.json();

//   //   posts.map((post) => {
//   //     const link = createPost(post);
//   //     linkListEl.appendChild(link);
//   //   });
// }
async function getCommentsById() {
  const id = getUserId();
  const res = await fetch(`${baseUrlCom}/${id}/comments`);
  const comments = await res.json();

  console.log(comments);

  //   comments.map((post) => {
  //     const link = createPost(post);
  //     containerEl.appendChild(link);
  //   });
}

getCommentsById();
