const linkListEl = document.querySelector(".post-container");

baseUrl = "https://gorest.co.in/public/v2/posts?page=1&per_page=20";

function createPost(post) {
  const postCard = document.createElement("li");
  postCard.classList.add("post-item");

  const postLink = document.createElement("a");
  postLink.classList.add("post-link");
  postLink.href = `comments.html`;
  postLink.innerText = post.title;

  const shortPost = document.createElement("p");
  shortPost.classList.add("post-body");
  shortPost.innerText = post.body.substring(0, 30).concat("...");

  postCard.appendChild(postLink);
  postCard.appendChild(shortPost);

  return postCard;
}
async function fetchPost() {
  try {
    const res = await fetch(baseUrl);
    //     if (!res.ok) {
    //       throw new Error("Не вдалось завантажити інформацію. Спробуйте пізніше!");
    //       // throw new Error("Користувачі не знайдені!");
    //     }
    const data = await res.json();
    data.map((post) => {
      const link = createPost(post);
      linkListEl.appendChild(link);
    });
    //     // const data = [];
    //     if (!data.length) {
    //       const errorMessageBox = createMessage(
    //         "Користувачі не знайдені",
    //         "success"
    //       );
    //       containerEl.appendChild(errorMessageBox);
    //     }

    //     data.map((user) => {
    //       const link = createLink(user);
    //       linkListEl.appendChild(link);
    //     });
  } catch (error) {
    // const errorMessageBox = createMessage(error.message, "error");
    // containerEl.appendChild(errorMessageBox);
    console.error(error);
    asd;
  }
}
fetchPost();
