import "./style.css";

const mainForm: HTMLFormElement = document.querySelector("#signup-form")!;
const firstName: HTMLInputElement = mainForm.querySelector("#fname")!;
const lastName: HTMLInputElement = mainForm.querySelector("#lname")!;
const emailInput: HTMLInputElement = mainForm.querySelector("#email")!;
const password: HTMLInputElement = mainForm.querySelector("#pass")!;
const submitButton: HTMLButtonElement = mainForm.querySelector("#submit")!;

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
