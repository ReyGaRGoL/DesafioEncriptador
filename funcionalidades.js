document.getElementById("seccionLlena").style.display = "none";

function encriptar() {
    let area = document.getElementById("areaEntrada");

    if (area.value != "") {
        document.getElementById("seccionLlena").style.display = "flex";
        document.getElementById("seccionVacia").style.display = "none";

        let texto = area.value;
        let textoEncriptado = "";

        textoEncriptado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");

        document.getElementById("areaSalida").value = textoEncriptado;

        document.getElementById("areaEntrada").value = "";

    } else {

        document.getElementById("seccionVacia").style.display = "flex";
        document.getElementById("seccionLlena").style.display = "none";
    }
}


function desencriptar() {
    let area = document.getElementById("areaEntrada");

    if (area.value != "") {
        document.getElementById("seccionLlena").style.display = "flex";
        document.getElementById("seccionVacia").style.display = "none";

        let texto = area.value;
        let textoDesencriptado = "";

        textoDesencriptado = texto.replace(/ufat/gi, "u").replace(/ober/gi, "o").replace(/imes/gi, "i").replace(/enter/gi, "e").replace(/ai/gi, "a");

        document.getElementById("areaSalida").value = textoDesencriptado;
        document.getElementById("areaEntrada").value = "";


    } else {

        document.getElementById("seccionVacia").style.display = "flex";
        document.getElementById("seccionLlena").style.display = "none";
    }
}


function copiar() {
    const input = document.getElementById("areaSalida");
    input.focus();
    input.select();
    let texto = document.getElementById("areaSalida").value;
    navigator.clipboard.writeText(texto);

}