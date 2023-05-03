async function fetchInfo(baseUrl, errorEmptyRes) {
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error("Не вдалось завантажити інформацію. Спробуйте пізніше!");
    }
    const data = await res.json();

    if (data.length === 0) {
      const errorMessageBox = createMessage(errorEmptyRes, "success");
      containerEl.appendChild(errorMessageBox);
      const goBack = document.createElement("a");
      goBack.classList.add("btn");
      goBack.href = "javascript:history.back()";
      goBack.innerText = "\u2B05 Назад";
      containerEl.appendChild(goBack);
    }
    return data;
  } catch (error) {
    const errorMessageBox = createMessage(error.message, "error");
    containerEl.appendChild(errorMessageBox);
  }
}
