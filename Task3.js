// Function to advise on clothing based on temperature and rain
function clothingAdviser(temperature, isRaining) {
    if (temperature < 15) {
        return "It's cold. Wear a warm jacket and an umbrella if it's raining.";
    } else if (temperature >= 15 && temperature <= 25) {
        if (isRaining) {
            return "It's moderate. Wear a light jacket and carry an umbrella.";
        } else {
            return "It's moderate. Wear comfortable clothing.";
        }
    } else {
        if (isRaining) {
            return "It's warm. Carry an umbrella.";
        } else {
            return "It's warm. Wear light clothing.";
        }
    }
}

// Example usage:
let currentTemperature = 20;
let isRaining = true;
console.log(clothingAdviser(currentTemperature, isRaining));
