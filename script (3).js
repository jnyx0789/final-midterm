document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const submittedData = document.getElementById("submittedData");
    const backButton = document.getElementById("backButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation: Ensure all fields are filled
        if (!firstName || !lastName || !email || !message) {
            alert("All fields are required!");
            return;
        }

        // Confirmation alert
        if (!confirm("Are you sure you want to submit?")) {
            return;
        }

        // Display submitted data
        document.getElementById("displayFirstName").innerText = firstName;
        document.getElementById("displayLastName").innerText = lastName;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayMessage").innerText = message;

        // Hide form, show submitted data
        form.classList.add("hidden");
        submittedData.classList.remove("hidden");
    });

    // Back button functionality
    backButton.addEventListener("click", () => {
        // Reset form
        form.reset();

        // Show form, hide submitted data
        form.classList.remove("hidden");
        submittedData.classList.add("hidden");
    });
});
