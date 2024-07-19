const express = require('express');
const app = express();
const port = 3000;

app.get('/api/calculate', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operacao = req.query.operation;

    if(isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Num1 e num2 devem ser números válidos.")
    }

    let result;
    switch(operacao) {
        case 'add': 
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply': 
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).send('Não é possível dividir por zero.');
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).send('Operação inválida. Tente adicionar, subtrair, multiplicar ou dividir.');
    }
    res.send(`${result}`);
});

app.listen(port, () => {
    console.log(`A API da calculadora está em execução `)
});