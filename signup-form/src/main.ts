import "./style.css";

const mainForm: HTMLFormElement = document.querySelector("#signup-form")!;

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formInputs = mainForm.querySelectorAll("input")!;

  formInputs.forEach((node) => {
    if (node.value === "") {
      node.parentElement?.classList.add("error");
    } else {
      node.parentElement?.classList.remove("error");
    }
  });
});
