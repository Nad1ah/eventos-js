const btns = document.querySelector("#buttons");
const p = document.querySelector("#feedback");

btns.addEventListener("click", (event) => {
  const btnText = event.target.textContent;

  p.textContent = `Cliquei no ${btnText}`;
});
