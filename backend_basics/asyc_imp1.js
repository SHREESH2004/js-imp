function createinvoice(callback) {
    setTimeout(() => {
        console.log("Creating invoice");
        callback();
    }, 2000);
}
function servingfood(callback) {
    setTimeout(() => {
        console.log("Serving food")
        callback();
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
        servingfood(() => {
            createinvoice(() => {
                servingfood(() => {
                    console.log("Food is served");
                });
            });
        });
    });
}

main();
