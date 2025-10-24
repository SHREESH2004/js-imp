const createImageBitmap = (callback) => {
    console.log("Image bitmap created");
    const err = null;

    // Define assertions as an arrow function
    const assertions = (assert) => {
        console.log("Image bitmap callback executed", assert);
        return assert;
    };

    // Pass the function itself to the callback
    callback(err, assertions);
};

const main = () => {
    createImageBitmap((err, assertions) => {
        if (err) {
            console.error("Error creating image bitmap:", err);
        } else {
            // Call the assertions arrow function to get the value
            const val=prompt("Enter bitmap pexels");
            const value = assertions(val);
            console.log("Image bitmap created successfully", value);
        }
    });
};

main();
