
function askName() {
    //Ввод данных
   // let name = prompt("Введите имя", "Имя")
   let name = document.getElementById("name").value

   //валидация данных
   if (name == '') {
    document.getElementById("error").innerText = 'Ошибка. Введите имя'
    return
   } 


    //Обработка данных
    str = `Привет ${name}`

    //Вывод данных
   // alert(str)
    document.getElementById("result").innerText = str
    document.getElementById("name").value = ''
    document.getElementById("error").innerText = ''
}

