
const textAreaIngreso = document.querySelector('.ingreso-datos');

const botonEncriptar = document.querySelector('.encriptar');
const botonDesencriptar = document.querySelector('.desencriptar');

const divResultado = document.querySelector('.resultado');
const divSinResultado = document.querySelector('.div-sin-resultado-estilo');

/* ENCRIPTAR */
botonEncriptar.addEventListener("click", () => {

    mostrarResultado();

    const textAreaResultado = document.querySelector('.muestra-resultado');

    let frase = textAreaIngreso.value
    let fraseEncriptada = ""

    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case "a":
                fraseEncriptada += "ai"
                break;
            case "e":
                fraseEncriptada += "enter"
                break;
            case "i":
                fraseEncriptada += "imes"
                break;
            case "o":
                fraseEncriptada += "ober"
                break;
            case "u":
                fraseEncriptada += "ufat"
                break;
            default:
                fraseEncriptada += frase[i]
                break;
        }
    }

    textAreaResultado.innerText = fraseEncriptada;

    const botonCopiar = document.querySelector('.copiar');

    botonCopiar.addEventListener("click", () => {

        textAreaResultado.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});

/* DESENCRIPTAR */
botonDesencriptar.addEventListener("click", () => {

    mostrarResultado();

    const textAreaResultado = document.querySelector('.muestra-resultado');    
    
    let fraseDesencriptada = textAreaIngreso.value

    fraseDesencriptada = fraseDesencriptada.replace(/ai/g, "a");
    fraseDesencriptada = fraseDesencriptada.replace(/enter/g, "e");
    fraseDesencriptada = fraseDesencriptada.replace(/imes/g, "i");
    fraseDesencriptada = fraseDesencriptada.replace(/ober/g, "o");
    fraseDesencriptada = fraseDesencriptada.replace(/ufat/g, "u");

    textAreaResultado.innerText = fraseDesencriptada;

    const botonCopiar = document.querySelector('.copiar');

    botonCopiar.addEventListener("click", () => {

        textAreaResultado.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});

function mostrarResultado() {
    
    divResultado.innerHTML = `
        <div class="div-con-resultado-estilo">
            <textarea name="muestra-resultado" class="muestra-resultado"></textarea>
            <button class="boton copiar">Copiar</button>
        </div>
    `;
};