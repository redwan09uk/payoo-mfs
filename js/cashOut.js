
//step-1: add the cash out button with event handler to submit the form

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault(); //it helps to prevent from reload the page
    console.log('cash out button clicked')

//step-2: add the cash out amount 
 
   const cashOut = document.getElementById('input-cash-out').value; //please note it is an input filed of an form so we must need add .value to get the value of it also if it is not input then wil use the innerText wil use.
   const cashOutNumber = parseFloat(cashOut);
   const pinNumber = document.getElementById('input-cash-out-pin').value ////please note it is an input filed of an form so we must need add .value to get the value of it also if it is not input then wil use the innerText wil use.. 
   console.log(cashOut, pinNumber);

//wrong way to verify the pin number
if (pinNumber === '1234') {
    const balance = document.getElementById('account-balance').innerText //it is a text so i have used here innerText instead of .value(it is only use for input type)
    console.log(balance);
    const balanceNumber = parseFloat(balance);

    //reduce the balance
    const newBalance = balanceNumber - cashOutNumber;

    //update the ui
    document.getElementById('account-balance').innerText = newBalance;

} else{
    alert('Failed to cash out ,please try again ') // with alert we can give a message to user if the condition is false or not matched
}

})