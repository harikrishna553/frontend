class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

function validateUserInput(input) {
    if (input.length < 5) {
        throw new ValidationError("Input must be at least 5 characters long.");
    }
    console.log("Input is valid.");
}

try {
    validateUserInput("abc"); // This will throw a ValidationError
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation Error: ${error.message}`);
    } else {
        console.log(`General Error: ${error.message}`);
    }
}
