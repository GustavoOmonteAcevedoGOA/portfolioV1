document.addEventListener('DOMContentLoaded', function() {
   
    Modals();
    darkMode();
    Changetheme();
    AnimacionAparicion();
    Shownav();
    ToMenu();
    Pages();
    scrollNav();
    navegacionFija();
    
});
/*--===========ventana Modal=============--*/
function Modals() {
    const botonesAbrir = document.querySelectorAll('button[data-toggle="modal"]');

    const botonesCerrar = document.querySelectorAll('button[data-dismiss="modal"]');

    const showModals = 'show';
    const hideModals = 'modal-dialog';
    const hideModalsClass = 'modal-return';

    botonesAbrir.forEach(function(botonAbrir) {
        botonAbrir.addEventListener('click', function(event) {
            const targetModal = event.target;
            const targetModalAtributo = targetModal.getAttribute('data-target');

            const ventanaModal = document.querySelector(targetModalAtributo);


            if (!ventanaModal.classList.contains(showModals)) {
                document.body.classList.add('modal-open');
                document.body.style.paddingRight = '17px';
                ventanaModal.style.display = 'block';
                ventanaModal.style.paddingRight = '17px';

                setTimeout(animarAperturaModal, 300);

                function animarAperturaModal() {
                    ventanaModal.classList.add(showModals)
                }

                var newDiv = document.createElement('div');

                newDiv.classList.add('modal-backdrop', 'fade', 'show');
                newDiv.setAttribute('id', 'modal-backdrop');
                document.body.appendChild(newDiv);



            } else {
                ventanaModal.classList.remove(showModals);
            }
        })
    });

    botonesCerrar.forEach(function(botonCerrar) {
        botonCerrar.addEventListener('click', function(event) {

            let animacionCerrar = event.target;
            let targetCerrarModal = event.target;


            while (!animacionCerrar.classList.contains(hideModals)) {
                animacionCerrar = animacionCerrar.offsetParent;
            }
            
            while (!targetCerrarModal.classList.contains(showModals)) {
                targetCerrarModal = targetCerrarModal.offsetParent;
            }           


            if (targetCerrarModal.classList.contains(showModals)) {
                document.body.classList.remove('modal-open');
                document.body.style.paddingRight = '';

                animacionCerrar.classList.add(hideModalsClass);

                setTimeout(animarCierreModal, 301);

                function animarCierreModal() {

                    targetCerrarModal.style.display = 'none';
                    targetCerrarModal.style.paddingRight = '';
                    targetCerrarModal.classList.remove(showModals)
                    animacionCerrar.classList.remove(hideModalsClass);


                }

                var borrarDiv = document.getElementsByClassName('modal-backdrop fade show');                
                document.body.removeChild(borrarDiv[0]);
            }
        })
    });
}
/*--===========wb_sunny=============--*/
function darkMode() {
    const prefiereDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    const iconDarkMode = document.querySelector('.tema-dark');
    const darkMode = 'dark-mode'
    const selectedTheme = localStorage.getItem('selected-theme');
    const getCurrentTheme = () => document.body.classList.contains(darkMode) ? 'dark' : 'light'
        // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkMode)
            /* agregar cambios de color */
        if (selectedTheme === 'dark') {
            iconDarkMode.setAttribute('data-descr', "wb_sunny");
        } else {
            iconDarkMode.setAttribute('data-descr', "nightlight");
        }
    } else {
        if (prefiereDarkMode.matches) {
            document.body.classList.add(darkMode);
            iconDarkMode.setAttribute('data-descr', "wb_sunny");
        } else {
            document.body.classList.remove(darkMode);
            iconDarkMode.setAttribute('data-descr', "nightlight");
        }

        prefiereDarkMode.addEventListener('change', function() {
            if (prefiereDarkMode.matches) {
                document.body.classList.add(darkMode);
                iconDarkMode.setAttribute('data-descr', "wb_sunny");
            } else {
                document.body.classList.remove(darkMode);
                iconDarkMode.setAttribute('data-descr', "nightlight");
            }
        });
    }
    const botonDarkMode = document.querySelector('.tema-dark');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle(darkMode);
        localStorage.setItem('selected-theme', getCurrentTheme());
        if (document.body.classList.contains(darkMode)) {
            iconDarkMode.classList.add('animar-cambio');
            setTimeout(() => {
                iconDarkMode.setAttribute('data-descr', "wb_sunny");
                iconDarkMode.classList.remove('animar-cambio');
            }, 1000);
        } else {
            iconDarkMode.classList.add('animar-cambio');
            setTimeout(() => {
                iconDarkMode.setAttribute('data-descr', "nightlight");
                iconDarkMode.classList.remove('animar-cambio');
            }, 1000);
        }
    });
}


function Changetheme(){
    const Azul = document.querySelector('.tema-Azul');
    const Pulpura = document.querySelector('.tema-Pulpura');
    const Rojo = document.querySelector('.tema-Rojo');
    const Fondo = document.querySelector('.fondo > img');    
    const FolderImg = 'build/img/';
    const SaveName= Fondo.src.split(FolderImg);   
    
    Azul.addEventListener('click', function(){

        document.body.classList.add('azul');
        document.body.classList.remove('pulpura');
        document.body.classList.remove('rojo');
        Fondo.src=SaveName[0]+FolderImg+SaveName[1];
    })
    Pulpura.addEventListener('click', function(){
        
        document.body.classList.remove('azul');
        document.body.classList.add('pulpura');

        document.body.classList.remove('rojo');
        Fondo.src=SaveName[0]+FolderImg+'fondo-verde.webp';
    })
    Rojo.addEventListener('click', function(){        
        document.body.classList.remove('azul');
        document.body.classList.remove('pulpura');
        document.body.classList.add('rojo');
        Fondo.src=SaveName[0]+FolderImg+SaveName[1];
    })
}
function AnimacionAparicion(){
    /*--===========SCROLL ANIMACION DE APARICION=============--*/

const animacionAparicion = document.querySelectorAll('.animacion-aparicion');

let space = 200;

/*--===========USAMOS ESTA VARIABLE PARA DETERMINAR SI SUBE O BAJA=============--*/
function Aparecer() {
    const scrollAparecer = document.documentElement.scrollTop;
    
    for (const cuadro of animacionAparicion) {
        
        if((cuadro.getBoundingClientRect().top  < scrollAparecer + space) ){
            
                cuadro.style.opacity = 1;
                cuadro.classList.add('animacion-aparicion-arriba');
            }
    }
}
window.addEventListener('scroll', Aparecer);

/*--===========SCROLL ANIMACION DE APARICION=============--*/
}

function Shownav() {

        const nav = document.querySelector('.navegacion');
        const navMenu = document.querySelector('.menu-icon');
        
        
        const navClose = document.querySelector('.close');
        navMenu.addEventListener('click', () => {
            nav.classList.toggle('visible');
        });
        navClose.addEventListener('click', () => {
            nav.classList.toggle('visible');
        });
}
function ToMenu(){
    const LinkMenu = document.querySelectorAll('a[data-menu="menu"]');
    const nav = document.querySelector('.navegacion');
    
    for (const link of LinkMenu) {
        link.addEventListener('click',()=>{
            nav.classList.remove('visible');
        });
    }
}
function Pages(){
    const Page1 = document.querySelector('#page1');
    const Page2 = document.querySelector('#page2');
    const ToPage1 = document.querySelector('.to-page1');
    const ToPage2 = document.querySelector('.to-page2');
    ToPage1.addEventListener('click', ()=>{
        Page1.classList.remove('hidepage-left');
        Page2.classList.add('hidepage-right');
        ToPage1.classList.add('active');
        ToPage2.classList.remove('active');
    })
    ToPage2.addEventListener('click', ()=>{
        Page1.classList.add('hidepage-left');
        Page2.classList.remove('hidepage-right');
        ToPage1.classList.remove('active');
        ToPage2.classList.add('active');
    })

    
}
function navegacionFija(){
    const barra = document.querySelector('HEADER');
    const implementacion = document.querySelector('#proyectos');
    const scrollAparecer = document.documentElement.scrollTop;
    const menu = document.querySelector('.navegacion');
    

    window.addEventListener('scroll', ()=>{
        if(scrollAparecer>implementacion.getBoundingClientRect().top){
            if(!menu.classList.contains('visible')){
                barra.classList.add('fijo');
            }
             
        }else{
            barra.classList.remove('fijo');
        }


    });  
    

}
function scrollNav(){
    const enlaces = document.querySelectorAll('LI > A');
    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const irA = e.target.attributes.href.value;
            const seccion = document.querySelector(irA);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/* animacion para subir lento */

function scrollUp() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20))
    }
}


document.getElementById("scroll-top").addEventListener("click", scrollUp);