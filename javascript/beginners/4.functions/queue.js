// Enqueue function: Adds an element to the end of the queue
function enqueue(queue, element) {
    queue.push(element);
}

// Dequeue function: Removes and returns the element at the front of the queue
function dequeue(queue) {
    if (isEmpty(queue)) {
        return "Queue is empty";
    }
    return queue.shift();
}

// Peek function: Returns the element at the front of the queue without removing it
function peek(queue) {
    if (isEmpty(queue)) {
        return "Queue is empty";
    }
    return queue[0];
}

// IsEmpty function: Checks if the queue is empty
function isEmpty(queue) {
    return queue.length === 0;
}

// Size function: Returns the number of elements in the queue
function size(queue) {
    return queue.length;
}

// PrintQueue function: Returns a string representation of the queue
function printQueue(queue) {
    return 'Elements in Queue are: ' + queue.toString();
}

// Example usage
let myQueue = [];

console.log(`Is Queue empty?: ${isEmpty(myQueue)}`);

console.log('Add 10, 20 and 30 to the Queue')
enqueue(myQueue, 10);
enqueue(myQueue, 20);
enqueue(myQueue, 30);

console.log(printQueue(myQueue));

console.log(`Removing one element from the Queue ${dequeue(myQueue)}`);
console.log(`Top element of the Queue: ${peek(myQueue)}`);

console.log(`Size of the Queue: ${size(myQueue)}`);
console.log(`Is Queue empty?: ${isEmpty(myQueue)}`);

console.log(printQueue(myQueue));
