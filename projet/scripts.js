console.log("test")

let form = document.querySelector("#form");

form.onsubmit = function (event) {
    event.preventDefault();
    let nom = document.querySelector("#nom");
    if (nom.value.length < 3) {
        nom.style.border = "1px solid red"
        document.querySelector("#nom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    } else {
        nom.style.border = "1px solid black"
        document.querySelector("#nom-error").innerHTML = "";

    }


    console.log()
    let prenom = document.querySelector("#prenom");
    if (prenom.value.length < 4) {
        prenom.style.border = "1px solid red"
        document.querySelector("#prenom-error").innerHTML = "le prenom doit contenir au moins 4 lettres";
    } else {
        prenom.style.border = "1px solid black"
        document.querySelector("#prenom-error").innerHTML = "";

    }
    console.log()
    let email = document.querySelector("#email");
    if (email.value.length < 10 || email.value.indexOf("@") == -1) {
        email.style.border = "1px solid red"
        document.querySelector("#email-error").innerHTML = "votre mail est inccorect";
    } else {
        email.style.border = "1px solid black"
        document.querySelector("#email-error").innerHTML = "";

    }
    console.log()
    let mdp = document.querySelector("#mdp");
    if (mdp.value.length < 8) {
        mdp.style.border = "1px solid red"
        document.querySelector("#mdp-error").innerHTML = "votre mot de passe est inccorect";
    } else {
        mdp.style.border = "1px solid black"
        document.querySelector("#mdp-error").innerHTML = "";

    }
    console.log()



}

