function validateForm() {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const billType = document.getElementById('billType').value;
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Clear any previous error messages
    let errorMessages = document.querySelector('.error-message');
    if (errorMessages) {
        errorMessages.remove();
    }

    // Validate required fields
    if (!name || !email || !billType || !amount || !cardNumber || !expiryDate || !cvv) {
        displayError('All fields are required.');
        return false;
    }

    // Validate the amount is a positive number
    if (amount <= 0) {
        displayError('Amount should be a positive number.');
        return false;
    }

    // Validate the card number (simple validation for 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        displayError('Card number must be 16 digits.');
        return false;
    }

    // Validate CVV (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        displayError('CVV must be 3 digits.');
        return false;
    }

    // If all validations pass
    alert('Payment Successful!');
    return true;
}

// Function to display error messages
function displayError(message) {
    const form = document.getElementById('billPaymentForm');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    form.insertBefore(errorDiv, form.firstChild);
}
