// form validation 

// Disable form submissions if there are invalid fields
function validation() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("sub").value;
    var mess = document.getElementById("mess").value;



    if (user == "") {
        document.getElementById("username").innerHTML = "username is required";
        return false;
    }

    if (email == "") {
        document.getElementById("emailaddress").innerHTML = "Email is required";
        return false;
    }

    if (sub == "") {
        document.getElementById("subject").innerHTML = "Subject is required";
        return false;
    }

    if (mess == "") {
        document.getElementById("message").innerHTML = "Message is required";
        return false;
    }

    else {
        document.write("<h1>Congratulation !</h1>");
    }

}


