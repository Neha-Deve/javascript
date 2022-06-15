function calculator(num1 , num2, operator){
    let result = ""
    if(operator == "+"){
        result = "sum is "+ (num1 + num2 )
    }else if (operator == "-"){
        result = "sub is "+ (num1 - num2)
    }else if(operator == "/"){
        result = "div is "+ (num1 / num2 )
    }else if (operator == "*"){
        result = "mul is "+ (num1 * num2 )
    }else {
        result = "operator is invalid"
    }
    return result
}

console.log(calculator(1, 5, "/"))