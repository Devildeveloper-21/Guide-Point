export function loginform(){
    const forgotpasslink = document.getElementById("forgotpasslink")
    const logincard = document.getElementById("logincard")
    const resetpass = document.getElementById("resetpass")
    const backtologin = document.getElementById("backtologin")
    forgotpasslink.addEventListener("click", function(){
        logincard.style.display = "none";
        logincard.style.animation = "hide-animation 1s 1 ease";
        resetpass.style.display = "block";
        resetpass.style.animation = "show-animation 1s 1 ease";

    })
    
    backtologin.addEventListener("click", function(){
        logincard.style.display = "block";
        logincard.style.animation = "show-animation 1s 1 ease";
        resetpass.style.display = "none";
        resetpass.style.animation = "hide-animation 1s 1 ease";

    })

}

