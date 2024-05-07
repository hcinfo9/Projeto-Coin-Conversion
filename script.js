// Executa o código somente quando o HTML estiver totalmente carregado
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona os elementos relevantes do DOM
    const convertButton = document.querySelector(".button-convert");
    const typeCoinToConvert = document.querySelector(".select-convert");
    const CoinConverted = document.querySelector(".select-convert-destiny");
    const valueToConvert = document.querySelector(".value-to-convert");
    const valueConverted = document.querySelector('.value-converted');

    // Função assíncrona para buscar dados da API de conversão de moeda
    async function fetchCoinPrice() {
        try {
            const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,USD-EUR,USD-GBP,EUR-GBP,BTC-USD,BTC-EUR,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,GBP-USD,GBP-EUR";
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar os dados de moeda:", error);
            return {}; // Retorna um objeto vazio em caso de erro
        }
    }

    // Função para resetar os campos caso o usuário escolha duas opções iguais
    function resetSelects() {
        typeCoinToConvert.value = "Nenhum Selecionado";
        CoinConverted.value = "Nenhum Selecionado";
        valueToConvert.innerHTML = "Value";
        valueConverted.innerHTML = "Value";
        document.querySelector(".img-country").src = "./assets/moeda.png";
        document.querySelector(".img-country-destiny").src = "./assets/moeda.png";
        document.querySelector(".labels").innerHTML = "Coin";
        document.querySelector(".labels2").innerHTML = "Coin";
    }

    // Função para converter os valores e exibi-los na tela
    function convertValue(dados) {
        const inputCoinValue = parseFloat(document.querySelector(".input-value").value);

        // Objeto que mapeia as informações de cada moeda
        const coinObject = {
            real: { value: "Real", currency: "BRL", lang: "pt-BR" },
            dolar: { value: "Dolar", currency: "USD", lang: "en-US" },
            euro: { value: "Euro", currency: "EUR", lang: "de-DE" },
            libra: { value: "Libra", currency: "GBP", lang: "en-GB" },
            Bitcoin: { value: "Bitcoin", currency: "BTC", lang: "de-DE" }
        };

        const coins = Object.values(coinObject);

        for (const coin of coins) {
            if (coin.currency === typeCoinToConvert.value) {
                // Atualiza a imagem e o label da moeda de origem
                document.querySelector(".img-country").src = `./assets/${coin.value}.png`;
                document.querySelector(".labels").innerHTML = coin.value;

                // Formata o valor de entrada para exibição
                valueToConvert.innerHTML = new Intl.NumberFormat(coin.lang, {
                    style: "currency", currency: coin.currency
                }).format(inputCoinValue);
            }

            // Remove a opção "Bitcoin" do select de destino se a moeda de origem for "Libra"
            if (typeCoinToConvert.value === "GBP") {
                const optionRemove = CoinConverted.querySelector('option[value="BTC"]');
                if (optionRemove) optionRemove.remove();
            }

            if (coin.currency === CoinConverted.value) {
                // Atualiza a imagem e o label da moeda de destino
                document.querySelector(".img-country-destiny").src = `./assets/${coin.value}.png`;
                document.querySelector(".labels2").innerHTML = coin.value;

                // Formatação das opções de formatação para o número convertido
                const formatOptions = { style: "currency", currency: coin.currency };

                // Verifica se os dados da API estão disponíveis
                if (dados === null) {
                    // Se não houver dados disponíveis, exibe apenas o valor de entrada
                    valueConverted.innerHTML = new Intl.NumberFormat(coin.lang, formatOptions).format(inputCoinValue);
                    return;
                }

                // Obtém a taxa de conversão da API
                const conversionRate = dados[CoinConverted.value + typeCoinToConvert.value]["bid"];

                // Se a moeda de destino for Bitcoin, ajusta as opções de formatação
                if (CoinConverted.value === "BTC") {
                    Object.assign(formatOptions, { minimumFractionDigits: 4, maximumFractionDigits: 8 });
                }

                // Calcula e exibe o valor convertido formatado
                valueConverted.innerHTML = new Intl.NumberFormat(coin.lang, formatOptions).format(inputCoinValue / conversionRate);

            }
        }
    }

    // Função principal que chama as outras funções com base nas interações do usuário
    function coinPrice() {
        // Verifica se as opções selecionadas são iguais e reseta os campos se forem
        if (typeCoinToConvert.value === CoinConverted.value) {
            resetSelects();
            return;
        }

        // Verifica se o campo de entrada está vazio para evitar chamadas desnecessárias à API
        if (document.querySelector(".input-value").value === "") convertValue(null);

        // Chama a função para buscar os dados da API e, em seguida, a função para converter os valores
        fetchCoinPrice().then(dados => convertValue(dados));
    }

    // Adiciona event listeners para os selects e o botão de conversão
    typeCoinToConvert.addEventListener('change', coinPrice);
    CoinConverted.addEventListener('change', coinPrice);
    convertButton.addEventListener("click", coinPrice);

    // Chama a função principal quando a página é carregada pela primeira vez
    coinPrice();
});
