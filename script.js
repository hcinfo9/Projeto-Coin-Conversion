document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".button-convert");
    const typeCoinToConvert = document.querySelector(".select-convert");
    const CoinConverted = document.querySelector(".select-convert-destiny");



    function convertValue(dados) {
        const inputCoinValue = document.querySelector(".input-value").value
        const valueToConvert = document.querySelector(".value-to-convert");
        const valueConverted = document.querySelector('.value-converted');
        const btcBrl = 301238
        const btcGbp = 46836
        const btcEur = 54920
        const btcUsd = 58755 

        if (typeCoinToConvert.value === "real" && CoinConverted.value === "dolar") {

            document.querySelector(".img-country").src = "./assets/real.png";
            document.querySelector(".labels").innerHTML = "Real";
            valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/dolar.png";
            document.querySelector(".labels2").innerHTML = "Dólar";
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue / dados["USDBRL"]["bid"]);
        }

        if (typeCoinToConvert.value === "dolar" && CoinConverted.value === "real") {
            document.querySelector(".img-country").src = "./assets/dolar.png";
            document.querySelector(".labels").innerHTML = "Dólar";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/real.png";
            document.querySelector(".labels2").innerHTML = "Real";
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue / dados["BRLUSD"]["bid"]);

        }
   

        if (typeCoinToConvert.value === 'real' && CoinConverted.value === "euro") {
            document.querySelector(".img-country").src = "./assets/real.png";
            document.querySelector(".labels").innerHTML = "Real";
            valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/euro.png";
            document.querySelector(".labels2").innerHTML = "Euro";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue / dados["EURBRL"]["bid"]);
        };

        if (typeCoinToConvert.value === 'euro' && CoinConverted.value === "real") {
            document.querySelector(".img-country").src = "./assets/euro.png";
            document.querySelector(".labels").innerHTML = "Euro";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/real.png";
            document.querySelector(".labels2").innerHTML = "Real";
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue / dados["BRLEUR"]["bid"]);
        };



        if (typeCoinToConvert.value === "real" && CoinConverted.value === "libra") {
            document.querySelector(".img-country").src = "./assets/real.png";
            document.querySelector(".labels").innerHTML = "Real";
            valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/libra.png";
            document.querySelector(".labels2").innerHTML = "Libra";
            valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue / dados["GBPBRL"]["bid"]);
        }

        if ( typeCoinToConvert.value === "libra" && CoinConverted.value === "real" ) {

            document.querySelector(".img-country").src = "./assets/libra.png";
            document.querySelector(".labels").innerHTML = "Libra";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/real.png";
            document.querySelector(".labels2").innerHTML = "Real";
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue / dados["BRLGBP"]["bid"]);
        }

        if (typeCoinToConvert.value === "real" && CoinConverted.value === "bitcoin")  {
            document.querySelector(".img-country").src = "./assets/real.png";
            document.querySelector(".labels").innerHTML = "Real";
            valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/bitcoin.png";
            document.querySelector(".labels2").innerHTML = "Bitcoin";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue / dados["BTCBRL"]["bid"]);

           
        };

        if (typeCoinToConvert.value === "bitcoin" && CoinConverted.value === "real") {

            document.querySelector(".img-country").src = "./assets/bitcoin.png";
            document.querySelector(".labels").innerHTML = "Bitcoin";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC", maximumFractionDigits:4
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/real.png";
            document.querySelector(".labels2").innerHTML = "Real";
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputCoinValue * btcBrl);
        };

        if (typeCoinToConvert.value === "dolar" && CoinConverted.value === "euro") {

            document.querySelector(".img-country").src = "./assets/dolar.png";
            document.querySelector(".labels").innerHTML = "Dólar";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/euro.png";
            document.querySelector(".labels2").innerHTML = "Euro";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue / dados["EURUSD"]["bid"]);
        }

        if (typeCoinToConvert.value ==="euro" && CoinConverted.value === "dolar" ) {

            document.querySelector(".img-country").src = "./assets/euro.png";
            document.querySelector(".labels").innerHTML = "Euro";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/dolar.png";
            document.querySelector(".labels2").innerHTML = "Dólar";
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue / dados["USDEUR"]["bid"]);
        }

        if (typeCoinToConvert.value ==="dolar" && CoinConverted.value === "libra" ) {

            document.querySelector(".img-country").src = "./assets/dolar.png";
            document.querySelector(".labels").innerHTML = "Dólar";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/libra.png";
            document.querySelector(".labels2").innerHTML = "Libra";
            valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue / dados["GBPUSD"]["bid"]);
        }

        if (typeCoinToConvert.value ==="libra" && CoinConverted.value === "dolar" ) {
            
            document.querySelector(".img-country").src = "./assets/libra.png";
            document.querySelector(".labels").innerHTML = "Libra";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/dolar.png";
            document.querySelector(".labels2").innerHTML = "Dólar";
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue / dados["USDGBP"]["bid"]);
        }

        if (typeCoinToConvert.value === "dolar" && CoinConverted.value === "bitcoin")  {

            document.querySelector(".img-country").src = "./assets/dolar.png";
            document.querySelector(".labels").innerHTML = "Dólar";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/bitcoin.png";
            document.querySelector(".labels2").innerHTML = "Bitcoin";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue / dados["BTCUSD"]["bid"]);
        }

        if (typeCoinToConvert.value === "bitcoin" && CoinConverted.value === "dolar")  {

            document.querySelector(".img-country").src = "./assets/bitcoin.png";
            document.querySelector(".labels").innerHTML = "Bitcoin";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/dolar.png";
            document.querySelector(".labels2").innerHTML = "Dólar";
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputCoinValue * btcUsd);            
        }

        if (typeCoinToConvert.value ==="euro" && CoinConverted.value === "libra" ) {

            document.querySelector(".img-country").src = "./assets/euro.png";
            document.querySelector(".labels").innerHTML = "Euro";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/libra.png";
            document.querySelector(".labels2").innerHTML = "Libra";
            valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue / dados["GBPEUR"]["bid"]);
        }

        if (typeCoinToConvert.value ==="libra" && CoinConverted.value === "euro" ) {
 
            document.querySelector(".img-country").src = "./assets/libra.png";
            document.querySelector(".labels").innerHTML = "Libra";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue);

            document.querySelector(".img-country-destiny").src = "./assets/euro.png";
            document.querySelector(".labels2").innerHTML = "Euro";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue / dados["EURGBP"]["bid"]);
        }

        if (typeCoinToConvert.value === "euro" && CoinConverted.value === "bitcoin")  {

            document.querySelector(".img-country").src = "./assets/euro.png";
            document.querySelector(".labels").innerHTML = "Euro";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/bitcoin.png";
            document.querySelector(".labels2").innerHTML = "Bitcoin";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue / dados["BTCEUR"]["bid"]);
        }

        if (typeCoinToConvert.value === "bitcoin" && CoinConverted.value === "euro")  {

            document.querySelector(".img-country").src = "./assets/bitcoin.png";
            document.querySelector(".labels").innerHTML = "Bitcoin";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/euro.png";
            document.querySelector(".labels2").innerHTML = "Euro";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue * btcEur);            
        }

        if (typeCoinToConvert.value === "euro" && CoinConverted.value === "bitcoin")  {

            document.querySelector(".img-country").src = "./assets/euro.png";
            document.querySelector(".labels").innerHTML = "Euro";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "EUR"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/bitcoin.png";
            document.querySelector(".labels2").innerHTML = "Bitcoin";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue / dados["BTCEUR"]["bid"]);
        }

        if (typeCoinToConvert.value === "libra" && CoinConverted.value === "bitcoin")  {

            document.querySelector(".img-country").src = "./assets/libra.png";
            document.querySelector(".labels").innerHTML = "Libra";
            valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/bitcoin.png";
            document.querySelector(".labels2").innerHTML = "Bitcoin";
            valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue / btcGbp);          
        }

        if (typeCoinToConvert.value === "bitcoin" && CoinConverted.value === "libra")  {

            document.querySelector(".img-country").src = "./assets/bitcoin.png";
            document.querySelector(".labels").innerHTML = "Bitcoin";
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC",maximumFractionDigits:4
            }).format(inputCoinValue);
            
            document.querySelector(".img-country-destiny").src = "./assets/libra.png";
            document.querySelector(".labels2").innerHTML = "Libra";
            valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency", currency: "GBP"
            }).format(inputCoinValue * btcGbp);          
        }

    }

    typeCoinToConvert.addEventListener('change', coinPrice)
    CoinConverted.addEventListener('change', coinPrice)
    convertButton.addEventListener("click", coinPrice)

    async function coinPrice() {
        let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,USD-EUR,USD-GBP,EUR-GBP,BTC-USD,BTC-EUR,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,GBP-USD,GBP-EUR";
        let dados = await fetch(url).then(resposta => resposta.json());

        console.log(dados);
        convertValue(dados);
    }

    
});





