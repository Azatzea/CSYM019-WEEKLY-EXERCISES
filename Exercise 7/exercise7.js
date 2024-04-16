function AzizatButtonText() {
    var textBoxValue = document.getElementById('myTextBox');
    var textBoxValue2 = document.getElementById('result');
textBoxValue2.firstChild.nodeValue = textBoxValue .value;
     

function AzizatButtonClick() {
    var textBoxValue = document.getElementById('myButton');
    textBoxValue.adEventListener ('click' , AzizatButtonClick);
   
}