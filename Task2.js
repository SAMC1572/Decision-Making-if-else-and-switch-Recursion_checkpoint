// Function to determine ticket price based on age
function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
let userAge = 15;
console.log("Ticket price for age " + userAge + " is $" + ticketPrice(userAge));
