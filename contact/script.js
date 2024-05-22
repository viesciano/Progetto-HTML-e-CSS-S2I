function SendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_b6qe7ht","template_tuysuc9",parms).then(alert("Email Sent!"))
}