let products=JSON.parse(localStorage.getItem("products"));
let productId=localStorage.getItem("productId");
let productDetails = products.find(item => item.id == productId)


let itemDom =document.querySelector(".item-details")
itemDom.innerHTML=`
  <img src="${productDetails.imageUrl}">
  <h2>${productDetails.title}</h2>
  <span>size:${productDetails.size}</span>
`

