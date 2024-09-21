

// common shred functions here
/*
//to find for specific id 
function getInputFieldValueById(){
    console.log('wil get value by id');
    const addMoney = document.getElementById('input-add-money').value;
    return addMoney;
}

*/
// common shred functions here
//take parameter name with id to get any id from whole of the webpage, so that means I have declare here one time and get many times

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

