      const sal = document.getElementById('saludo');
      const cerrar = document.getElementById('cerrar');

        cerrar.addEventListener('click',function(){

          localStorage.removeItem('user');
          localStorage.removeItem('pass');
          location.href = 'login.html';


        })


        if (localStorage.getItem('user') === null){

            location.href = 'login.html';


        }
        else{

            sal.innerHTML += `Bienvenido, ${localStorage.getItem('user')}`

        }