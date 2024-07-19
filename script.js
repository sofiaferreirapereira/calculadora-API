
const baseURL = "http://localhost:3000/api";
const endpoint = "calculate";

async function apiCalcular(num1, num2, operation) {
    const resposta = await fetch(`${baseURL}/${endpoint}?num1=${num1}&num2=${num2}&operation=${operation}`,
        { method: 'GET' }
    );
    return await resposta.text();
}
async function somar(num1, num2) {
    return await apiCalcular(num1, num2, "add");
}
async function subtrair(num1, num2) {
    return await apiCalcular(num1, num2, "subtract");
}
async function multiplicar(num1, num2) {
    return await apiCalcular(num1, num2, "multiply");
}
async function dividir(num1, num2) {
    return await apiCalcular(num1, num2, "divide");
}
async function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const operacao = document.querySelector('input[name="operacao"]:checked')?.value;
    let resultado;

    console.log(num1);
    console.log(num2);
    switch (operacao) {
        case '+':
            resultado = await somar(num1, num2);
            break;
        case '-':
            resultado = await subtrair(num1, num2);
            break;
        case '*':
            resultado = await multiplicar(num1, num2);
            break;
        case '/':
            resultado = await dividir(num1, num2);
            break
        default:
            resultado = "Operação inválida!"
    }
    document.getElementById("resultado").innerText = "" + resultado;
}