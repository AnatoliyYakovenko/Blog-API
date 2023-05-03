function createLink(user) {
  const link = document.createElement("a");
  link.classList.add("list-group-item");
  link.href = `posts.html?id=${user.id}`;
  link.innerText = user.name;

  return link;
}
async function fetchUsers() {
  const data = await fetchInfo(baseUrlUsers, errorEmptyRes);
  data.map((el) => {
    const frame = createLink(el);
    linkListEl.appendChild(frame);
  });
}
fetchUsers();
