      const sal = document.getElementById('saludo');
      const cerrar = document.getElementById('cerrar');
      
        cerrar.addEventListener('click',function(){

          localStorage.removeItem('user');
          localStorage.removeItem('pass');
          localStorage.removeItem('nombre');
          localStorage.removeItem('apellido');
          localStorage.removeItem('edad');
          localStorage.removeItem('email');
          localStorage.removeItem('telefono');
          localStorage.removeItem('imagen');
          location.href = 'login.html';

          
        })


        if (localStorage.getItem('user') === null){

            location.href = 'login.html';


        }
        else{

            sal.innerHTML += `Bienvenido, ${localStorage.getItem('user')}`

        }

        const showCartQT = (arr)=>{

          document.getElementById('cartQT').innerHTML = `${arr.articles.length}`



        }

        document.addEventListener("DOMContentLoaded", function(e){
          getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
              if (resultObj.status === "ok"){
                  arrayCart=resultObj.data;
                  showCartQT(arrayCart);
                  
                  
      
              }
      
          })});






