const circleBar = () => {
    try {
        const parent = document.querySelector('.circular'),
              infoNum = parent.querySelectorAll('.circular__value'),
              circles = parent.querySelectorAll('.circular__item');

        // для работы самого счетчика
        let interval = 2000;
        let oneTime = false;

        // для разноцветных диаграм
        let color = ['#E80F88', '#0fe837', '#0f9ce8'];
        
        function moveCounter() {
            infoNum.forEach((num, i) => {
                let startValue = 0,
                    endValue = parseFloat(num.textContent),
                    duration = Math.floor(interval / endValue);
                    
                let counter = setInterval(() => {
                    startValue += 1;
                    num.textContent = `${startValue}%`;
        
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                    // для диаграмм одного цвета, ставим color основной, для разных, создаем массив с цветами
                    circles[i].style.background = `conic-gradient(${color[i]} ${startValue * 3.6}deg, #ededed 0deg)`;
                    
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

export default circleBar;