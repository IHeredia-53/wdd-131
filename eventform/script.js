const form = document.getElementById("ticketForm");
const typeSelect = document.getElementById("type");
const extraField = document.getElementById("extraField");
const extraLabel = document.getElementById("extraLabel");
const extraInput = document.getElementById("extraInput");
const errorsDiv = document.getElementById("errors");
const ticketInfo = document.getElementById("ticketInfo");

typeSelect.addEventListener("change", () => {

    if (typeSelect.value === "student") {
        extraField.classList.remove("hidden");
        extraLabel.textContent = "Student I#";
        extraInput.value = "";
    }
    else if (typeSelect.value === "guest") {
        extraField.classList.remove("hidden");
        extraLabel.textContent = "Access Code";
        extraInput.value = "";
    }
    else {
        extraField.classList.add("hidden");
    }

});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorsDiv.innerHTML = "";
    ticketInfo.innerHTML = "";

    let errors = [];

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = typeSelect.value;
    const dateValue = document.getElementById("eventDate").value;
    const extraValue = extraInput.value.trim();

    if (firstName === "") {
        errors.push("First name is required.");
    }

    if (lastName === "") {
        errors.push("Last name is required.");
    }

    if (email === "") {
        errors.push("Email is required.");
    }

    if (type === "") {
        errors.push("Please select a ticket type.");
    }

    if (dateValue === "") {
        errors.push("Please select an event date.");
    } else {

        const selectedDate = new Date(dateValue);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
            errors.push("Event date must be later than today.");
        }
    }

    if (type === "student") {
        const idPattern = /^\d{9}$/;

        if (!idPattern.test(extraValue)) {
            errors.push("Student I# must be 9 digits.");
        }
    }

    if (type === "guest") {
        if (extraValue !== "EVENT131") {
            errors.push("Incorrect access code.");
        }
    }

    if (errors.length > 0) {

        let output = "<ul>";

        errors.forEach(error => {
            output += `<li>${error}</li>`;
        });

        output += "</ul>";

        errorsDiv.innerHTML = output;
        return;
    }

    ticketInfo.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${type}</p>
        <p>${dateValue}</p>
    `;

    form.reset();
    extraField.classList.add("hidden");
});