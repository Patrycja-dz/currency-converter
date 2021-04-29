{

    const calculateResult = (plnValue, currency) => {
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
        const form__paragraph = document.querySelector(".js-form__paragraph");
        form__paragraph.innerHTML = `${plnValue} PLN = <strong> ${result} ${currency} </strong>`;
    }




    const onFormSubmit = (event) => {
        event.preventDefault();
        const form__field = document.querySelector(".js-form__field");
        const form__select = document.querySelector(".js-form__select");
        const currency = form__select.value;
        const plnValue = +form__field.value;
        const result = calculateResult(plnValue, currency);
        updateResultText(plnValue, result, currency)
    }

    const init = () => {
        const form = document.querySelector('.js-form');
        form.addEventListener("submit", onFormSubmit);
        
    }

    init();
}