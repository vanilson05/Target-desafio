// Dados de entrada (adapte para um formato mais dinâmico se necessário)
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  const percentuais = {};

  for (const estado in faturamento) {
    percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
  }

  return percentuais;
}

// Calcula os percentuais
const resultados = calcularPercentuais(faturamentoPorEstado);

// Cria as linhas da tabela
const tabelaBody = document.getElementById('tabela-resultados').querySelector('tbody');
for (const estado in resultados) {
  const novaLinha = tabelaBody.insertRow();
  const celulaEstado = novaLinha.insertCell();
  const celulaFaturamento = novaLinha.insertCell();
  const celulaPercentual = novaLinha.insertCell();

  celulaEstado.textContent = estado;
  celulaFaturamento.textContent = `R$ ${faturamentoPorEstado[estado].toFixed(2)}`;
  celulaPercentual.textContent = `${resultados[estado]}%`;
}