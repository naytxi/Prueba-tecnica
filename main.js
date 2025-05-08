function toggleMenu (){
    const links = document.querySelector('.navbar__links');
    links.classList.toggle('navbar__links--active');
}

document.addEventListener('DOMContentLoaded', function (){
const usuario = document.getElementById('login-email');
const contrasena = document.getElementById('password');
const botonLogin = document.getElementById('submitBtn');
const selector = document.getElementById('language_selector');
const parrafo = document.getElementById('date');
const imagen = document.getElementById('header_img');
const privacidadCheck = document.getElementById('privacidad');
const privacidadBoton = document.getElementById('privacidadBtn');
const ojo = document.getElementById('ojito');
const userEmail =document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

if(botonLogin && usuario && contrasena){
    botonLogin.addEventListener('click', function(event){
        event.preventDefault();
        if(usuario.value === "" || usuario.value !== "nahia@gmail.com"){
            alert("El campo email esta vacio o es incorrecto");
            return;
        }
        if(contrasena.value === "" || contrasena.value !== "123"){
            alert('No has escrito contraseña o es la incorrecta');
            return;
        }
        else{
            const userData = {
                "email":usuario.value,
                "password": contrasena.value
            }
            localStorage.setItem('usuarioLogueado', JSON.stringify(userData))
            alert("Login correcto Bienvenido")
            window.location.href = "user.html";
        }
    })
}

if(userEmail && userPassword){
    const datosUsuario = localStorage.getItem('usuarioLogueado');
    const userData = JSON.parse(datosUsuario);
    userEmail.textContent = userData.email;
    userPassword.textContent = userData.password;
}

if(ojo && contrasena){
    ojo.addEventListener('click', function(){
        if(contrasena.type === "password"){
            contrasena.type = "text";
            ojo.src = "/imagenes/ojitoabierto.jpg";
        }
        else{ 
            contrasena.type = "password";
            ojo.src = "/imagenes/ojitocerrado.jpg";
        }
    })
}

if(selector && parrafo){
    function getDateinLanguage(idioma){
        const d = new Date();
        const opciones = {weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
       return d.toLocaleDateString(idioma, opciones)
    }
    selector.addEventListener('change', function(){
        const IdiomaSeleccionado = selector.value;
        parrafo.textContent = getDateinLanguage(IdiomaSeleccionado);
    })

    parrafo.textContent = getDateinLanguage(selector.value);
}

if(imagen){
    imagen.addEventListener('mouseover', function(){
        imagen.src ='/imagenes/imagen5.jpg'
    })
    imagen.addEventListener('mouseout', function(){
        imagen.src ='/imagenes/imagen4.jpg'
    })
}

if(privacidadCheck && privacidadBoton){

    privacidadBoton.style.display = privacidadCheck.checked ? 'block' : 'none';

    privacidadCheck.addEventListener('change', function(){
        if(this.checked){
            privacidadBoton.style.display = 'block';
        }
        else{
            privacidadBoton.style.display = 'none';
        }
    });
}

})