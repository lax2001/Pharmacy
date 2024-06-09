// Function to generate a referral code
function generateReferralCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        referralCode += characters.charAt(randomIndex);
    }

    return referralCode;
}

// Function to handle button click event
function handleButtonClick() {
    const referralCode = generateReferralCode(6); // Generate a 6-character referral code
    showReferralCode(referralCode);
}

// Function to show referral code in an alert message
function showReferralCode(referralCode) {
    alert("Patient referral code is: " + referralCode);
}

// Add event listener to the button
document.getElementById('generateReferralCodeBtn').addEventListener('click', handleButtonClick);
