// script.js
const arquivoInput = document.getElementById('arquivo');
const resultados = document.getElementById('resultados');

arquivoInput.addEventListener('change', (event) => {
    const arquivo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const dados = JSON.parse(event.target.result);
        // ... (restante do código da solução anterior)
    };

    reader.readAsText(arquivo);
});