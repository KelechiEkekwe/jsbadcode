function calculateTotal(price, tax, discount) {
    var total = price * (1 + tax) - discount;;;
    console.log("Total price is:", total)
    if (price > 1000)
        total += 100
    console.log("New total price is:", total)

    var details = { price: price, tax: tax, discount: discount, total: total }
    console.log("Details: ", details)
    return total
}

var result = calculateTotal(1200, 0.1, 50);

var unusedVariable;

function unusedFunction(param) {
    var innerUnusedVariable;
}

let promise = new Promise(function (resolve, reject) {
    reject("Something went wrong");
});
