var array_product
var array_products
var array_comments




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            array_product = resultObj.data;
            

        }
    })

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            array_products = resultObj.data;
            

        }
    })

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            array_comments = resultObj.data;
            showProduct(array_product,array_products,array_comments);
            showComments(array_comments);
        }
    })

});


function showProduct(arrayProd,arrayProducts){

    document.getElementById('productName').innerHTML = arrayProd.name;
    document.getElementById('productDescription').innerHTML = arrayProd.description;
    document.getElementById('productCost').innerHTML = arrayProd.cost + ` USD`;
    document.getElementById('productSold').innerHTML = arrayProd.soldCount;
    document.getElementById('productCategory').innerHTML = arrayProd.category;
    for(let imagen of arrayProd.images){


        document.getElementById('productImages').innerHTML += `<img class="img m-3" src=${imagen} width="250px"></img>`;

    }
 
    for(let reco of arrayProd.relatedProducts){

        document.getElementById('productRelated').innerHTML += `<img class="img m-3" src=${arrayProducts[parseInt(reco)].imgSrc} width="250px"></img>`;
         

    

    }


}



function showComments(arrayComments){
    for(let comment of arrayComments){

        document.getElementById('comentarios').innerHTML +=`<dt>${comment.user}</dt> 
                                                <dd class="estrellitas">${estrellitas(comment.score)} <dd>
                                                            
                                                            <dd>${comment.description}</dd>
                                                            <hr>`


    }
}

function estrellitas(score){

    if(score === 1){
        return '★';
    }
    else if(score === 2){
        return '★★';
    }
    else if(score === 3){
        return '★★★';
    }
    else if (score === 4){

        return '★★★★';
    }
    else if (score === 5){
        return '★★★★★';
    }
    else{
        return '0';
    }
}

document.getElementById('formComment').addEventListener('submit',function(e){

    document.getElementById('comentarios').innerHTML = '';
    e.preventDefault();
    let comentario = {};
    comentario.user = localStorage.getItem('user');
    comentario.score = parseInt(document.getElementById('valoration').value);
    comentario.description = newcomment.value;
    array_comments.push(comentario);
    showComments(array_comments);






})




