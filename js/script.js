const hiringRadioButtonID = 'hiring';
const hideClass = 'remove';
const allRadioButtons = document.querySelectorAll('input[type="radio"]');
const hourlyRateInputBlock = document.querySelector('.hourly-rate-components');
const hourlyRateInput = hourlyRateInputBlock.querySelector('input');

// If the hiring button is already selected
let hiringRadioButton = document.getElementById('hiring');
if (hiringRadioButton.checked) {
    // Unhide hourly rate input and make it required
    hourlyRateInputBlock.classList.remove(hideClass);
    hourlyRateInput.setAttribute('required', '');
}

// For each radio button
for (let i = 0; i < allRadioButtons.length; i++) {
    let radioButton = allRadioButtons[i];
    // Add an event listener if the radio button was clicked
    radioButton.addEventListener('click', function () {
        // If the current button was clicked and it's the hiring button
        if (this.checked && this.id === hiringRadioButtonID) {
            // Remove the hide class and set the required attribute as true
            hourlyRateInputBlock.classList.remove(hideClass);
            hourlyRateInput.setAttribute('required', '');
        } else {
            // Add the hide class and remove the required attribute
            hourlyRateInputBlock.classList.add(hideClass);
            hourlyRateInput.removeAttribute('required');
        }
    });
}