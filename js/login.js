   const form = document.getElementById('form');
   const username = document.getElementById('user');
   const password = document.getElementById('pass');
   form.addEventListener('submit',function(e){

            e.preventDefault();

            let users= 

                {
                    user: username.value,
                    pass: password.value
                };
            

            localStorage.setItem('user',users.user);
            localStorage.setItem('pass',users.pass);
            location.href = 'index.html';

        });
