
function hello() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = false;  // this value will be assigned by server
            if (error) {
                console.log("Your program cant run");
                reject("Data doesnt load");
            }
            else {
                console.log("Your program ran successfully");
                resolve();
            }
        }, 2000);
    })
}

hello().then(function () {
    console.log("Success");
}).catch(function (e) {
    console.log("The error is : " + e);
})