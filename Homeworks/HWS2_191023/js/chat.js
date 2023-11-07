// function askName() {

//    let name = document.getElementById("name").value

//    if (name == '') {
//     document.getElementById("error").innerText = 'Ошибка. Введите имя'
//     return
//    } 

//     str = `Привет, ${name}!`

//     document.getElementById("result").innerText = str
//     document.getElementById("name").value = ''
//     document.getElementById("error").innerText = ''
// }

get()
setInterval(get, 2000)

function send() {
    const message = document.getElementById('message').value;
        (async () => {
                var response = await fetch('chat.php?message=' + message);
                var answer = await response.text();
                document.getElementById('message').value = '';
            }
        )();
}
function get() {
    (async () => {
        var response = await fetch('chat.php');
        var answer = await response.text();
        document.getElementById('messages').innerText = answer;
    }
    )();
}
