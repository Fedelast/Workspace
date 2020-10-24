let arrayCart;
const cartURL="https://japdevdep.github.io/ecommerce-api/cart/654.json";
let i=0;


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(cartURL).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayCart=resultObj.data;
            showCart(arrayCart);
            
            

        }

    })});
    
function showCart(arrayC)
{
    i=0;
    for (let prod of arrayC.articles){

        document.getElementById("cartList").innerHTML+=`
        <tr>
        <th scope="row"><img class="w-25 border" src="${prod.src}" alt=""></th>
        <td class="pt-5">${prod.name}</td>
        <td class="pt-5" id="price${i}">${(prod.currency=="UYU")? (prod.unitCost/40):(prod.unitCost)}</td>
        <td class="pt-5"> <input class="w-75 text-center" type="number" id="count${i}" value="${prod.count}" min="1" oninput="calculatePartial(${i})"> </td>
        <td class="pt-5" id="subtotal${i}">${((prod.currency=="UYU")? (prod.unitCost/40):(prod.unitCost))*prod.count}</td>
        <td class="pt-5 hovermouse"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onclick="eliminate(${i});">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg></td>
        </tr>`
      i++;
    }

    calculateTotal();
};



function eliminate(a){
    let cartQuantity=parseInt(document.getElementById('cartQT').innerHTML);
    if (arrayCart.articles.length>1){
      arrayCart.articles.splice(a,1);
      document.getElementById('cartList').innerHTML=``;
      showCart(arrayCart);
      document.getElementById('cartQT').innerHTML=`${cartQuantity-1}`;
    }
    else{
      document.getElementById("cartList").innerHTML=`<h2 class="text-center mt-4">El carrito esta vacío</h2>`;
      document.getElementById('cartQT').innerHTML=0;
      document.getElementById('envioCto').innerHTML=0;
      document.getElementById('total').innerHTML=0;
    }
  
  }


function calculatePartial(a)
{
    let precio=document.getElementById(`price${a}`).innerHTML;
    let cantidad=document.getElementById(`count${a}`).value;
    document.getElementById(`subtotal${a}`).innerHTML=`${parseInt(precio*10)*parseInt(cantidad)/10}`;
    calculateTotal();
}
function calculateTotal(){
    let sum=0;
    for(j=0;j<i;j++){
        sum +=parseInt((document.getElementById(`subtotal${j}`).innerHTML));
    }

    let costoEnvio = document.getElementById("shipping").value;
    let valorEnvio = (costoEnvio/100) * sum;
    document.getElementById('envioCto').innerHTML = `USD ${valorEnvio.toFixed(2)}`;
    document.getElementById('total').innerHTML=`USD ${(sum*(1+costoEnvio/100)).toFixed(2)}`;
    
    
    
};


