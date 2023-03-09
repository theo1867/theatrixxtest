"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function sayHello() {
    console.log('hi');
}
exports.sayHello = sayHello;
function sayGoodbye() {
    console.log('goodbye');
}
exports.sayGoodbye = sayGoodbye;
/* Sets the specified interface to static configuration */
function setStatic(iface, conf) {
    return new Promise((resolve, reject) => {
        const file = fs.readFileSync('/etc/network/etc', 'utf8', (err, data) => {
            if (!err && data) {
                console.log('content in file:\n', file);
                resolve();
            }
            else {
                reject("File does not exist or is unreadable!");
            }
        });
    });
}
exports.setStatic = setStatic;
