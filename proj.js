const form = document.getElementById('form');
const service = document.getElementById('service');
const wallet = document.getElementById('wallet');
const amount = document.getElementById('amount');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    // get the values from the inputs
    const serviceValue = service.value.trim();
    const walletValue = wallet.value.trim();
    const amountValue = amount.value.trim();
    // get the values from the inputs

    if(amountValue===''){
        //show error
        //add error class
        alert ("Hello...");
        setErrorFor(service, 'Please select a service');
    } else {
        // add succes class
        setSuccessFor(service);
    }
}

function setErrorFor(required, input, message){
    const formControl = input.parentElement; // .form control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

