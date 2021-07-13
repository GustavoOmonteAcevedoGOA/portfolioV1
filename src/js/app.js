document.addEventListener('DOMContentLoaded', function() {
   
    Modals();
    darkMode();
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
            console.log(animacionCerrar);
            console.log('el padre con la clase ' + hideModals);

            while (!targetCerrarModal.classList.contains(showModals)) {
                targetCerrarModal = targetCerrarModal.offsetParent;
            }
            console.log(targetCerrarModal);
            console.log('el padre con la clase show');


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
                console.log(borrarDiv);
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
