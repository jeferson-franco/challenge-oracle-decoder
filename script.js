
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
let btnCripto = document.querySelector("#btn-cripto");
btnCripto.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click");

    let inputTexto = document.querySelector("#input-texto").value;
    let textoCripto = inputTexto.replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let textoFinal = document.querySelector("#msg");
    textoFinal.value = textoCripto;
})
/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/