"use strict";

function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("Hello World"));
console.log(formatString("Hello World", true));
console.log(formatString("Hello World", false));
