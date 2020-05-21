const form = document.getElementById('formulario');
let phone = document.getElementById('phone');
// var msg = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    // limpa valor anterior
    $('#link').empty()
    
    // imprimi o valor na tela

    $('#link').append(`<span>https://api.whatsapp.com/send?phone=5511${phone.value}&text=</span>`)

    // impede o envio do form
    e.preventDefault();
});