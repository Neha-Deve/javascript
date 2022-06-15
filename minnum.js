var arr = [12, 45, 65, 34, 66, 08, 4, 6, 67, 23, 12];
var min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    
}
console.log(min)