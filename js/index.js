// ///////////////////////////////////////////////////////////////////////////////////////
let productsDom = document.querySelector(".products");
let productsCartDom=document.querySelector(".cart-products div");
let productsCartMenu=document.querySelector(".cart-products");
let shoppingCartIcon=document.querySelector(".shoppingCart");
let badgeDom =document.querySelector(".badge");
let products =JSON.parse(localStorage.getItem("products"))
 
function dropItemUI(products=[])
{
     let productsUi=products.map((item)=>{
          return`
           <div class="product-item">
               <img src=${item.imageUrl} class="product-item-image" alt="image"  >
               <div class="product-item-desc">
                <a onClick ="saveItemData(${item.id})">${item.title}</a>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <span>Weight : 300gm</span>
               </div>
               <div class="product-item-actions">
                <button class="add-to-cart" onClick=" addedToCart (${item.id})">Add To Cart</button>
                <i class="far fa-heart  fav"    ></i>
               </div>
            </div>
           `
     })

productsDom.innerHTML=productsUi;
};
dropItemUI(JSON.parse(localStorage.getItem("products")));
 


    let addedItem=localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')):[]  
 if(addedItem){
    addedItem.map((item)=>{
        productsCartDom.innerHTML += `<p>${item.title}</p>`
    })
    badgeDom.style.display="block"
    badgeDom.innerHTML = addedItem.length
 }


//  ADD TO CART
function addedToCart(id){
     
        if(localStorage.getItem("username")){

             let choosenItem=products.find((item)=> item.id ===id)
             let cartProductItems=document.querySelectorAll(".cart-products div p")
             productsCartDom.innerHTML += `<p>${choosenItem.title}</p>`
             badgeDom.style.display="block"
             badgeDom.innerHTML=cartProductItems.length+1;
             addedItem=[...addedItem , choosenItem];
             localStorage.setItem("productsInCart",JSON.stringify(addedItem))
        }else{
            window.location='login.html'
        }
    }
     

  

shoppingCartIcon.addEventListener('click' , openCartMenu)
// open cart menu
 function openCartMenu (){
    if(productsCartDom.innerHTML!= "")
    { if(productsCartMenu.style.display=="block"){
          productsCartMenu.style.display = "none"
    } else{
        productsCartMenu.style.display = "block"
    }
    }
    
 }

 function saveItemData(id){
    localStorage.setItem("productId" , id);
    window.location="cartDetails.html"
 }


//  search
let input =document.querySelector("#search");
input.addEventListener("keyup" , function(e){
    if(e.keyCode === 13){
         search(e.target.value , JSON.parse(localStorage.getItem("products")) )
    }
    if(e.target.value.trim()=== ""){
        dropItemUI(JSON.parse(localStorage.getItem("products"))) 
    }
})

 function search (title , myArray)
 {
    let arr =myArray.filter( (item) => item.title == title)
    console.log(arr);
    dropItemUI(arr);
 }
 
//  search("Fish Food 2" , JSON.parse(localStorage.getItem("products")))