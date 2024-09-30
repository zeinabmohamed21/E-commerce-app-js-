let productsDB =[
    {
        id:1,
        title:"Fish Food 1",
        imageUrl:'./images/fish-1.jpg',
        size:"Large"
    } ,
    {
        id:2,
        title:"Fish Food 2",
        imageUrl:"./images/fish-2.jpeg",
        size:"Large"
    } ,
    {
        id:3,
        title:"Fish Food 3",
        imageUrl:'./images/fish-3.jpg',
        size:"Large"
    } ,
    {
        id:4,
        title:"Fish Food 4",
        imageUrl:'./images/fish-4.jpg',
        size:"Large"
    } 
   ];

   localStorage.setItem("products" , JSON.stringify(productsDB))