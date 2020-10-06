let campo = document.querySelector('#campo');
let textarea = document.querySelector('#textarea');
let formulario = document.querySelector('#formulario');

const linkApi = "https://api.whatsapp.com/send?phone=";

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // it is necessary to send the form
  
  if(campo.value.length > 0 && textarea.value.length > 0) {
  	document.querySelector('#result').innerHTML = `${linkApi}55${campo.value}&text=${textarea.value}`;
  } else {
    alert('Por favor digite as informações');
  }
  
  // clear fields
  campo.value = '';
  textarea.value = '';
});
