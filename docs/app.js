var llaves = [["enter","e"],
              ["imes","i"],
              ["ai","a"],
              ["ober","o"],
              ["ufat","u"]
];


function encriptar(input){
    input = input.toLowerCase();

    for(var i = 0; i<llaves.length; i++){
        if(input.includes(llaves[i][1])){
            input = input.replaceAll(llaves[i][1],llaves[i][0]);
        }  
    }

    return input;
}

function desencriptar(input){
    input = input.toLowerCase();
    for(var i =0; i<llaves.length; i++){
        if(input.includes(llaves[i][0])){
            input = input.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return input;
}

function muestraTexto(mensaje){
    var resolucion= window.outerWidth;
    
    if(resolucion>=1024){
        //desktop
        var deshabilitaImage = document.querySelector(".image__content");
        var deshabilitaNotFound = document.querySelector(".message__output--notfound");
        var deshabilitaOutputText = document.querySelector(".message__output--text");
        var habilitaMsgDesencriptar = document.querySelector(".messagedesencriptar");
        var habilitaMsgDesencriptarTxt = document.querySelector(".messagedesencriptar__text");
        var habilitaBtnCopy = document.querySelector(".button__copy");

        
        deshabilitaImage.style.display="none";
        deshabilitaNotFound.style.display="none";
        deshabilitaOutputText.style.display="none";

        habilitaMsgDesencriptar.style.display="block";
        habilitaBtnCopy.style.display="block";

        habilitaMsgDesencriptarTxt.innerHTML=mensaje;



    }else if(resolucion>=768 && resolucion <1024){
        //tablet
        var deshabilitaImage = document.querySelector(".image__content");
        var deshabilitaNotFound = document.querySelector(".message__output--notfound");
        var deshabilitaOutputText = document.querySelector(".message__output--text");
        var habilitaMsgDesencriptar = document.querySelector(".messagedesencriptar");
        var habilitaMsgDesencriptarTxt = document.querySelector(".messagedesencriptar__text");
        var habilitaBtnCopy = document.querySelector(".button__copy");

        
        deshabilitaImage.style.display="none";
        deshabilitaNotFound.style.display="none";
        deshabilitaOutputText.style.display="none";

        habilitaMsgDesencriptar.style.display="block";
        habilitaBtnCopy.style.display="block";

        habilitaMsgDesencriptarTxt.innerHTML=mensaje;

    }else{

        var deshabilitaImage = document.querySelector(".image__content");
        var deshabilitaNotFound = document.querySelector(".message__output--notfound");
        var deshabilitaOutputText = document.querySelector(".message__output--text");
        var habilitaMsgDesencriptar = document.querySelector(".messagedesencriptar");
        var habilitaMsgDesencriptarTxt = document.querySelector(".messagedesencriptar__text");
        var habilitaBtnCopy = document.querySelector(".button__copy");
        var mensajeRight = document.querySelector(".messageright");
        
        deshabilitaImage.style.display="none";
        deshabilitaNotFound.style.display="none";
        deshabilitaOutputText.style.display="none";

        habilitaMsgDesencriptar.style.display="block";
        habilitaBtnCopy.style.display="block";

        habilitaMsgDesencriptarTxt.innerHTML=mensaje;

    }


}


function btnEncriptar(){
    
    var mensaje = document.querySelector(".message__container--input");

    if(isNaN(mensaje.value) != true){
        alert("Debes ingresar texto, no se permiten números");
        location.reload();
    }else{
        muestraTexto(encriptar(mensaje.value));
        /* mensaje.value=""; */
    }
     

}

function btnDesencriptado(){
    
    var mensaje = document.querySelector(".message__container--input");

    if(isNaN(mensaje.value) != true){
        alert("Debes ingresar texto, no se permiten números");
        location.reload();
    }else{
        muestraTexto(desencriptar(mensaje.value));
        /* mensaje.value=""; */
    }
     

}

function btncopy(){

     var portapapeles = document.createElement('input');
    portapapeles.className = '.message__output--copy';
    portapapeles.setAttribute("value", document.querySelector(".messagedesencriptar__text").innerHTML);

    var elementoPadre = document.querySelector('.message__output');
    elementoPadre.appendChild(portapapeles);

    

    portapapeles.select();
    document.execCommand("copy");
    portapapeles.style.display='none';



    //Forma 1 de copiar --> innher sirve para recuperar la información de una tag
    //portapapeles.value = document.querySelector(".messagedesencriptar__text").innerHTML;

    //forma 2 de copiar --> es para los elementos que se crean 
    //const texto = document.createTextNode("Hola");
    //portapapeles.appendChild(texto);
}




var messageEncriptado = document.querySelector(".button__encriptar");
messageEncriptado.onclick = btnEncriptar;

var mensajeDesencriptado = document.querySelector(".button__desencriptar");
mensajeDesencriptado.onclick = btnDesencriptado;


var seleccionaste = document.querySelector(".button__copy");
seleccionaste.onclick = btncopy;

