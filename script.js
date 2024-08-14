// Función para encriptar el texto
function encrypt(text) {
    const rules = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => rules[match]);
}

// Función para desencriptar el texto
function decrypt(text) {
    const rules = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}

// Referencias a los elementos del DOM
const inputTextArea = document.getElementById('input-text');
const outputTextArea = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Evento para encriptar el texto
encryptBtn.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    const encryptedText = encrypt(inputText);

    outputTextArea.value = encryptedText;
});

// Evento para desencriptar el texto
decryptBtn.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    const decryptedText = decrypt(inputText);
    outputTextArea.value = decryptedText;
});

// Evento para copiar el texto al portapapeles
copyBtn.addEventListener('click', () => {
    outputTextArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
