export default function linear_search(numbers: number[], target: number): boolean {
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] === target) {
            return true;
        }
    }
    return false;
}

// Example usage:
const numbersArray = [4, 7, 2, 8, 3];
const targetNumber = 8;
console.log(linear_search(numbersArray, targetNumber)); // Output: true
