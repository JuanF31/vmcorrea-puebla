//Function that initial AOS
AOS.init({
    duration: 1000
});
//End Function AOS

//Open sidebarmenu responsive
let btnOpen = document.querySelector('#btn__abrir')
let sidebar = document.querySelector('.sidebar')
let btnClose = document.querySelector('#btn__cerrar')

btnOpen.onclick = ( e ) => {
    e.preventDefault()
    sidebar.classList.add('open')
    sidebar.classList.add('animate__fadeInLeft');
}
btnClose.onclick = ( e ) => {
    e.preventDefault()
    sidebar.classList.remove('open')
    sidebar.classList.remove('animate__fadeInLeft');
}
//End sidebar

// Function for dropdown
$(document).ready(function(){
    $('#btn__servicios__dropdown').click(function(){
        $(this).next('.sub__menu__responsive').slideToggle()
        $(this).find('.dropdown').toggleClass('rotate')
    });
});
// End function

//Modal
let btnModal = document.querySelector( '#servicios__modal' )
let modal = document.querySelector( '#myModal' )
var span = document.getElementsByClassName("close__modal")[0]

btnModal.onclick = ( e ) => {
    e.preventDefault()
    modal.style.display = 'flex'
}
span.onclick = ( e ) => {
    e.preventDefault()
    modal.style.display = 'none'
}
window.onclick = ( e ) => {
    if(e.target === modal){
        modal.style.display = 'none'
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
        case "Industrial 4.0":
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
        case "Industrial 4.0":
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
