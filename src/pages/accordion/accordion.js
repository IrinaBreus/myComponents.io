// включается и выключается каждый по-отдельности, независимо друг от друга

// const accordion = () => {
//     const triggers = document.querySelectorAll('.accordion-2__header');

//     triggers.forEach(trigger => {
//         trigger.addEventListener('click', () => {
//             trigger.parentElement.classList.toggle('open');
//         })
//     })
// }

// при клике на вопрос, ответ под ним откроется, все остальные закроются
const accordion = () => {
    const contents = document.querySelectorAll('.accordion-2__content');
    const triggers = document.querySelectorAll('.accordion-2__header');

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            if (contents[i].classList.contains('open')) {
                closeAll();
            } else {
                closeAll();
                contents[i].classList.add('open');
            }
        })
    })

    function closeAll() {
        contents.forEach(elem => elem.classList.remove('open'));
    }
}

export default accordion;