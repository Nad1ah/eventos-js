const num1Node = document.querySelector("#num1");
const num2Node = document.querySelector("#num2");
const btn = document.querySelector("#sum");
const p = document.querySelector("#feedback");

btn.addEventListener("click", () => {
  const num1 = Number.parseInt(num1Node.value);
  const num2 = Number.parseInt(num2Node.value);

  p.textContent = num1 + num2;
});

// btn.removeEventListener('click', colocar a funcao)
