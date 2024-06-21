(function() {
    emailjs.init('Aest Inventors'); // Replace 'your_user_id' with your actual EmailJS user ID
})();

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('AestInventor101', 'template_ufq5bgd' ,this) // Replace with your actual service and template IDs
        .then(function() {
            alert('Application sent successfully!We will respond within 2 bussiness days.');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
});
