//   let productsInCart=localStorage.getItem("productsInCart");
let noProductsDom =document.querySelector(".noProducts")
  let productsDom=document.querySelector(".products")
  
  function drawCartProductsUI(allProducts = [])
{
    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    {
        noProductsDom.innerHTML="there is no items"
    }
     let products=JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
     let productsUi=products.map((item)=>{
          return`
           <div class="product-item">
               <img src=${item.imageUrl} class="product-item-image" alt="image"  >
               <div class="product-item-desc">
                <h3>Fish Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <span>Weight : 300gm</span>
               </div>
               <div class="product-item-actions">
                <button class="add-to-cart" onClick=" removeItemFromCart (${item.id})">Remove From Cart</button>
                 
               </div>
            </div>
           `
     })

productsDom.innerHTML=productsUi;
}
drawCartProductsUI();

function removeItemFromCart(id){
     
    let productsInCart=localStorage.getItem("productsInCart")
    if(productsInCart)
    {
        let items=JSON.parse(productsInCart);
        let filteredItems=items.filter((item)=>item.id != id);
        drawCartProductsUI(filteredItems)
        localStorage.setItem("productsInCart" , JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems)
    }
  

}