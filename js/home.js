
//add money to the account 
//stp-1: add event handler and inside of the function write event.preventDefault() to prevent reload the page
//stp-2: get money added to the account balance

// step-1: added an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submitted
    event.preventDefault();

    // step-2: get money added to the account balance

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step-3: get the pin number provided

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})