var x = prompt();
var value = parseInt(x);
var sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
if(sum % 2 == 0) {
    console.log("Even");
}
else {
	console.log("Odd");
}
