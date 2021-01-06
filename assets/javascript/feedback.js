function sendMail(contactForm) {
    emailjs.send("gmail", "quiz_website", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "quiz_feedback": contactForm.feedbacksummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}