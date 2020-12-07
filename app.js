var btnTranslate=document.querySelector("#btn-Translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
//outputDiv.innerText = "I am Amruth"
//console.log(outputDiv)
var baseurl="https://api.funtranslations.com/translate/minion.json"
//var baseurl="https://api.funtranslations.com/translate/anyone.json"
//var baseurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function formTranslationUrl(text){
    var formedurl = baseurl + "?text=" + text
    return formedurl
}
function errorHandler(error)
{
    alert("Something wrong with server! Please try again after some time");
    console.log("Error occured",error);
    
}
function callTranslationApi(text)
{
    fetch(formTranslationUrl(text))
    .then(response => response.json())
    .then(json=>outputDiv.innerText =json.contents.translated)
    .catch(errorHandler)
}
function btnclickHandler(){
    callTranslationApi(txtInput.value)
 }
btnTranslate.addEventListener("click",btnclickHandler)



