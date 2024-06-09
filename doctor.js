
function validateForm() {
    var Phone = document.getElementById('phone').value;
    var clinic = document.getElementById('clinic').value;
    var speciality = document.getElementById('speciality').value;
    var registration = document.getElementById('registration').value;
   
    var kyc = document.getElementById('kyc').value;
    // Get the phone number input
   
    

    if (clinic === "" || speciality === "" || registration === "" || Phone === "" || kyc === "") {
        alert("All fields must be filled out");
        return false;
    }
    
    if (!/^\d{10}$/.test(Phone)) {
        alert("Phone number must be a 10-digit number");
        return false;
    }
    

   

    // You can add more specific validation logic here if needed

    return true;
}

function validateLoginForm() {
    var registrationId = document.getElementById('registrationId').value;
    var phoneNo = document.getElementById('phoneNo').value;
    


    if (registrationId === "" || phoneNo === "") {
        alert("All fields must be filled out");
        return false;
    }
    if (!/^\d{10}$/.test(phoneNo)) {
        alert("Phone number must be a 10-digit number");
        return false;
    }



    // You can add more specific validation logic here if needed

    return true;
}


function sendVerificationCode() {
    // Get the phone number from the form
    
    const phoneNumber = document.getElementById('phone').value;

    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('verificationCode', verificationCode);
    // Display the verification code (for demonstration)
    alert("Your verification code is: " + verificationCode);
}

// Define the function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Get the verification code from the form
    const enteredVerificationCode = document.getElementById('verificationCode').value;
    const correctVerificationCode = localStorage.getItem('verificationCode');
    if (enteredVerificationCode === correctVerificationCode) {
        alert("correct otp");
        // Redirect the user to the dashboard or another page.
    } else {
        alert("Invalid verification code. Please try again.");
        // Allow the user to retry entering the verification code.
    }
    // You can add your verification logic here
    // For demonstration purposes, let's just log the verification code to the console
   


}
document.getElementById('verificationForm').addEventListener('submission', handleFormSubmission);

    
    // Get the verification code from the form


    // You can add your verification logic here
    // For demonstration purposes, let's just log the verification code to the console
    
// Attach the event listener to the form's submit event


