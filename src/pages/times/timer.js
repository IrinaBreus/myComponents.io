const timer = () => {
	try {
		const parent = document.querySelector('.timer'),
		      day = parent.querySelector('.timer__days span'),
			  hours = parent.querySelector('.timer__hours span'),
			  minutes = parent.querySelector('.timer__min span'),
			  seconds = parent.querySelector('.timer__sec span');

		let date = new Date(),
		    endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3);

		let timerId;
		
		timerId = setInterval(setClock, 1000);
		function getTime() {
			const time = endTime - new Date();
			
			const days = Math.floor(time / (1000 * 60 * 60 * 24)),
				  hours = Math.floor(time / (1000 * 60 * 60) % 24),
				  min = Math.floor(time / (1000 * 60) % 60),
				  sec = Math.floor(time / 1000 % 60);
			
			return {time, days, hours, min, sec};
		}

		setClock();
		
		function normalizeDate(num) {
			if (num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}

		function setClock() {
			const t = getTime();

			day.innerHTML = normalizeDate(t.days);
			hours.innerHTML = normalizeDate(t.hours);
			minutes.innerHTML = normalizeDate(t.min);
			seconds.innerHTML = normalizeDate(t.sec);
		}
	

	} catch {}
}

export default timer;