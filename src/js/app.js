
/*--===========ventana Modal=============--*/
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
/*--===========ventana Modal=============--*/