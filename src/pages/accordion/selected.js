
const selected = () => {
    const dropDown = document.querySelector('.selected__wrapper'),
          select = dropDown.querySelector('.selected__header'),
          options = dropDown.querySelectorAll('.selected__menu li'),
          input = dropDown.querySelector('.selected__input');

    select.addEventListener('click', (e) => {
        dropDown.classList.toggle('dd-active');
        e.stopPropagation();
    });
    
    options.forEach(elem => {
        elem.addEventListener('click', () => {
            clearClassActive();
            elem.classList.add('options-active');
            
            select.firstElementChild.innerText = elem.innerText;
            input.value = elem.dataset.value;
            closeDropDown();
        });
    });
    
    document.addEventListener('click', (e) => {
        if (e.target !== select ) {
            closeDropDown();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            closeDropDown();
        };
    });
    
    function clearClassActive() {
        options.forEach(elem => elem.classList.remove('options-active'))
    }
    function closeDropDown() {
        dropDown.classList.remove('dd-active');
    }
}

export default selected;