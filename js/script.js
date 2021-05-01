{
    const getTargetAmount = (plnValue, currency) => {
        const dollarRate = 3.7920;
        const frankRate = 4.1298;
        const funtRate = 5.2351;
        const euroRate = 4.5416;
        switch (currency) {
            case "USD":
                return (plnValue / dollarRate).toFixed(2);

            case "CHF":
                return (plnValue / frankRate).toFixed(2);

            case "GBP":
                return (plnValue / funtRate).toFixed(2);

            case "EUR":
                return (plnValue / euroRate).toFixed(2);


        };
    };

    const updateResultText = (plnValue, result, currency) => {
        const formParagraph = document.querySelector(".js-form__paragraph");
        formParagraph.innerHTML = `${plnValue} PLN =<strong> ${result} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formField = document.querySelector(".js-form__field");
        const currency = document.querySelector(".js-form__select").value;
        const plnValue = +formField.value;
        const result = getTargetAmount(plnValue, currency);
        updateResultText(plnValue, result, currency)
    }

    const init = () => {
        const form = document.querySelector('.js-form');
        form.addEventListener("submit", onFormSubmit);
    }
    init();
}