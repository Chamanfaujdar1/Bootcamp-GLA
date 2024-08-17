function redirectToPage() {
    // Get the selected radio button value
    const selectedOption = document.querySelector('input[name="registerOption"]:checked').value;
    
    // Redirect based on the selected value
    if (selectedOption === "register") {
        window.location.href = "register.html"; // Replace with your target page
    } else if (selectedOption === "registerWithPhoto") {
        window.location.href = "register_with_photo.html"; // Replace with your target page
    }
}
