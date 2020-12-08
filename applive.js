var btnTranslate = document.querySelector("#btn-translator");
var txtArea = document.querySelector("#txt-input");
var outputDiv =document.querySelector("#output");

// outputDiv.innerText ="Tanay Pratap";

console.log(outputDiv);

function clickHandler() {
    console.log("clicked!");
    console.log("input is: ", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler);

