const containerEl = document.querySelector(".container");
const linkListEl = document.querySelector(".post-container");
const goBackBtn = document.querySelector(".btn");

baseUrl = "https://gorest.co.in/public/v2/users";

goBackBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

function getUserId() {
  const params = new URL(document.location).searchParams;
  return params.get("id");
}
function createMessage(message, type) {
  const cl = `alert-${type}`;
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", cl);
  errorMessageBox.innerText = message;
  return errorMessageBox;
}

function createPost(post) {
  const postCard = document.createElement("li");
  postCard.classList.add("post-item");

  const postLink = document.createElement("a");
  postLink.classList.add("post-link");
  postLink.href = `post.html?id=${post.id}`;
  postLink.innerText = post.title;

  const shortPost = document.createElement("p");
  shortPost.classList.add("post-body");
  shortPost.innerText = post.body.substring(0, 30).concat("...");

  postCard.appendChild(postLink);
  postCard.appendChild(shortPost);

  return postCard;
}
async function getPostsById() {
  const id = getUserId();
  const res = await fetch(`${baseUrl}/${id}/posts`);
  const posts = await res.json();
  if (!posts.length) {
    const errorMessageBox = createMessage(
      "У даного користувача відсутні пости",
      "success"
    );
    linkListEl.appendChild(errorMessageBox);
  }
  posts.map((post) => {
    const link = createPost(post);
    linkListEl.appendChild(link);
  });
}

getPostsById();
