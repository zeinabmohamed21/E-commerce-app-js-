let username =document.querySelector("#username");
let password =document.querySelector("#password");
let loginBtn =document.querySelector("#sign-in");


let getname =localStorage.getItem("username")
let getPassword = localStorage.getItem("password")



loginBtn.addEventListener("click" , function(e)
{
    e.preventDefault();
    if(username.value === "" || password.value ==="")
    {
           alert("please Complete Your Form")
    }else{
        if( getname &&getname.trim() ===username.value.trim() && getPassword &&getPassword===password.value  ) 
        {
             setTimeout(()=>{
                window.location="index.html"
             },1500)
             
        }    else{
            console.log("wrong");
            
        }
    }    
})
 