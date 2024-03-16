document.getElementById("btn-add-name").addEventListener('click',function(){
    const fieldName=document.getElementById("field-value")
    const fieldValue=fieldName.value;
   localStorage.setItem('name',fieldValue);
})
document.getElementById("add-age").addEventListener('click',function(){
    const ageField=document.getElementById("age-field");
    const fieldValue=ageField.value;
    localStorage.setItem('age',fieldValue);
});
document.getElementById('btn-remo').addEventListener('click',function(){
    localStorage.removeItem('name');

})
document.getElementById('remove-age').addEventListener('click',function(){
    localStorage.removeItem('age');
    
});
document.getElementById("clear-age-all").addEventListener('click',function(){
    localStorage.clear();
});
