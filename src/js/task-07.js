const refs = {
  inputSizeControl: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};
refs.textSpan.style.fontSize = "50px";

refs.inputSizeControl.addEventListener("input", (event) => {
  refs.textSpan.style.fontSize = `${event.currentTarget.value}px`;
});
