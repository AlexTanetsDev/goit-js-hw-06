const validationImputRef = document.querySelector("#validation-input");

validationImputRef.addEventListener("input", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(validationImputRef.dataset.length)
  ) {
    validationImputRef.classList.add("valid");
    validationImputRef.classList.remove("invalid");
  } else {
    validationImputRef.classList.add("invalid");
    validationImputRef.classList.remove("valid");
  }
  if (event.currentTarget.value.length === 0) {
    validationImputRef.classList.remove("invalid");
  }
});
