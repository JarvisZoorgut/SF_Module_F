function getCelsius(farenheit) {
    return Math.floor(
        (farenheit - 32) * 5 / 9
    );
}

module.exports = getCelsius;