// script.js
function pertenceAFibonacci(numero) {
}

function verificar() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultadoDiv = document.getElementById('resultado');

  if (pertenceAFibonacci(numero)) {
    resultadoDiv.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    resultadoDiv.innerHTML = `O número ${numero} não pertence à sequência de Fibonacci.<br>Veja como a sequência é construída:<br>
    <p>A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores, começando por 0 e 1. Assim, os primeiros números são:</p>
    <ul>
      <li>0</li>
      <li>1</li>
      <li>1 (0 + 1)</li>
      <li>2 (1 + 1)</li>
      <li>3 (1 + 2)</li>
      <li>5 (2 + 3)</li>
      <li>8 (3 + 5)</li>
      <li>13 (5 + 8)</li>
      <li>21 (8 + 13)</li>
      <li>34 (13 + 21)</li>
    </ul>
    <p>A tabela abaixo mostra a construção detalhada da sequência:</p>
    `;

    // ... (resto do código da tabela)
  }
}