const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Please fill in all fields!");
  } else {
    const formData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
