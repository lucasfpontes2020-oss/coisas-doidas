
let nome = prompt("Qual é o seu nome?");

if (nome === null) {
    document.querySelector("#resultado").textContent =
        "Cálculo cancelado.";
} else {
    let pesoStr = prompt(
        `Olá, ${nome}! Qual é o seu peso em kg? (Ex.: 75,5)`
    );

    let altStr = prompt(
        "Qual é a sua altura em metros? (Ex.: 1,75)"
    );

    if (pesoStr === null || altStr === null) {
        document.querySelector("#resultado").textContent =
            "Cálculo cancelado.";
    } else {
        let peso = Number(pesoStr.trim().replace(",", "."));
        let alt = Number(altStr.trim().replace(",", "."));

        let resultado = document.querySelector("#resultado");

        if (
            !Number.isFinite(peso) ||
            !Number.isFinite(alt) ||
            peso <= 0 ||
            alt <= 0
        ) {
            resultado.textContent =
                "Digite um peso e uma altura válidos.";
        } else {
            // Calcula o IMC
            let imc = peso / (alt * alt);
            let imcFormatado = imc.toFixed(1);

            // Classifica o IMC para adultos
            let classificacao;

            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc < 25) {
                classificacao = "Peso normal";
            } else if (imc < 30) {
                classificacao = "Sobrepeso";
            } else if (imc < 35) {
                classificacao = "Obesidade grau I";
            } else if (imc < 40) {
                classificacao = "Obesidade grau II";
            } else {
                classificacao = "Obesidade grau III";
            }

            // Mostra o resultado na página
            resultado.textContent =
                `${nome}, seu IMC é ${imcFormatado}. ` +
                `Classificação de referência para adultos: ${classificacao}.`;

            // Mostra os dados no console
            console.log("Nome:", nome);
            console.log("Peso:", peso);
            console.log("Altura:", alt);
            console.log("IMC:", imcFormatado);
            console.log("Classificação:", classificacao);
        }
    }
}
