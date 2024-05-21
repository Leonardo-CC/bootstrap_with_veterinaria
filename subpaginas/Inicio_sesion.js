(function () {
    'use strict'
    
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); 

    if (this.checkValidity()) {
        window.location.href = 'pag_princip/pag_princip.html';
    } else {
        document.getElementById('alertaSesion').classList.remove('d-none');
    }
});