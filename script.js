// Executar somente quando o HTML for todo Carregado.
document.addEventListener("DOMContentLoaded", function () {

    const convertButton = document.querySelector(".button-convert");
    const typeCoinToConvert = document.querySelector(".select-convert");
    const CoinConverted = document.querySelector(".select-convert-destiny");
    const valueToConvert = document.querySelector(".value-to-convert");
    const valueConverted = document.querySelector('.value-converted');

    //chamada para API de Conversões por função Assincrona
    async function fetchCoinPrice() {
        
        try {
            const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,USD-EUR,USD-GBP,EUR-GBP,BTC-USD,BTC-EUR,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,GBP-USD,GBP-EUR";
            const response = await fetch(url);
            return await response.json();
        } 
        
        catch (error) {
            console.error("Erro ao buscar os dados de moeda:", error);
            return {};
        }
    }

    //função para resetar os campos caso o usuario escolha 2 options iguais
    function resetSelects() {
        typeCoinToConvert.value = "Nenhum Selecionado";
        CoinConverted.value = "Nenhum Selecionado";
        valueToConvert.innerHTML="Value"
        valueConverted.innerHTML="Value"
        document.querySelector(".img-country").src="./assets/moeda.png"
        document.querySelector(".img-country-destiny").src="./assets/moeda.png"
        document.querySelector(".labels").innerHTML = "Coin";
        document.querySelector(".labels2").innerHTML = "Coin";
    }

    //função que converte os valores e mostra os na tela
    function convertValue(dados) {
        const inputCoinValue = parseFloat(document.querySelector(".input-value").value);

        const coinObject={
            real:{value:"Real", currency:"BRL", lang:"pt-BR" } ,
            dolar: {value:"Dolar", currency:"USD", lang:"en-US" } ,
            euro: {value:"Euro", currency:"EUR", lang:"de-DE" } ,
            libra: {value:"Libra", currency:"GBP", lang:"en-GB" } ,
            Bitcoin: {value:"Bitcoin", currency:"BTC", lang:"de-DE" }
        };

        const coins= Object.values(coinObject);

        for(const coin of coins){
            
            if (coin.currency === typeCoinToConvert.value){
                document.querySelector(".img-country").src = `./assets/${coin.value}.png`;
                document.querySelector(".labels").innerHTML = coin.value;
                valueToConvert.innerHTML = new Intl.NumberFormat(coin.lang, {
                    style: "currency", currency: coin.currency
                }).format(inputCoinValue);
            }
            // Remove a option Bitcoin pois a API não tem Conversão de GBP para BTC
            if (typeCoinToConvert.value==="GBP") {
                const optionRemove = CoinConverted.querySelector('option[value="BTC"]');
                if(optionRemove) optionRemove.remove();
            }

            if (coin.currency === CoinConverted.value){
                document.querySelector(".img-country-destiny").src = `./assets/${coin.value}.png`;
                document.querySelector(".labels2").innerHTML = coin.value;

                const conversionRate = dados[CoinConverted.value + typeCoinToConvert.value]["bid"];
                const formatOptions = { style: "currency", currency: coin.currency };

                if (CoinConverted.value==="BTC") {
                    Object.assign(formatOptions, { minimumFractionDigits: 4, maximumFractionDigits: 8 });
                }
            
                valueConverted.innerHTML = new Intl.NumberFormat(coin.lang, formatOptions).format(inputCoinValue / conversionRate);
        
            } 
        }
    }
    function coinPrice() {

        if (typeCoinToConvert.value === CoinConverted.value){
            resetSelects();
            return;
        };

        fetchCoinPrice().then(dados => convertValue(dados));
    }

    typeCoinToConvert.addEventListener('change', coinPrice);
    CoinConverted.addEventListener('change', coinPrice);
    convertButton.addEventListener("click", coinPrice);

    coinPrice();

});





