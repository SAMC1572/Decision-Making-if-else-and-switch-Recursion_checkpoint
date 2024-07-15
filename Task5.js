// Recursive function to check if a string is palindrome
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^\w]|_/g, "").toLowerCase();
    
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

// Example usage:
let testString = "A man, a plan, a canal, Panama!";
console.log('"' + testString + '" is a palindrome: ' + isPalindrome(testString));
