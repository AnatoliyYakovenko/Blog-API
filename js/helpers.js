function createMessage(message, type) {
  const cl = `alert-${type}`;
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", cl);
  errorMessageBox.innerText = message;
  return errorMessageBox;
}
function getIdFromUrl() {
  const params = new URL(document.location).searchParams;
  return params.get("id");
}
function createGoBackLink(){
  const goBack = document.createElement("a");
      goBack.classList.add("btn");
      goBack.href = "javascript:history.back()";
      goBack.innerText = "\u2B05 Назад";
      return goBack;
}
