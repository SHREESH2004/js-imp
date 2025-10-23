console.log("Start of the script");

setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise then callback");
});
console.log("End of the script");

// Explanation: 
// In this code, we have a simple script that demonstrates asynchronous behavior using setTimeout.
// When the script runs, it first logs "Start of the script" to the console.
// Then, it sets a timer using setTimeout to log "Inside setTimeout callback" after 0 milliseconds.

// However, due to the event loop in JavaScript, the callback function inside setTimeout is placed in the task queue.
// The main thread continues executing the remaining code, which logs "End of the script" to the console.
// Only after the main thread is free does the event loop pick up the callback from the task queue and execute it,
// resulting in "Inside setTimeout callback" being logged last, despite the 0 milliseconds delay.

// Output:
// Start of the script
// End of the script
// Inside setTimeout callback

//Event Loop:
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js APIs.
// It continuously checks the call stack and the task queue, executing tasks from the task queue when the call stack is empty.



// actaully there are 2 queues : microtask queue and macrotask queue
// Note: The Promise callback will execute before the setTimeout callback because Promises are part of the microtask queue,
// which has higher priority than the task queue used by setTimeout which is in macrotask queue. Therefore, the actual output will be:
// Start of the script
// End of the script
// Inside Promise then callback
// Inside setTimeout callback