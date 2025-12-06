const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  event.currentTarget.reset();
}

function handleSubmitUniversal(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formElements = form.elements;
  const formData = {};
  let isValid = true;

  for (const element of formElements) {
    // Перевіряємо тільки input елементи
    if (element.tagName === "INPUT") {
      const value = element.value.trim();
      const name = element.name;

      if (!value) {
        isValid = false;
        break;
      }

      formData[name] = value;
    }
  }

  if (!isValid) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);
  form.reset();
}
