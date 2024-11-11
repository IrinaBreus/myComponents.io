const animation3 = () => {
    const fields = document.querySelectorAll('.colors-field');

    fields.forEach(field => {
        field.addEventListener('click', (e) => {
            if (e.target.parentElement.classList.contains('colors-field_active')) {
                active();
            } else {
                noActive();
                field.classList.remove('colors-field_no-active');
                field.classList.add('colors-field_active');
            }
        })
    })

    function noActive() {
        fields.forEach(elem => {
            elem.classList.add('colors-field_no-active');
        });
    }
    function active() {
        fields.forEach(elem => {
            elem.classList.remove('colors-field_no-active');
            elem.classList.remove('colors-field_active');
        });

    }
}

export default animation3;