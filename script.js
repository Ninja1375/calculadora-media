function calcularMedia() {
    let notas = document.querySelectorAll(".nota");
    let soma = 0;
    let quantidadeNotas = 0;
    let resultado = document.getElementById("resultado");
    let erro = false;

    // Verifica se as notas estão entre 0 e 10
    notas.forEach(nota => {
        let valor = parseFloat(nota.value);

        if (valor > 10 || valor < 0) {
            erro = true; // Marca erro se alguma nota for maior que 10 ou menor que 0
        }

        if (!isNaN(valor) && valor >= 0 && valor <= 10) {
            soma += valor;
            quantidadeNotas++;
        }
    });

    // Se houver erro, exibe mensagem de alerta
    if (erro) {
        resultado.innerHTML = `<span style="color: red;">Por favor, insira notas de 0 a 10!</span>`;
        return;
    }

    // Verifica se pelo menos uma nota foi inserida
    if (quantidadeNotas === 0) {
        resultado.innerHTML = `<span style="color: red;">Insira pelo menos uma nota válida!</span>`;
        return;
    }

    // Calcula a média
    let media = (soma / quantidadeNotas).toFixed(2);
    let status = media >= 6 ? "Aprovado!" : media >= 5 ? "Recuperação!" : "Reprovado!";
    let cor = media >= 6 ? "green" : media >= 5 ? "orange" : "red";

    // Exibe o resultado
    resultado.innerHTML = `Média: ${media} <br> <span style="color:${cor};">${status}</span>`;
}
