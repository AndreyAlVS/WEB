function askName() {

   let name = document.getElementById("name").value

   if (name == '') {
    document.getElementById("error").innerText = 'Ошибка. Введите имя'
    return
   } 

    str = `Привет, ${name}!`

    document.getElementById("result").innerText = str
    document.getElementById("name").value = ''
    document.getElementById("error").innerText = ''
}

