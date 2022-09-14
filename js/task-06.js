const validationImputRef = document.querySelector("#validation-input");

validationImputRef.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(validationImputRef.dataset.length)
  ) {
    validationImputRef.classList.add("valid");
    validationImputRef.classList.remove("invalid");
  } else {
    validationImputRef.classList.add("invalid");
  }
});
