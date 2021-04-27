let form = document.querySelector('.js-form');
let form__field = document.querySelector(".js-form__field");
let form__select = document.querySelector(".js-form__select");
let form__submitButton = document.querySelector(".js-form__buttonSubmit");
let form__resetButton = document.querySelector(".js-form__buttonReset");
let form__paragraph = document.querySelector(".js-form__paragraph");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let finalSentence = "Otrzymasz";
    let currency = form__select.value;
    let plnValue = +form__field.value;
    let dollarRate = 3.7920;
    let frankRate = 4.1298;
    let funtRate = 5.2351;
    let euroRate = 4.5416;
    let result;
    switch (currency) {
        case "USD":
            result = (plnValue / dollarRate).toFixed(2);
            form__paragraph.innerText = `${finalSentence} ${result} dolarów`;
            break;
        case "CHF":
            result = (plnValue / frankRate).toFixed(2);
            form__paragraph.innerText = `${finalSentence} ${result} franków`;
            break;
        case "GBP":
            result = (plnValue / funtRate).toFixed(2);
            form__paragraph.innerText = `${finalSentence} ${result} funtów`;
            break;
        case "EUR":
            result = (plnValue / euroRate).toFixed(2);
            form__paragraph.innerText = `${finalSentence} ${result} euro`;
            break;
        default:
            form__paragraph.innerText = "Coś poszło nie tak, naprawiamy to!";

    }

    form.addEventListener("reset", () => {
        form__paragraph.innerText = `${finalSentence}`;
        console.log("formularz został zresetowany");

    });
});