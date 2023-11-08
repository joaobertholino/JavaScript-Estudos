// Utilizados na maioria das vezes em loops
// "Break"
let i = 10;
for (i; i > 0; i--) {
  console.log(i);
  if (i === 5) {
    break; // Encerrou a execução da instrução quando "i === 5"
  }
}
console.log("Executou o 'break'");

// "Continue"
let x = 10;
while (x < 100) {
  x += 10;
  if (x === 60 || x === 40) {
    console.log("Executou o 'continue'");
    continue; // Pulou uma etapa da instrução quando "x === 60 || x === 40"
  }
  console.log(`Testando continue: ${x}`);
}
