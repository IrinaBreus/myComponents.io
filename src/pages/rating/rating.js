let data = [
    {
        'star': 5,
        'count': 199980,
    },
    {
        'star': 4,
        'count': 39300,
    },
    {
        'star': 3,
        'count': 25050,
    },
    {
        'star': 2,
        'count': 10070,
    },
    {
        'star': 1,
        'count': 1020,
    },
]

const rating = () => {
    // для динамичной системы оценок
    try {
        const progress = document.querySelector('.rating__progress'), //обертка для рейтинга, в которую помещается весь контент
              totalUser = document.querySelector('.rating__star-txt'),
              totalStars = document.querySelector('.rating__star-num'),
              activeStars = document.querySelector('.rating__star-inner');

        let totalRating = 0,
            retingStars = 0;

        data.forEach(rating => {
            totalRating += rating.count;
            retingStars += rating.count * rating.star;
        });

        data.forEach(rating => {
            let styleWidth = (rating.count / totalRating) * 100;
            let ratingProgress = `
                <div class="rating__progress-value">
                    <p class="rating__star">${rating.star}
                        <span>&#9733;</span>
                    </p>
                    <div class="rating__progress-bar">
                        <div class="rating__progress-item" style="width: ${styleWidth}%;"></div>
                    </div>
                    <p class="rating__progress-txt">${rating.count.toLocaleString()}</p>
                </div>
            `;

            progress.innerHTML += ratingProgress;
        });

        let ratingAverage = (retingStars / totalRating).toFixed(1);
        totalUser.innerHTML = totalRating.toLocaleString();
        totalStars.innerHTML = ratingAverage;
        activeStars.style.width = `${(ratingAverage / 5) * 100}%`;
    } catch{}

    // для оценки данных с отправкой на сервер
    try {
        const ratings = document.querySelectorAll('.rating-2');
        if (ratings.length > 0) {
            initRatings();
        }

        // для выведения рейтинга с получением цифры из html
        function initRatings() {
            let ratingActive, ratingValue;
            ratings.forEach(elem => initRating(elem));

            function initRating(rating) {
                initRatingVars(rating);
                setRatingActiveWidth();

                // проверяем наличие доп.класса, при котором можно изменять рейтинг на стрю
                if (rating.classList.contains('rating-2_set')) {
                    setRating(rating);
                }
            }

            function initRatingVars(rating) {
                ratingActive = rating.querySelector('.rating-2__active');
                ratingValue = rating.querySelector('.rating-2__value');
            }

            function setRatingActiveWidth(index = ratingValue.innerText) {
                ratingActive.style.width = `${index / 0.05}%`;
            }

            function setRating(rating) {
                // получаем inputs и работаем с каждым
                const stars = rating.querySelectorAll('.rating-2__item');
                stars.forEach((star, i) => {
                    star.addEventListener('mouseenter', () => {
                        initRatingVars(rating);
                        setRatingActiveWidth(star.value);
                    })
                    star.addEventListener('mouseleave', () => {
                        setRatingActiveWidth();
                    })
                    star.addEventListener('click', () => {
                        initRatingVars(rating);

                        if (rating.dataset.ajax) {
                            // для "отправки" на сервер
                            setRatingValue(star.value, rating);
                            console.log(rating.dataset.ajax)
                        } else {
                            // отобразить оценку, полученную с "сервера" (в данном случае с JSON-файла)
                            ratingValue.innerHTML = i + 1;
                            setRatingActiveWidth();
                        }
                    })
                })
            }
            async function setRatingValue(value, rating) {
                // добавляем класс на момент отправки, чтобы пользователь видел, что что-то происходит
                if (!rating.classList.contains('rating-2_sending')) {
                    rating.classList.add('rating-2_sending');
                }
                
                // отправка данных (value) на сервер 
                let response = await fetch('rating.json', {
                    method: 'GET',
                    // код для отправки на сервер, а не json-файл
                    // body: JSON.stringify({
                    //     userRating: value
                    // }),
                    // headers: {
                    //     'content-type': 'application/json'
                    // }
                });
                if (response.ok) {
                    const result = await response.json();
                    
                    // работаем с новым результатом, полученным с "сервера"
                    const newRating = result.newRating;
                    ratingValue.innerHTML = newRating;
                    
                    setRatingActiveWidth();
                    rating.classList.remove('rating-2_sending');
                } else {
                    alert("Ошибка");
                    rating.classList.remove('rating-2_sending');
                }
            }
        }

    } catch {}
}

export default rating;