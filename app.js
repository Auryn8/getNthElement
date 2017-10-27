function getNthElement(array, n) {
for (i = 0; i < array.length; i++ ) {
if ( array[i] == n) {
return array[n];
}
}
return undefined
}
var output = getNthElement([1, 3, 5], 1);
console.log(output);
