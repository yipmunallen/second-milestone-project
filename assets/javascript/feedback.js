function sendMail(contactForm) {
    emailjs.send("gmail", "quiz_website", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "quiz_feedback": contactForm.feedbacksummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thank you for your feedback!");
            document.getElementById('fullname').value=''; 
            document.getElementById('emailaddress').value=''; 
            document.getElementById('feedbacksummary').value='';
        },
        function(error) {
            console.log("FAILED", error);
            alert("An error has occured, please try again later");
        }
    );
 
    return false;  // To block from loading a new page
}