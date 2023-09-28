const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function validarTexto() {
    const textoEscrito = textArea.value.toLowerCase();
    if (!/^[a-z]*$/.test(textoEscrito)) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function encriptar(stringEncriptada) {
    return matrizCodigo.reduce((result, [from, to]) => result.replaceAll(from, to), stringEncriptada.toLowerCase());
}

function desencriptar(stringDesencriptada) {
    return matrizCodigo.reduce((result, [from, to]) => result.replaceAll(to, from), stringDesencriptada.toLowerCase());
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}