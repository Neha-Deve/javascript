var arr = [1,23,43,65,23,1,2,3,4,5,7,8,9,567,09];
max = arr[0];
for(i = 0; i< arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max)