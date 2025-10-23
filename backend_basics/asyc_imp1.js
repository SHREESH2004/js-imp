function createinvoice(callback) {
    setTimeout(() => {
        console.log("Creating invoice");
        const error=null;
        const chargeamount=500;
        callback(error, chargeamount);
    }, 2000);
}
function servingfood(callback) {
    setTimeout(() => {
        console.log("Serving food")
        const error=new Error("Food is not served");
        callback(error);
    }, 1000)
}
function checkinventory(callback) {
    setTimeout(() => {
        console.log("Serving food");
        callback();
    })
}
function main() {
    console.log("Other process running");
    checkinventory(() => {
        console.log("Inventory done")
        servingfood((error) => {
            if (error) {
                console.error(error.message);
            }
            createinvoice((err, chargeamount) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
                console.log("Invoice created");
                console.log(`Charge amount: ${chargeamount}`);
            });
        });
    });
}

main();
