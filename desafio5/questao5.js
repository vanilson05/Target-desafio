function inverter() {
  // Pega o texto do input
  const texto = document.getElementById('texto').value;

  // Inicializa uma string vazia para armazenar o resultado
  let textoInvertido = '';

  // Percorre o texto original do final para o início
  for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
  }

  // Exibe o resultado na página
  document.getElementById('resultado').textContent = textoInvertido;
}