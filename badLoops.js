function findMaxValue(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i]; }
    }
    console.log("Max value is: " + max);

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (j !== k && arr[j] === arr[k]) {
                console.log("Duplicate found: " + arr[j])
            }
        }
    }
    return max;
}

var values = [5, 3, 9, 1, 3, 7];
var maxValue = findMaxValue(values);
