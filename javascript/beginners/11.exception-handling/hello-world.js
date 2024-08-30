function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both arguments must be numbers');
        }

        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }

        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.log(`An error occurred: ${error.message}`);
    } finally {
        console.log('Execution completed.');
    }
}

// Test cases
divideNumbers(10, 2);   // Should print: Result: 5, Execution completed.
divideNumbers(10, 0);   // Should print: An error occurred: Division by zero is not allowed, Execution completed.
divideNumbers(10, 'a'); // Should print: An error occurred: Both arguments must be numbers, Execution completed.
