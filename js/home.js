
//add money to the account 
//stp-1: add event handler and inside of the function write event.preventDefault() to prevent reload the page
//stp-2: get money added to the account balance
//stp-3: get the pin number provided
//stp-4: verify pin number

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

    // step-4: verify the pin number 
    //this if else process are wrong way to verify

    if(pinNumberInput === '1234') {
        console.log('added money to your account')
    } else{
        alert('wrong pin ,please try agin')
    }

    //step 5: get the current balance
    const balance = document.getElementById('account-balance').innerText; //please note that to get the text use to innerText instead of value ,value only use for input field
    console.log(balance)


     const addMoneyNumber =parseFloat(addMoneyInput); //with this we change string to number we can check it is string or number through the "typeof"
     const balanceNumber = parseFloat(balance);  //with this we change string to number we can check it is string or number through the "typeof"
     
     const newBalance =addMoneyNumber + balanceNumber;
     console.log(newBalance);

    
    
})