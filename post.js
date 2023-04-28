const linkListEl = document.querySelector(".list-group");

baseUrl = "https://gorest.co.in/public/v2/posts?page=1&per_page=20";

function createLink(post) {
  const link = document.createElement("a");
  link.classList.add("list-group-item");
  link.innerText = post.title;

  return link;
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
      const link = createLink(post);
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
  }
}
fetchPost();
