const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", onInputChange);
function onInputChange(event) {
  const inputText = event.currentTarget.value;
  const trimmedText = inputText.trim();
  if (trimmedText === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedText;
  }
}
