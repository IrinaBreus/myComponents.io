const filter1 = () => {
    try {
        const newMemberAddBtn = document.querySelector('.filter-1__add-member-btn'),
              darkBg = document.querySelector('.filter-1__dark-bg'),
              poppuForm = document.querySelector('.filter-1__popup'),
              closeBtn = document.querySelector('.filter-1__close-btn'),
              submitBtn = document.querySelector('.filter-1__submit'),
              modalTitle = document.querySelector('.filter-1__modal-title'),
              popupFooter = document.querySelector('.filter-1__popup-footer'),
              inputImg = document.querySelector('.filter-1__form-img img'),
              form = document.querySelector('.filter-1__form'),
              uploadImg = document.querySelector('#uploadImg');

        // вызов формы для добавления нового пользователя
        newMemberAddBtn.addEventListener('click', () => {
            submitBtn.innerHTML = "Добавить";
            modalTitle.innerHTML = "Заполните форму";
            popupFooter.style.display = 'block';
            inputImg.src = 'img/people/none.svg';

            darkBg.classList.add('filter-1__popup-active');
        });
        
        // закрытие окна с формой (не отправка данных)
        closeBtn.addEventListener('click', () => {
            darkBg.classList.remove('filter-1__popup-active');
            form.reset();
        });

        // добавление картинки в форму
        uploadImg.onchange = function() {
            if (uploadImg.files[0].size < 1000000) { //1MB = 1000000
                const fileReader = new FileReader();

                fileReader.onload = function(e) {
                    const imgUrl = e.target.result;
                    inputImg.src = imgUrl;
                };

                fileReader.readAsDataURL(uploadImg.files[0]);
            } else {
                alert("Выбраный файл слишком большой");
            }
        }


    } catch{}
}

export default filter1;