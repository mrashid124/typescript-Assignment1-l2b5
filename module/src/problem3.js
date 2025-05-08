function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        for (var _b = 0, array_1 = array; _b < array_1.length; _b++) {
            var item = array_1[_b];
            result.push(item);
        }
    }
    return result;
}
var result1 = concatenateArrays(["a", "b"], ["c"]);
var result2 = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result1);
console.log(result2);
