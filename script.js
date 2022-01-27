/* Como bloquear caracteres especiais:
**Requisitos:**
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
link: https://www.horadecodar.com.br/2020/12/04/bloquear-caracteres-especiais-em-input-com-javascript/
*/
const inputTexto = document.querySelector(".main");
inputTexto.addEventListener("keypress", function(event) {
    checkChar(event);

    if (!checkChar(event)) {
        event.preventDefault();
    }
})
function checkChar(event) {
    const char = String.fromCharCode(event.keyCode);
    console.log(char);
    const pattern = "[a-z ]";

    if (char.match(pattern)) {
        return true;
    }
}
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
    console.log("clickCripto");

    let inputTexto = document.querySelector("#input-texto").value;
    let textoCripto = inputTexto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
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
let btnDescripto = document.querySelector("#btn-descripto");
btnDescripto.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("clickDescripto");

    let inputTexto = document.querySelector("#input-texto").value;
    let textoCripto = inputTexto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let textoFinal = document.querySelector("#msg");
    textoFinal.value = textoCripto;
})
/* Extra - Botão para copiar
Vamos deixar um link para a documentação do MDN sobre como copiar, recortar e colar dados para a área de transferência usando JavaScript. Está em inglês, mas você pode usar o recurso do navegador para traduzir a página.
link: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
*/
let btnCopy = document.querySelector("#btn-copy");
btnCopy.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("clickCopy");

    let inputTexto = document.querySelector("#msg");
    inputTexto.select();
    inputTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputTexto.value);
    inputTexto.value="";
    document.querySelector("#input-texto").value = "";
    alert("texto copiado com sucesso!");
})