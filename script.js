let campo = document.querySelector('#campo');
let text = document.querySelector('#text');
let formulario = document.querySelector('#formulario');
let copy = document.querySelector('#copy');
let newLink = document.querySelector('a');
let generate = document.querySelector('#generate');
let result = document.getElementById('result');

const linkApi = "https://api.whatsapp.com/send?phone=";

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // it is necessary to send the form
  
  if(campo.value.length > 0 && text.value.length > 0) {
    result.innerHTML = `${linkApi}55${campo.value}&text=${text.value}`;
    campo.style.display = 'none'; // disable campo
    text.style.display = 'none'; // disable text
    generate.style.display = 'none'; // disable generate
    result.style.display = 'flex'; // enable result
    copy.style.display = 'flex' // enable copy
    newLink.style.display = 'flex' // enabled newLink


  } else {
    alert('Por favor digite as informações');
  }
  
  // clear fields
  campo.value = '';
  text.value = '';
});


// clipboard
copy.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  result = result.innerText;

  if(!result) {return;}

  textarea.value = result;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Link copiado!');

});