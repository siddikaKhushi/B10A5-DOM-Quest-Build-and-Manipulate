function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showNewPageById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
function showCurrentDateTime() {
    const now = new Date();
    const dateTimeString = `Date: ${now}`;
    
    // Display the current date and time in the element with id="dateTime"
    document.getElementById('dateTime').textContent = dateTimeString;
  }