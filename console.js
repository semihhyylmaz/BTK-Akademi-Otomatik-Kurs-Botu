var divElements = document.getElementsByClassName('sc-cabOPr fhJwVK');
var currentIndex = 0;
var delay = 8000;

function clickNextDiv() {
  if (currentIndex < divElements.length) {
    var currentDiv = divElements[currentIndex];
    currentDiv.click();
    currentIndex++;
    console.log(currentIndex + '/'+ divElements.length + " TIKLANDI!");
    setTimeout(clickNextDiv, delay);
  }
}

clickNextDiv();

var radioButtons = document.querySelectorAll('input[type="radio"]');

for (var i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].value == 816 || radioButtons[i].value == 821) {
    radioButtons[i].click();
  }
}
