const signUpForm = document.querySelector("#sign_up")
const fname = signUpForm.querySelector("#fname")
const lname = signUpForm.querySelector("#lname")
const email = signUpForm.querySelector("#email")
const password = signUpForm.querySelector("#password")

signUpForm.addEventListener("submit", e => {
    e.preventDefault()
    if (
        !fname.value ||
        !lname.value ||
        !email.value ||
        !password.value
    ) {
        console.log("invalid")
    }
})