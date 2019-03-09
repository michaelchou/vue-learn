"use strict"

function buyPack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("buy");
            } else {
                reject("stop");
            }
        }, Math.random() * 1000);
    });
}

buyPack().then(data => {
    console.log(data);
}, data => {
    console.log(data);
});
