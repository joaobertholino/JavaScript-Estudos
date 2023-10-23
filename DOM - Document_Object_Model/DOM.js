// Selecionar elementos
const métodoAntigo = document.getElementById("meuId"); // Método antigo
console.log(métodoAntigo);

const métodoModerno = document.querySelector("#meuId"); // Método moderno
console.log(métodoModerno);

//Manipular conteúdo de texto
const element = document.getElementById("meuId");
console.log(element.textContent); // Imprime no console o conteúdo desse elemento

element.textContent = "Outro conteúdo"; // Altera o conteúdo do elemento

setTimeout(() => {
  element.textContent = "Outro conteúdo após 2 segundos";
}, 2000);

// Trabalhando com atributos
const link = document.querySelector("a"); // Quando ha vários elementos iguais, o "querySelector" entrega apenas o primeiro elemento
console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos"); // Altera atributos dos elementos
console.log(link.getAttribute("href")); // Imprime no console o valor do atributo
console.log(link.hasAttribute("target")); // Imprime no console um boolean indicando se esse atributo existe ou não

link.removeAttribute("target"); // Remove atributos existentes

// Manipulação de classes do CSS
const element2 = document.getElementById("meuId");

element.classList.add("novaClasse"); // Adiciona uma classe
element.classList.remove("minhaClasse"); // Remove uma classe
element.classList.toggle("minhaClasse"); // Caso a classe já exista, será removida, se não existe, será adicionada

// Manipular o CSS
const element3 = document.getElementById("meuId");

element3.style.color = "green"; // Altera estilizações CSS
element3.style.backgroundColor = "purple"; // CSS: background-color => JS: backgroundColor (Utiliza-se camelCase no JavaScript)

// Navegação entre nós (Pais e Filhos)
const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode; // Seleciona os elementos parentes
console.log(pai);

const primeiroFilho = pai.firstChild; // Seleciona o primeiro filho do elemento
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild; // Seleciona o ultimo filho do elemento
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div"); // Cria um novo elemento
console.log(novoElemento);

novoElemento.textContent = "Conteúdo da nova DIV"; // Adiciona um conteúdo a esse novo elemento

document.body.appendChild(novoElemento); // Adiciona esse elemento na tela do usuário
document.body.insertBefore(novoElemento, pai); // Adiciona o novo elemento após o elemento pré-existente
document.body.removeChild(métodoAntigo); // Remove um elemento

// Events
const botão = document.querySelector("#botãoCriar");
botão.addEventListener("click", () => {
  console.log("Botão clicado!"); // Evento de "click"(Computa quando um elemento recebe um click do mouse) acionado por callback
});

const element5 = document.querySelector("#meuFormulário");
element5.addEventListener("mouseover", () => {
  console.log("O mouse passou aqui!"); // Evento de "mouseover"(Passar o mouse por cima) acionado por callback
});

const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown", () => {
  console.log("Tecla pressionada!"); // Evento de "keydown"(Computa quando uma tecla é pressionada) acionado por callback
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Desabilita o comportamento padrão do elemento
  console.log("Formulário enviado!"); // Evento de "submit"(Computa quando os dados de um formulário é enviado ao servidor) acionado por callback
});

// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", () => {
  console.log("Clique capturado no pai!"); // Eventos no elemento pai propagam no filho
});

document.querySelector("#elementoFilho").addEventListener("click", (event) => {
  event.stopPropagation(); // Faz com que o elemento execute apenas o elemento dele, sem propagação
  console.log("Clique capturado no filho!");
});

document.querySelector("#meuLink").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicou no link!");
});

// Delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", (event) => {
  if (event.target.matches(".classeDosFilhos")) {
    console.log("Evento delegado para o filho!");
  }
});