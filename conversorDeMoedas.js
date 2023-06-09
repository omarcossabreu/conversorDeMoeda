let namePerson = prompt("Fala DEV! Qual é o seu nome?");
let valor = prompt(
  "Então, " +
    namePerson +
    "!" +
    " Informe o valor em Dólar, Euro ou Bitcoin para ser convertido em Real"
);

let cotacaoDolar = 5.32;
let cotacaoEuro = 5.55;
let cotacaoBitcoin = 116887.7;

let valorEmRealDolar = valor * cotacaoDolar;
let valorEmRealEuro = valor * cotacaoEuro;
let valorEmRealBitcoin = valor * cotacaoBitcoin;

valorEmRealDolar = valorEmRealDolar.toFixed([2]);
valorEmRealEuro = valorEmRealEuro.toFixed([2]);
valorEmRealBitcoin = valorEmRealBitcoin.toFixed([2]);

alert(
  namePerson +
    " , o valor da sua cotação em Dólar (USD) é de R$ " + valorEmRealDolar 
    + " , em Euro (EUR) é de R$ " + valorEmRealEuro 
    + " , em Bitcoin (BTC) é de R$ " + valorEmRealBitcoin
);
