document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guess-form');
    const guessList = document.getElementById('guess-list');

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const lowPrice = parseFloat(document.getElementById('low-price').value);
        const highPrice = parseFloat(document.getElementById('high-price').value);

        if (isNaN(lowPrice) || isNaN(highPrice)) {
            alert('Please enter valid numbers for both low and high prices.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `Low: CAD ${lowPrice.toFixed(2)}, High: CAD ${highPrice.toFixed(2)}`;
        guessList.appendChild(listItem);

        guessForm.reset();
    });
});
