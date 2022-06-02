/*
Menor 17 = Muito abaixo do peso;
Entre 17 e 18,49 = Abaixo do peso;
Entre 18,5 e 24,99 = Peso normal;
Entre 25 e 29,99 = Acima do peso;

Formula = peso/(altura*altura)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = Math.round(peso / (altura * altura));

  if (imc < 17) {
    resultado = document.getElementById("resultado").className = "classe";
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc +
      "<br/> Significa que você está muito abaixo do peso";
  } else if (imc > 17 && imc <= 18.49) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "</br> Seu resultado foi: " +
      imc +
      "</br> Significa que você está um pouco abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "</br> Seu resultado foi: " +
      imc +
      "</br> Significa que o seu IMC está bom!!";
  } else if (imc >= 25 && imc <= 29.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "</br> Seu resultado foi: " +
      imc +
      "</br> Significa que você está um pouco acima do peso";
  } else if (imc > 30) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "</br> Seu resultado foi: " +
      imc +
      "</br> Cuidado, obesidade! Procure um profissional para melhor acompanhamento";
  }
}
