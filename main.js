//Let add some Js to our code
document.addEventListener('DOMContentLoaded',function(){
   document.querySelector('.email').addEventListener('submit',function(event){
    event.preventDefault(); //Use to stop form from submitting

    let email=document.getElementById('email').value.trim();
    
    let errorMsg="";
    

    if(!email.includes("@") || !email.includes(".")){
        errorMsg="Invalid email";
    }
    //Let show our error messages
    if(errorMsg){
        document.getElementById("email-error").textContent=errorMsg;
        console.log(errorMsg);
    }
    else{
         document.getElementById("email-error").textContent="";
         console.log(document.getElementById('email').value.trim());
        document.querySelector('.container').style.display="none";
        document.getElementById('SuccessContainer').style.display="block";
         document.getElementById('SuccessContainer').addEventListener('click',event=>{
     document.querySelector('.container').style.display="flex";
     document.getElementById('SuccessContainer').style.display="none";
    });
    
    }
   
   });
   
});