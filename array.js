var marks = [
    ravi = 34,
    shubham = 78,
    harry = 99

]
for (let i = 0; i < marks.length; i++) {

    if (marks[i] >= 85) {
        console.log("Congragulation");

    } else if (marks[i] <= 84 && marks[i] >= 71) {
        console.log("A+");

    } else {
        console.log("fail")
    }


}
console.log(marks)