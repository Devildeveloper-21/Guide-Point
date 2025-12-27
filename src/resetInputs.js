export function resetInputs(){
    // It reset login Form
    document.getElementById("loginEmail").value="";
    document.getElementById("loginPassword").value = "";
    document.getElementById("rememberMeCheckbox").checked = false;

    // reset Forgot Password field
    document.getElementById("registeredEmail").value = "";
    
    // reset Create Account Form
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("createAccEmail").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";

}