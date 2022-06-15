var arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
var arr2 = [9, 2, 42, 55, 71, 22, 45, 90, 25, 26]
var result1 = 0;
var result2 = 0;

for (let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
}
console.log(result1)
for (let i = 0; i < arr2.length; i++){
    result2 += arr2[i];
}
//sum = arr1[i]+arr2[i];
sum = result1 + result2;
console.log(result2)
console.log("sum of both arrays " + sum)