const containerEl = document.querySelector(".container");
const postContainer = document.querySelector(".post-container");
const commentsListEl = document.querySelector(".comments-list");
const goBackBtn = document.querySelector(".btn");

baseUrl = "https://gorest.co.in/public/v2/users";
baseUrlCom = "https://gorest.co.in/public/v2/posts";
goBackBtn.addEventListener("click", function goBack() {
  window.history.back();
});

function getPostId() {
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
  postCard.classList.add("onePost-item");

  const onePostTitle = document.createElement("h5");
  onePostTitle.classList.add("onePost-title");
  onePostTitle.innerText = post.title;

  const onePostBody = document.createElement("p");
  onePostBody.classList.add("onePost-body");
  onePostBody.innerText = post.body;

  postCard.appendChild(onePostTitle);
  postCard.appendChild(onePostBody);

  return postCard;
}

function createComments(comment) {
  const commentCard = document.createElement("li");
  commentCard.classList.add("comment-item");

  const userComment = document.createElement("h5");
  userComment.classList.add("comment-user");
  userComment.innerText = comment.name;

  const commentBody = document.createElement("p");
  commentBody.classList.add("comment-body");
  commentBody.innerText = comment.body;

  commentCard.appendChild(userComment);
  commentCard.appendChild(commentBody);
  return commentCard;
}
async function getOnePostById() {
  const id = getPostId();
  console.log(id);

  const res = await fetch(`${baseUrlCom}/${id}`);
  const post = await res.json();


  const postInfo = createPost(post);

  postContainer.appendChild(postInfo);
}

async function getCommentsById() {
  const id = getPostId();
  const res = await fetch(`${baseUrlCom}/${id}/comments`);
  const comments = await res.json();
  if (!comments.length) {
    const errorMessageBox = createMessage("Коментарі відсутні", "success");
    commentsListEl.appendChild(errorMessageBox);
  }

  comments.map((comment) => {
    const commentCard = createComments(comment);
    commentsListEl.appendChild(commentCard);
  });
}
getOnePostById();
getCommentsById();
