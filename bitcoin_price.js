document.addEventListener('DOMContentLoaded', function() {
    const bitcoinPriceElement = document.getElementById('bitcoin-price');

    function fetchBitcoinPrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const bitcoinPrice = data.bitcoin.usd;
                bitcoinPriceElement.textContent = `$${bitcoinPrice}`;
            })
            .catch(error => {
                console.error('Error fetching Bitcoin price:', error);
                bitcoinPriceElement.textContent = 'Price Unavailable';
            });
    }

    // Fetch Bitcoin price initially
    fetchBitcoinPrice();

    // Fetch Bitcoin price every 10 seconds
    setInterval(fetchBitcoinPrice, 10000);
});
