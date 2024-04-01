function prime(number) {
    if (number <= 1) return false;
    if (number<= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let x = 5;
    while (x * x <= number) {
        if (num % x === 0 || number % (x + 2) === 0) return false;
        x += 6;
    }
    return true;
}

// Function to filter Prime numbers from an array
function Primes(array) {
    return array.filter(prime);
}

// Test the function 
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = Primes(Array);
console.log(primeNumbers); // Output: [2, 3, 5, 7]