const id = getUserId();
const baseUrlPosts = `https://gorest.co.in/public/v2/users/${id}/posts`;

function createPost(post) {
  const postCard = document.createElement("li");
  postCard.classList.add("post-item");

  const postLink = document.createElement("a");
  postLink.classList.add("post-link");
  postLink.href = `post.html?id=${post.id}`;
  postLink.innerText = post.title;

  const shortPost = document.createElement("p");
  shortPost.classList.add("post-body");
  shortPost.innerText = post.body.substring(0, 50).concat("...");

  postCard.appendChild(postLink);
  postCard.appendChild(shortPost);

  return postCard;
}

async function getPostsById() {
  const data = await fetchInfo(baseUrlPosts, errorPostsEmptyRes);
  data.map((el) => {
    const frame = createPost(el);
    postsListEl.appendChild(frame);
  });
}

getPostsById();
