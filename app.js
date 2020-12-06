var btnTranslate=document.querySelector("#btn-Translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")
//outputDiv.innerText = "I am Amruth"
//console.log(outputDiv)
function btnclickHandler(){
    outputDiv.innerText = " asasakjsjd " + txtInput.value
 }
btnTranslate.addEventListener("click",btnclickHandler)



