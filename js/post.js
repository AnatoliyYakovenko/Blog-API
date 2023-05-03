const id = getIdFromUrl();
const baseUrlComments = `https://gorest.co.in/public/v2/posts/${id}`;

function createPost(post) {
  const postCard = document.createElement("li");
  postCard.classList.add("onePost-item");

  const onePostTitle = document.createElement("h4");
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

  const goBackBtn = document.createElement("p");
  goBackBtn.classList.add("comment-body");
  goBackBtn.innerText = comment.body;

  commentCard.appendChild(userComment);
  commentCard.appendChild(goBackBtn);
  return commentCard;
}
async function getOnePostById() {
  const data = await fetchInfo(baseUrlComments, errorPostsEmptyRes);
  const postInfo = createPost(data);
  postContainer.appendChild(postInfo);
}

async function getCommentsById() {
  const data = await fetchInfo(
    `${baseUrlComments}/comments`,
    errorCommentsEmptyRes
  );
  data.map((el) => {
    const frame = createComments(el);
    commentsListEl.appendChild(frame);
  });
 
}
getOnePostById();
getCommentsById();
