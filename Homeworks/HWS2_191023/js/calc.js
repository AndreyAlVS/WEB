function calc() {
    let weight = document.getElementById("weight").value
    let age = document.getElementById("age").value
    let portion = ""

    if (weight <= 10 && age <= 1) {
        portion = "У вас точно собака? Удвойте порцию!"
    }
    else if (weight <= 10 && age >1) {
        portion = "Поздравляю, у вас хомяк! Дайте ему морковку."
    }
    else if (weight > 10 && age > 1) {
        portion = "Отличная собака, отличная порция!" 
    }
    else {
        portion = "Некорректный ввод" 
    }
    
    document.getElementById("portion").value = portion
}

