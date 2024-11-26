const lineBar = () => {
    try {
        const parent = document.querySelector('.line-bar'),
              infoNum = parent.querySelectorAll('.line-bar__num span'),
              lines = parent.querySelectorAll('.line-bar__scale span');

        // для работы самого счетчика
        let interval = 4000;
        let oneTime = false;
        
        function moveCounter() {
            infoNum.forEach(num => {
                let startValue = 0,
                    endValue = num.textContent,
                    duration = Math.floor(interval / endValue);
                    
                let counter = setInterval(() => {
                    startValue += 1;
                    num.textContent = startValue;
        
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            })
            lines.forEach(line => {
                line.style.width = '100%';
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

export default lineBar;