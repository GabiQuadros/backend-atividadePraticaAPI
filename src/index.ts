import express from "express";
import axios from "axios";

const app = express();

app.listen(3333, () => {
  console.log("API está rodando...");
});

app.get("/", (req, res) => {
  res.send({
    MSG: "Atividade",
  });
});

//ATIVIDADE 1
console.log("ATIVIDADE 1");

export async function getUserFromGithub(user: string) {
  try {
    const result = await axios.get(`https://api.github.com/users/${user}`);
    console.log(result.data);
  } catch (error: any) {
    console.log("Usuário não existe " + error);
  }
}
getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

export async function getRepositories(repo: string) {
  try {
    const result = await axios.get(`https://api.github.com/repos/${repo}`);
    console.log(result.data);
  } catch (error: any) {
    console.log("Repositório não existe" + error);
  }
}
getRepositories("marcelo-growdev/scrapbook-es6");
getRepositories("marcelo-growdev/qdbqqbqwn");

//ATIVIDADE 2
console.log("ATIVIDADE 2");
// a. Ao chamar a seguinte rota …/calculadora?operacao=somar&valorA=7&valorB=13 deverá retornar o valor 20.

// b. Ao chamar a seguinte rota …/calculadora?operacao=subtrair&valorA=30&valorB=13 deverá retornar o valor 17.

// c. Ao chamar a seguinte rota …/calculadora?operacao=multiplicar&valorA=8&valorB=8 deverá retornar o valor 64.

// d. Ao chamar a seguinte rota …/calculadora?operacao=dividir&valorA=120&valorB=10 deverá retornar o valor 12.

app.get("/calculadora", (req, res) => {
  const operacao = req.query.operacao;

  const valorA: number = Number(req.query.valorA);

  const valorB: number = Number(req.query.valorB);

  let resultado: number = 0;

  if (operacao === "somar") {
    resultado = valorA + valorB;
    return res.send({ valor: resultado });
  }

  if (operacao === "subtrair") {
    resultado = valorA - valorB;
    return res.send({ valor: resultado });
  }
  if (operacao === "multiplicar") {
    resultado = valorA * valorB;
    return res.send({ valor: resultado });
  }

  if (operacao === "dividir") {
    resultado = valorA / valorB;
    return res.send({ valor: resultado });
  }
});

//ATIVIDADE 3
console.log("ATIVIDADE 3");

let contador: number = 0;

app.get("/contagem", (req, res) => {
  if (contador < 10) {
    contador++;

    return res.send({ contador: contador });
  } else {
    contador = 0;
    return res.send({
      message: "Chegou à 10",
    });
  }
});

//ATIVIDADE 4
console.log("ATIVIDADE 4");

app.get("/numeral", (req, res) => {
  const numero = Number(req.query.numero);
  const operacao = req.query.operacao;

  if (operacao === "anterior") {
    let resultado = numero - 1;
    return res.send({
      Operação: operacao,
      Numero: numero,
      Resultado: resultado,
    });
  } else if (operacao === "proximo") {
    let resultado = numero + 1;
    return res.send({
      Operação: operacao,
      numero: numero,
      resultado: resultado,
    });
  } else {
    return res.send({
      Message: "Erro: Escolha entre anterior ou proximo",
    });
  }
});

//ATIVIDADE 5
console.log("ATIVIDADE 5");

app.get("/inverter-string", (req, res) => {
  const valor = req.query.valor;

  if (valor) {
    let retornado = valor?.toString().split("").reverse().join("");

    return res.send({
      valor: valor,
      retorno: retornado,
    });
  }
});

//ATIVIDADE 6
console.log("ATIVIDADE 6");

app.get("/remover-vogais", (req, res) => {
  const valor = req.query.valor?.toString();

  let array: string[] = [];

  if (valor) {
    let consoantes = valor!.replace(/[aeiouà-ú]/gi, "");
    array.push(consoantes);
    res.send({
      valor: valor,
      lista: array,
    });
  }
});
