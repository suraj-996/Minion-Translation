var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


btnTranslate.addEventListener("click",clickHandler)

var serverUrl="https://api.funtranslations.com/translate/minion.json";


function getTranslation(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server! try again back later")
}

function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslation(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);