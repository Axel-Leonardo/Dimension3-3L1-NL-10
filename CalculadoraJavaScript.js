function calcular() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;

    let resultado;

    if (operacion == "suma") {

        resultado = num1 + num2;

    } else if (operacion == "resta") {

        resultado = num1 - num2;

    } else if (operacion == "multiplicacion") {

        resultado = num1 * num2;

    } else if (operacion == "division") {

        if (num2 == 0) {
            resultado = "No se puede dividir entre 0";
        } else {
            resultado = num1 / num2;
        }

    } else if (operacion == "cuadrado") {

        resultado = num1 * num1;

    } else {

        resultado = "Operación no válida";

    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}