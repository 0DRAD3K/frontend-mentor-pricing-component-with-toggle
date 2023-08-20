const price1 = document.querySelector('#price_1');
const price2 = document.querySelector('#price_2');
const price3 = document.querySelector('#price_3');
const btn = document.querySelector('#toggle');
btn.addEventListener('click',()=>{
    if(btn.checked === true){
        price1.textContent = '199.99';
        price2.textContent = '249.99';
        price3.textContent = '399.99';
    }else{
        price1.textContent = '19.99';
        price2.textContent = '24.99';
        price3.textContent = '39.99';
    }
})