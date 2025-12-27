import {resetInputs} from "./resetInputs.js"

const forgotpasslink = document.getElementById("forgotpasslink");
const logincard = document.getElementById("logincard");
const resetpass = document.getElementById("resetpass");
const backtologin = document.getElementById("backtologin");
const createacclink = document.getElementById("createacclink");
const newaccountform = document.getElementById("newaccountform");
const returntologin = document.getElementById("returntologin");

export function formManager() {

  forgotpasslink.addEventListener("click", function () {
    logincard.style.display = "none";
    logincard.style.animation = "hide-animation 0.5s 1 ease";
    resetpass.style.display = "block";
    resetpass.style.animation = "show-animation 0.5s 1 ease";
    resetInputs()
});

backtologin.addEventListener("click", function () {
    logincard.style.display = "block";
    logincard.style.animation = "show-animation 0.5s 1 ease";
    resetpass.style.display = "none";
    resetpass.style.animation = "hide-animation 0.5s 1 ease";
    resetInputs()
});

createacclink.addEventListener("click", function () {
    newaccountform.style.display = "block";
    newaccountform.style.animation = "show-animation 0.5s 1 ease";
    logincard.style.display = "none";
    logincard.style.animation = "hide-animation 0.5s 1 ease";
    resetInputs()
});

returntologin.addEventListener("click", function () {
    newaccountform.style.display = "none";
    newaccountform.style.animation = "hide-animation 0.5s 1 ease";
    logincard.style.display = "block";
    logincard.style.animation = "show-animation 0.5s 1 ease";
    resetInputs()
    });
}
