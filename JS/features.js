// Show The Cash Out button 
document.getElementById('btnCashOutHome').addEventListener('click', function(){
    // Show Cash Out button
    document.getElementById('CashOutSec').classList.remove('hidden');
    document.getElementById('cashAddSec').classList.add('hidden');
    
});

document.getElementById('btnAddMoney').addEventListener('click', function(){
    // Show Cash Out button
    document.getElementById('cashAddSec').classList.remove('hidden');
    document.getElementById('CashOutSec').classList.add('hidden');
    
});
