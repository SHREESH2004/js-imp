function createinvoice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating invoice");
            const error = null;
            const chargeamount = 500;
            resolve(chargeamount);
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
            //const error = new Error("Food is not served");
            //reject(error);
            resolve();
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
async function main() {
    console.log("Other process running");
    await checkinventory();
    await createfood();
    const invoiceAmount = await createinvoice();
    console.log("Invoice created with amount:", invoiceAmount);
    await servingfood();

}

main();
