const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector("#value"),
};
let counterValue = 0;

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
});

refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.counterValueEl.textContent = counterValue;
});
