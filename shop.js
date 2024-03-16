const getInputValueById = id=>{
    const inputField=document.getElementById(id)
    const inputValue=inputField.value;
    inputField.value="";
    return inputValue
}
const addProduct=() =>{
    const product =getInputValueById("add-product-name")
    const quantity =getInputValueById("add-product-quantity")
    console.log(product,quantity);
    //display product add on ui
    displayProduct(product,quantity);
    //simple set in local stroage 
    //localStorage.setItem(product,quantity);
    saveItemToLocalStroage(product,quantity)

}
const getShoppingCartFromLocalStorage=()=>{
    let saveCart=localStorage.setItem('cart');
    let cart ={};
    if(saveCart){
        cart= JSON.parse(saveCart);
    }
    return cart;
}
const saveItemToLocalStroage=(product,quantity)=>{
    const cart=getShoppingCartFromLocalStorage();
   cart[product] =quantity;
   const cartStringFied =json.stringify(cart); 
   //save to local stroage
   localStorage.setItem('cart',cartStringFied);

}

const displayProduct = (product, quantity) => {
    // Get reference to productContainer element
    const productContainer = document.getElementById("product-container");
    const li =document.createElement('li');
    li.innerText=`${product} : ${quantity}`;
    productContainer.appendChild(li);

}