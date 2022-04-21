//Function that initial AOS
AOS.init({
    duration: 1000
});
//End Function AOS

let body = document.getElementsByTagName('body')[0]


//Open sidebarmenu responsive
let btnOpen = document.querySelector('#btn__abrir')
let sidebar = document.querySelector('.sidebar')
let btnClose = document.querySelector('#btn__cerrar')

btnOpen.onclick = ( e ) => {
    e.preventDefault()
    sidebar.classList.add('open')
    sidebar.classList.add('animate__fadeInLeft');
    body.classList.add('block-scroll')
}
btnClose.onclick = ( e ) => {
    e.preventDefault()
    sidebar.classList.remove('open')
    sidebar.classList.remove('animate__fadeInLeft')
    body.classList.remove('block-scroll')
}
//End sidebar

// Function for dropdown
$(document).ready(function(){
    $('#btn__servicios__dropdown').click(function( e ){
        e.preventDefault()
        $(this).next('.sub__menu__responsive').slideToggle()
        $(this).find('.dropdown').toggleClass('rotate')
    })
})
// End function

//Modal
let btnModal = document.querySelector( '#servicios__modal' )
let modal = document.querySelector( '#myModal' )
let span = document.getElementsByClassName("close__modal")[0]


let wrench =  document.querySelector('.wrench')
let servicio = document.querySelector('.servicio')

btnModal.onclick = ( e ) => {
    e.preventDefault()
    btnModal.classList.add('activo')
    wrench.classList.add('activo')
    servicio.classList.add('activo')
    body.classList.add('block-scroll')
    removeActive()
    modal.style.display = 'flex'
}
span.onclick = ( e ) => {
    e.preventDefault()
    modal.style.display = 'none'
    body.classList.remove('block-scroll')
    btnModal.classList.remove('activo');
    wrench.classList.remove('activo')
    servicio.classList.remove('activo')
    setActiveLink()
}
window.onclick = ( e ) => {
    if(e.target === modal){
        modal.style.display = 'none'
        body.classList.remove('block-scroll')
        btnModal.classList.remove('activo');
        wrench.classList.remove('activo')
        servicio.classList.remove('activo')
        setActiveLink()
    }
}
//End Modal



let megaLink = document.querySelectorAll('.mega__link')
let icono = document.querySelector('#icono')
let imagen = document.querySelector('#imagen')


megaLink.forEach(link => link.onmouseover = ( e ) => {
    switch(e.target.innerText){
        case 'Riggin':
            document.querySelector('#ico__riggin').classList.remove('d-none')
            document.querySelector('#img__riggin').classList.remove('d-none')
        break;
        case 'Automatización':
            document.querySelector('#ico__automatizacion').classList.remove('d-none')
            document.querySelector('#img__automatizacion').classList.remove('d-none')
        break;
        case "Industria 4.0":
            document.querySelector('#ico__industrial').classList.remove('d-none')
            document.querySelector('#img__industrial').classList.remove('d-none')
        break;
        case "Maquinados":
            document.querySelector('#ico__maquinados').classList.remove('d-none')
            document.querySelector('#img__maquinados').classList.remove('d-none')
        break;
        case "Seguridad Industrial":
            document.querySelector('#ico__seguridad').classList.remove('d-none')
            document.querySelector('#img__seguridad').classList.remove('d-none')
        break;
        case "Manteniminto General":
            document.querySelector('#ico__mgeneral').classList.remove('d-none')
            document.querySelector('#img__mgeneral').classList.remove('d-none')
        break;
        case "Mantenimiento Industrial":
            document.querySelector('#ico__mindustrial').classList.remove('d-none')
            document.querySelector('#img__mindustrial').classList.remove('d-none')
        break;
    }
})

megaLink.forEach(link => link.onmouseout = ( e ) => {
    switch(e.target.innerText){
        case 'Riggin':
            document.querySelector('#ico__riggin').classList.add('d-none')
            document.querySelector('#img__riggin').classList.add('d-none')
        break;
        case 'Automatización':
            document.querySelector('#ico__automatizacion').classList.add('d-none')
            document.querySelector('#img__automatizacion').classList.add('d-none')
        break;
        case "Industria 4.0":
            document.querySelector('#ico__industrial').classList.add('d-none')
            document.querySelector('#img__industrial').classList.add('d-none')
        break;
        case "Maquinados":
            document.querySelector('#ico__maquinados').classList.add('d-none')
            document.querySelector('#img__maquinados').classList.add('d-none')
        break;
        case "Seguridad Industrial":
            document.querySelector('#ico__seguridad').classList.add('d-none')
            document.querySelector('#img__seguridad').classList.add('d-none')
        break;
        case "Manteniminto General":
            document.querySelector('#ico__mgeneral').classList.add('d-none')
            document.querySelector('#img__mgeneral').classList.add('d-none')
        break;
        case "Mantenimiento Industrial":
            document.querySelector('#ico__mindustrial').classList.add('d-none')
            document.querySelector('#img__mindustrial').classList.add('d-none')
        break;
    }
})

let mq = window.matchMedia('(min-width: 768px)')
const screenTest = ( e ) => {
    if(e.matches){
        ( sidebar.classList.contains('open') ) ? sidebar.classList.remove('open') : null
    }
}
mq.addListener(screenTest)


const setActiveLink = () => {
    let urlActual = window.location.pathname;
    switch(urlActual){
        case "/index.html":
            document.querySelector('#link__home').classList.add('activo')
            document.querySelector('.fa-house').classList.add('activo')
            document.querySelector('.inicio').classList.add('activo')
        break;
        case "/nosotros.html":
            document.querySelector('#link__nosotros').classList.add('activo')
            document.querySelector('.fa-users').classList.add('activo')
            document.querySelector('.nosotros').classList.add('activo')
        break;
        case "/proyectos.html":
            document.querySelector('#link__proyectos').classList.add('activo')
            document.querySelector('.folder').classList.add('activo')
            document.querySelector('.proyecto').classList.add('activo')
        break;
        case "/mundovmc.html":
            document.querySelector('#link__mundovmc').classList.add('activo')
            document.querySelector('.earth').classList.add('activo')
            document.querySelector('.vmc').classList.add('activo')
        break;
        case "/contacto.html":
            document.querySelector('#link__contacto').classList.add('activo')
            document.querySelector('.book').classList.add('activo')
            document.querySelector('.contacto').classList.add('activo')
        break;
        case "/catalogos.html":
            document.querySelector('#link__catalogos').classList.add('activo')
            document.querySelector('.open__book').classList.add('activo')
            document.querySelector('.catalogo').classList.add('activo')
        break;
        default:
            if(urlActual === "/riggin.html" || urlActual === "/automatizacion.html" || urlActual === "/industria.html" ||
                urlActual === "/maquinados.html" || urlActual === "/seguridad_industrial.html" || urlActual === "/mtto_general.html" || urlActual === "/mtto_industrial.html"){
                document.querySelector('.wrench').classList.add('activo')
                document.querySelector('.servicio').classList.add('activo')
                document.querySelector('#servicios__modal').classList.add('activo')
            }
        break;
    }
}

const removeActive = () => {
    document.querySelector('#link__home').classList.remove('activo')
    document.querySelector('.fa-house').classList.remove('activo')
    document.querySelector('.inicio').classList.remove('activo')
    document.querySelector('#link__nosotros').classList.remove('activo')
    document.querySelector('.fa-users').classList.remove('activo')
    document.querySelector('.nosotros').classList.remove('activo')
    document.querySelector('#link__proyectos').classList.remove('activo')
    document.querySelector('.folder').classList.remove('activo')
    document.querySelector('.proyecto').classList.remove('activo')
    document.querySelector('#link__mundovmc').classList.remove('activo')
    document.querySelector('.earth').classList.remove('activo')
    document.querySelector('.vmc').classList.remove('activo')
    document.querySelector('#link__contacto').classList.remove('activo')
    document.querySelector('.book').classList.remove('activo')
    document.querySelector('.contacto').classList.remove('activo')
    document.querySelector('#link__catalogos').classList.remove('activo')
    document.querySelector('.open__book').classList.remove('activo')
    document.querySelector('.catalogo').classList.remove('activo')
}

document.addEventListener('DOMContentLoaded', setActiveLink())


