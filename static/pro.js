let service=document.getElementById("service");
let wallet=document.getElementById("wallet");
let amount=document.getElementById("amount");
let conPwd=document.getElementById("txtConPwd");
let slct=document.getElementById("slct");
let form=document.getElementById("form");

function validateInput(){
    // Chack service is empty
    if(service.value.trim()===""){
        onErrorS(service, "UserName cannot be empty");
    }else{
        onSuccessS(service);
    }

    // check Email is empty
    if(wallet.value.trim()===""){
        onErrorS(wallet, "Email cannot be empty");
    }else{
        onSuccessS(wallet);
    }

    //check amount
    if(amount.value.trim()===""){
        onError(amount, "Password cannot be empty");
    }else{
        onSuccess(amount);
    }


    //Check select if is empty
    if(slct.value.trim()===""){
        onErrorS(slct, "Password cannot be empty");
    }else{
        onSuccessS(slct);
    }

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

//Input function for success
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
    parent.classList.remove("error");
    parent.classList.add("success");
}

//Input function for Error
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message; 
    parent.classList.remove("success");
    parent.classList.add("error");   
}

//Select function for success
function onSuccessS(select){
    let parent=select.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
    parent.classList.remove("error");
    parent.classList.add("success");
}

//Select function for Error
function onErrorS(select,message){
    let parent=select.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message; 
    parent.classList.remove("success");
    parent.classList.add("error");   
}