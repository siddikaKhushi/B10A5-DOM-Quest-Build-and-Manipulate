let balance = getTextFieldValueById('account-balance');
const p = document.createElement('p');
// for noakhali
document.getElementById('donation-money-noakhali')
.addEventListener('click', function(event) {
    event.preventDefault();
    
    const addMoney1 = getInputFieldValueById('input-add-money-one');
    
   
    if (isNaN(addMoney1) || addMoney1 <= 0) {
        alert('Please enter a valid donation amount');
        // document.getElementById('donation-section').classList.add('hidden');
        return;
    }
    
   
    let accountNewBalance1 = getTextFieldValueById('noakhali-balance');
    
   
    if (addMoney1 <= balance) {
        accountNewBalance1 += addMoney1; 
        balance -= addMoney1; 
        
        
        document.getElementById('account-balance').innerText = balance;
        document.getElementById('noakhali-balance').innerText = accountNewBalance1;


        // for transaction history
    
        p.innerText = `${accountNewBalance1} Taka is Donated for famine-2024 at Feni, Bangladesh`;
        document.getElementById('transaction-section').appendChild(p);
    } else {
        alert('Insufficient balance');
    }
});
// Flood Relief in Feni
document.getElementById('relief-in-feni')
.addEventListener('click', function(event) {
    event.preventDefault();
    
    const addMoney2 = getInputFieldValueById('input-add-money-two');
   
    if (isNaN(addMoney2) || addMoney2 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }
    
   
    let accountNewBalance2 = getTextFieldValueById('feni-balace');
    
   
    if (addMoney2 <= balance) {
        accountNewBalance2 += addMoney2; 
        balance -= addMoney2; 
        
        
        document.getElementById('account-balance').innerText = balance;
        document.getElementById('feni-balace').innerText = accountNewBalance2;
        // for transaction history
    
        p.innerText = `${accountNewBalance2} Taka is Donated for Flood Relief in Feni,Bangladesh`;
        document.getElementById('transaction-section').appendChild(p);
    } else {
        alert('Insufficient balance');
    }
});

document.getElementById('quota-movment')
.addEventListener('click', function(event) {
    event.preventDefault();
    
    const addMoney3 = getInputFieldValueById('input-add-money-three');
    
   
    if (isNaN(addMoney3) || addMoney3 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }
    
   
    let accountNewBalance3 = getTextFieldValueById('quota-balance');
    
   
    if (addMoney3 <= balance) {
        accountNewBalance3 += addMoney3; 
        balance -= addMoney3; 
        
        
        document.getElementById('account-balance').innerText = balance;
        document.getElementById('quota-balance').innerText = accountNewBalance3;

        // for transaction history
    
        p.innerText = `${accountNewBalance3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        document.getElementById('transaction-section').appendChild(p);
    } else {
        alert('Insufficient balance');
    }
});
// Donate for Flood at Rangpur, Bangladesh
document.getElementById('flood-rangpur')
.addEventListener('click', function(event) {
    event.preventDefault();
    
    const addMoney4 = getInputFieldValueById('input-add-money-four');
    
   
    if (isNaN(addMoney4) || addMoney4 <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }
    
   
    let accountNewBalance4 = getTextFieldValueById('rangpur-flood-balance');
    
  
    if (addMoney4 <= balance) {
        accountNewBalance4 += addMoney4; 
        balance -= addMoney4; 
        
        
        document.getElementById('account-balance').innerText = balance;
        document.getElementById('rangpur-flood-balance').innerText = accountNewBalance4;

        // for transaction history
    
        p.innerText = `${accountNewBalance4} Taka is Donated for famine-2024 at Rangpur, Bangladesh`;
        document.getElementById('transaction-section').appendChild(p);
    } else {
        alert('Insufficient balance');
    }
});

document.getElementById('donation-button').addEventListener('click',function(event){
    event.preventDefault();
    // document.getElementById('donation-section').classList.add('bg-[#B4F461]');
    showNewPageById('donation-section');


})
document.getElementById('history-button').addEventListener('click',function(event){
    event.preventDefault();
    // document.getElementById('history-button').classList.add('bg-[#B4F461]');
    showNewPageById('transaction-section');


})