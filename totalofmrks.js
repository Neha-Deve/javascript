var users = [
    {
        name: "sunil",
        maths: 50,
        science: 38,
        english: 99

    },
    {
        name: "shiv",
        maths: 93,
        science: 97,
        english: 95

    },
    {
        name: "kapi",
        maths: 34,
        science: 45,
        english: 39

    }
]
for (let i = 0; i < users.length; i++) {

    var total = users[i].maths + users[i].science + users[i].english;
    console.log(i)
    console.log(users[i])
    if (users[i].maths <= 35 || users[i].science <= 35 || users[i].english <= 35) {
        console.log(users[i].name + " = fail in "+ failedIn(users[i])  +"  ,your total score is " + total)
    }
    else if (total >= 280) {
        console.log(users[i].name + " = A+ , Your total score is " + total)
    } else if (total >= 110) {
        console.log(users[i].name + " = pass , Your total score is " + total)
    }
    else {
        console.log(users[i].name + " =  Your score is " + total)
    }
    

}

function failedIn(obj){
    let failedsub = "";
    if(obj.maths<=35 ){
        failedsub="maths"
    }else if(obj.science <=35){
        failedsub="science"
    }else if(obj.english <= 35){
        failedsub="english"
    }
    return failedsub;
}




