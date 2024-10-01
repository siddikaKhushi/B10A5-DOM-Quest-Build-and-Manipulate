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
function addTransactionHistory(message) {
    const p = document.createElement('p');
    const currentDate = new Date(); 
    p.innerText = `${message} 
     Date: ${currentDate.toString()}`;
    document.getElementById('transaction-section').appendChild(p);
}