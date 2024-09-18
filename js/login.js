
// document.getElementById('id name').addEventListener('click',function(){})
//document.getElementById('buttton-login').addEventListener('click',function(){})

//Search: Form submit reloading the page

//event: event parameter use when something used in browser in event that auotmatically select the event parameter, someone write it as a 'e' sometime.


//sep1: set event handler
document.getElementById('buttton-login').addEventListener('click',function(event){
    //step 2: prevent dfault behavior-(prevent reloading browser) which used to prevent browser from reload automatically
    event.preventDefault(); 
    console.log('login button clicked');
    
    //step3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})