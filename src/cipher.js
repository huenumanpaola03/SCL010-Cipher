window.cipher = {
  encode: (textMessage, numClave) => {
    /* Acá va tu código */
    /*largo del mensaje */
     let Resultado="";
      for (let i = 0; i < textMessage.length ; i++) { 
        //console.log(textMessage.length);
        
        let formula = textMessage.charCodeAt(i)
        //mayusculas
        if (formula >= 65 && formula <= 90) {
          Resultado +=String.fromCharCode((formula - 65 + parseInt(numClave)) % 26 + 65)
        }
        //minusculas
        if (formula >= 97 && formula <=122){
          Resultado +=String.fromCharCode((formula - 97 + parseInt(numClave)) % 26 + 97)
        }
        //espacios
        if (formula==32 ){
          Resultado +=String.fromCharCode((formula-32 + numClave)%1 +32)
        }
        //numeros
        if(formula >= 48 && formula <=57){
          Resultado +=String.fromCharCode(((formula - 48 +parseInt(numClave)+20)%10)+48)
        }
        //textMessage+= Resultado
       // console.log(textMessage+" "+Resultado)
      }
      return Resultado
    },
   
   decode: (textMessage, numClave) => {
    let Resultado="";
      
      for (let i = 0; i < textMessage.length; i++) { 
        
      let formula = textMessage.charCodeAt(i);

        if (formula >= 65 && formula <= 90) {
          Resultado += String.fromCharCode((formula - 90 - parseInt(numClave)) % 26 + 90);
        }
        if (formula >= 97 && formula <= 122){
          Resultado += String.fromCharCode((formula - 122 - parseInt(numClave)) % 26 + 122);
        }
        if (formula==32) {
          Resultado=String.fromCharCode((formula-32 + numClave)%1 +32)
        }
        if(formula >= 48 &&formula <=57){
          Resultado += String.fromcharcode(((formula - 48 +parseInt(numClave) + 20) % 10 )+48) 
        }
       // textMessage+= Resultado;
    }
    return Resultado;

  }
  
 
  }

  