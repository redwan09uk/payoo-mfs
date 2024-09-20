//this feature options mainly done to switch over the options by clicking on individual name

//show or display the cash out section or options

document.getElementById('btn-display-cash-out').addEventListener('click',function(){

 //show cash out button clicked
 console.log('clicked on the cash out')
 document.getElementById('cash-out-form').classList.remove('hidden');

 //hide the add money form

document.getElementById('add-money-form').classList.add('hidden');


})

//show or display add money section or options and hide the cash out form
document.getElementById('btn-display-add-money').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

    
    

