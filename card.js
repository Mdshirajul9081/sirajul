/*document.getElementById('product').addEventListener('click',function(){
const productField=document.getElementById('add-product')
const productValue=productField.value;
localStorage.setItem('name',productValue);
});
document.getElementById("product").addEventListener('click',function(){
    const quentatiField=document.getElementById('add-quentati')
    const quentatiValue=quentatiField.value;
    localStorage.setItem('quentati',quentatiValue);
})*/
const getInputValueById= id =>{
    const inputField=document.getElementById(id)
    const inputValue=inputField.value;
    inputField.value='';
    return inputValue;

}
const addProduct = () =>{
    const product=getInputValueById('add-product');
    const quantity =getInputValueById('add-quantity');
    localStorage.getItem(product,quantity);
}