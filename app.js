var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getConvertedURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("ERROR", error);
    alert("something went wrong with the server. Try again after sometime");
}

function clickHandler() {
    var input = inputTxt.value;
    console.log(getConvertedURL(input));

    fetch(getConvertedURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);