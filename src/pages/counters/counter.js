const counter = () => {
    try {
        const parent = document.querySelector('.counter'),
              cardsNum = document.querySelectorAll('.counter__num');

        // для работы самого счетчика
        let interval = 4000;
        let oneTime = false;
        
        function moveCounter() {
            cardsNum.forEach(num => {
                let startValue = 0,
                    endValue = num.dataset.count,
                    duration = Math.floor(interval / endValue);
                
                let counter = setInterval(() => {
                    startValue += 1;
                    num.textContent = startValue;
        
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            })
            oneTime = true;
        }

        // поиск местоположения и запуск счетчика
        const position = parent.offsetTop,
            height = parent.getBoundingClientRect().height;

        document.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > position - height * 1.5 && !oneTime) {
                moveCounter();
            }
        })
    } catch {}
}

export default counter;