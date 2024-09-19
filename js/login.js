
// document.getElementById('id name').addEventListener('click',function(){})
//document.getElementById('buttton-login').addEventListener('click',function(){})

//Search: Form submit reloading the page

//event: event parameter use when something used in browser in event that auotmatically select the event parameter, someone write it as a 'e' sometime.

/*
//sep1: set event handler
document.getElementById('buttton-login').addEventListener('click',function(event){
    //step 2: prevent dfault behavior-(prevent reloading browser) which used to prevent browser from reload automatically
    event.preventDefault(); 
    
    //step3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value; //value added here to get the a result after clicking
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber)

    //step 4: validate the phone number and pin
    //this is temporary , we should not do like this
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in')
        //step 5: allow user to use the website
    } else {
        alert('wrong phone number or pin');
    }
})
    */
   //short cut without much explanation

   document.getElementById('buttton-login').addEventListener('click',function(event){
    event.preventDefault();
     
     //get the phone number and pin number

   const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value

   console.log(phoneNumber, pinNumber);

   //bad way to validate, it is only for use temporary

   if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');   
   // window.location.href = '/home' //it it is not working , could not manage to connect
   }
   else {
    alert('wrong pin or phone number')
   }

   });

   