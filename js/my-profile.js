
document.getElementById('formperfil').addEventListener('submit',function(e){
    
    e.preventDefault();
    localStorage.setItem('imagen',document.getElementById('imagen').value);
    localStorage.setItem('nombre',document.getElementById('nombre').value);
    localStorage.setItem('apellido',document.getElementById('apellido').value);
    localStorage.setItem('edad',document.getElementById('edad').value);
    localStorage.setItem('email',document.getElementById('email').value);
    localStorage.setItem('telefono',document.getElementById('telefono').value);
    

    mPerfil();
    document.getElementById('formperfil').reset() 

})

const mPerfil = ()=>{

    if(localStorage.getItem('nombre') !== null){
    
    document.getElementById('m-imagen').innerHTML = `<img src="${localStorage.getItem('imagen')}" class="w-50 rounded-circle mx-auto d-block">`;
    document.getElementById('m-nombre').innerHTML = `Nombre : ${localStorage.getItem('nombre')}`;
    document.getElementById('m-apellido').innerHTML = `Apellido : ${localStorage.getItem('apellido')}`;
    document.getElementById('m-edad').innerHTML = `Edad : ${localStorage.getItem('edad')}`;
    document.getElementById('m-email').innerHTML = `Email : ${localStorage.getItem('email')}`;
    document.getElementById('m-telefono').innerHTML = `Teléfono : ${localStorage.getItem('telefono')}`;

    }

    else{
        document.getElementById('m-imagen').innerHTML = `<img src="data:image/png;base64,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" class="w-50 rounded-circle mx-auto d-block">`
        document.getElementById('m-nombre').innerHTML = `Completa tu perfil`;
    }
}

mPerfil();