var btnTranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler()
    {
        console.log("clicked!");
        console.log("input is: ", txtInput.value);
    };

btnTranslate.addEventListener("click", clickHandler);