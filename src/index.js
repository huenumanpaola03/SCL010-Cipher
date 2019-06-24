const textResultado = document.getElementById('resultado');
const btnCifrar = document.getElementById('cifrar');
const btnDecifrar = document.getElementById('decifrar');
  /*la aplicacion al escuchar el boton cifrar leera el mensaje 
  en el primer recuadro y su clave respectiva luego dara su resultato en el recuadro 2 */
  btnCifrar.addEventListener('click',() => {
    let textMessage = document.getElementById('message').value;
    let numClave = document.getElementById('offset').value;
    console.log(textMessage+" CLAVE: "+numClave);
    textResultado.innerHTML = window.cipher.encode(textMessage, numClave);
  }) 
  
 /*  btnCifrar.addEventListener('click', () => {
    //alert("HOLA MONKEY!!! TE CIFRO");
    let textMessage = document.getElementById('message').value;
    let numClave = document.getElementById('offset').value;
    console.log("CLAVE CIFRADO "+numClave);
    textResultado.innerHTML = window.cipher.encode(textMessage, numClave);
  }) */


  btnDecifrar.addEventListener("click", () => {
    let textMessage = document.getElementById('message').value;
    let numClave = document.getElementById("offset").value;
    textResultado.innerHTML = window.cipher.decode(textMessage, numClave);
    
  })
    /*el boton limpiar eliminara todo texto aplicado por el usuario*/
let botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.addEventListener("click",()=> {
    document.getElementById("offset").value = "";  
    document.getElementById("message").value = "";  
    document.getElementById("resultado").value = "";   
}) ;



