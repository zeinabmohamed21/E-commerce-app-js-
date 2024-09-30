let links =document.querySelector("#links");
let userInfo =document.querySelector("#user-info")
let userDom = document.querySelector("#user")
let LogoutBtn = document.querySelector("#logout")



let checked=localStorage.getItem("username")
 
if( checked){
     links.remove();
     userInfo.style.display="flex";
     userDom.innerHTML= `Hello ${checked}`
}

LogoutBtn.addEventListener('click' , function(){
     setTimeout(()=>{
          window.location="register.html"
     }
,1500);
localStorage.clear();
})