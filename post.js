const containerEl = document.querySelector(".container");
const commentsListEl = document.querySelector(".comments-list");
const goBackBtn = document.querySelector(".btn");

baseUrl = "https://gorest.co.in/public/v2/users";
baseUrlCom = "https://gorest.co.in/public/v2/posts";

goBackBtn.addEventListener("click", () => {
  window.location.href = "/posts.html";
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
  if (!comments.length) {
    const errorMessageBox = createMessage("Коментарі відсутні", "success");
    commentsListEl.appendChild(errorMessageBox);
  }

  //   console.log(comments);

  comments.map((comment) => {
    const commentCard = createComments(comment);
    commentsListEl.appendChild(commentCard);
  });
}

getCommentsById();
