console.log("test")

let form1 = document.querySelector("#form1");

form1.onsubmit = function (event) {
    event.preventDefault()
    let nom1 = document.querySelector("#nom1");
    if (nom1.value.length < 3) {
        nom1.style.border = "1px solid red"
        document.querySelector("#nom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    } else {
        nom1.style.border = "1px solid black"
        document.querySelector("#nom-error").innerHTML = "";

    }
    console.log()
let email = document.querySelector("#email");
    if (email.value.length < 10 || email.value.indexOf("@") == -1) {
        email.style.border = "1px solid red"
        document.querySelector("#email-error").innerHTML = "votre mail est inccorect";
    } else {
        email.style.border = "1px solid black"
        document.querySelector("#email-error").innerHTML =""
    }
    console.log()
    let com= document.querySelector("#com");
    if (com.value.length >300) {
        com.style.border = "1px solid red"
        document.querySelector("#com-error").innerHTML = "votre commentaire est plus de 300 lettre";
    } else {
        com.style.border = "1px solid black"
        document.querySelector("#com-error").innerHTML = "";

    }
    console.log()
    let sujet= document.querySelector("#sujet");
    if (sujet.value.length < 5) {
        sujet.style.border = "1px solid red"
        document.querySelector("#sujet-error").innerHTML = "votre sujet est moins de 5 lettre";
    } else {
        sujet.style.border = "1px solid black"
        document.querySelector("#sujet-error").innerHTML = "";

    }
    console.log()}
    
    let form2 = document.querySelector("#form2");

form2.onsubmit = function (event) {
    event.preventDefault()
let email2= document.querySelector("#email2");
    if (email2.value.length < 10 || email2.value.indexOf("@") == -1) {
        email2.style.border = "1px solid red"
        document.querySelector("#email2-error").innerHTML = "votre mail est inccorect";
    } else {
        email2.style.border = "1px solid black"
        document.querySelector("#email2-error").innerHTML =""
    }  console.log()



}

