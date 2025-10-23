function createinvoice(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating invoice");
            const error = null;
            const chargeamount = 500;
            resolve({ error, chargeamount });
        }, 2000);
    });
}
function createfood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating food");
            resolve();
        }, 1000);
    });
}
function servingfood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Serving food");
            const error = new Error("Food is not served");
            reject(error);
        }, 1000);
    });
}
function checkinventory() {

    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Check inventory");
            resolve();
        }, 1000);
    });
}
function main() {
    console.log("Other process running");
    checkinventory()
    .then(createfood)
    .then(servingfood)
    .then(createinvoice)
    .then((result) => {
        if (result.error) {
            console.log("Error in creating invoice:", result.error);
        } else {
            console.log("Invoice created with amount:", result.chargeamount);
        }
    }).catch((err)=>{
        console.log("Error occurred:", err.message);
    });

}

main();
