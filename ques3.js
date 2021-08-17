// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productList=document.querySelector('#list');

form.addEventListener('submit',function(evt){
    evt.preventDefault();

    const product=form.elements.product;
    const qty=form.elements.qty;

    producDet(product.value,qty.value);
    product.value='';
    qty.value='';

})

const producDet= function(product,qty)
{
    const liTag=document.createElement('li');
    liTag.append(qty);
    liTag.append(` ${product}`);
    productList.append(liTag);

}