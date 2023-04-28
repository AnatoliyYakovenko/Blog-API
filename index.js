const linkListEl = document.querySelector(".list-group");
const containerEl = document.querySelector(".container");
const baseUrl = "https://gorest.co.in/public/v2/users?page=1&per_page=20";

function createLink(user) {
  const link = document.createElement("a");
  link.classList.add("list-group-item");
  link.innerText = user.name;

  return link;
}
function createMessage(message, type) {
  const cl = `alert-${type}`;
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", cl);
  errorMessageBox.innerText = message;
  return errorMessageBox;
}

async function fetchUsers() {
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error("Не вдалось завантажити інформацію. Спробуйте пізніше!");
      // throw new Error("Користувачі не знайдені!");
    }
    const data = await res.json();
    // const data = [];
    if (!data.length) {
      const errorMessageBox = createMessage(
        "Користувачі не знайдені",
        "success"
      );
      containerEl.appendChild(errorMessageBox);
    }

    data.map((user) => {
      const link = createLink(user);
      linkListEl.appendChild(link);
    });
  } catch (error) {
    const errorMessageBox = createMessage(error.message, "error");
    containerEl.appendChild(errorMessageBox);
  }
}
fetchUsers();
