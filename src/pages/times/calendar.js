const calendar = () => {
	try {
		const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
		const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

		const monthsWrapper = document.querySelector('.calendar__months'),
			  title = document.querySelector('.calendar__current-year'),
			  btnPrev = document.querySelector('.calendar__btn_prev'),
			  btnNext = document.querySelector('.calendar__btn_next') ;

		let date = new Date();
		let currentYear = date.getFullYear();
		
		let yearNow = date.getFullYear(),
		    monthNow = date.getMonth(),
			today = date.getDate();

		getCalendar();

		btnPrev.addEventListener('click', (e) => {
			e.preventDefault();
			currentYear = currentYear - 1;
			changeCalendar(currentYear);
		});
		
		btnNext.addEventListener('click', (e) => {
			e.preventDefault();
			currentYear = currentYear + 1;
			changeCalendar(currentYear);
		})

		function changeCalendar(year) {
			title.innerHTML = year;	
			monthsWrapper.innerHTML = '';
			getCalendar();
		}
		function getCalendar() {
			for (let i = 0; i < months.length; i++) {
				let monthWrap = document.createElement('div');
				monthWrap.className = 'calendar__month';

				monthWrap.innerHTML = `
					<div class="calendar__month-header">
						<h4 class="calendar__month-title">${months[i]}</h4>
					</div>
					<ul class="calendar__weeks"></ul>
					<ul class="calendar__days"></ul>
				`
				monthsWrapper.insertAdjacentElement("beforeend", monthWrap);
				getWeeks(monthWrap.querySelector('.calendar__weeks'));
				getDates(monthWrap.querySelector('.calendar__days'), i);
			}
		}

		function getWeeks(weeksWrapper) {
			let day = "";
			for (let i = 0; i < days.length; i++) {
				day += `<li>${days[i]}</li>`;
			};
			weeksWrapper.innerHTML = day;
		}

		function getDates(daysWrapper, month) {
			let liTag = '';

			// получаем первый день недели месяца и заполняем эти дни пустыми li
			const firstDayOfMonth = new Date(currentYear, month, 1).getDay();

			// если первый день месяца воскресение, то для такого месяца запустить отдельный цикл с фиксированным кол-вом повторов
			if (firstDayOfMonth == 0 ) { 
				for (let i = firstDayOfMonth; i < 6; i++) {
					liTag += '<li></li>'
				}				
			} else {
				for (let i = 1; i < firstDayOfMonth; i++) {
					liTag += '<li></li>'
				}
			}

			// получаем последний день месяца и заполняем этим количетвом цифр li
			const lastDateOfMonth = new Date(currentYear, month + 1, 0).getDate();

			for (let i = 1; i <= lastDateOfMonth; i++) {
				if (currentYear == yearNow && month == monthNow && i == today) {
					liTag += `<li class="calendar__today">${i}</li>`;
				} else {
					liTag += `<li>${i}</li>`;
				}
			}

			daysWrapper.innerHTML = liTag;
		}
	} catch {}
}

export default calendar;