/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateExecutionTime(n) {
    const startTime = new Date().getTime();

    const sum = calculateSum(n);

    const endTime = new Date().getTime();
    const timeElapsed = (endTime - startTime) / 1000; 

    console.log(`Total sum from 1 to ${n}: ${sum}`);  // Log the sum
    console.log(`Time to calculate: ${timeElapsed} seconds`);

    return timeElapsed; // You can still return the time if needed
}

function calculateSum(n) {
    return n * (n + 1) / 2;
}

// Test cases
const testValues = [100, 100000, 1000000000]; 

for (const n of testValues) {
    calculateExecutionTime(n); 
}
