const clock = () => {
	try {
		// функционал часов обернут в функцию, чтобы часы раюотали только тогда, когда они находятся в зоне видимости
		const callback = () => {
			const deg = 6;
	
			const hour = document.querySelector('.clock__hour-arr'),
				  min = document.querySelector('.clock__min-arr'),
				  sec = document.querySelector('.clock__sec-arr');
			
			setInterval(() => {
				let date = new Date(),
					hr = date.getHours() * 30,
					mn = date.getMinutes() * deg,
					sc = date.getSeconds() * deg;
		
				hour.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
				min.style.transform = `rotateZ(${mn}deg)`;
				sec.style.transform = `rotateZ(${sc}deg)`;
			})
		}

		const options = {
			threshold: 0.2 //где 0.0 полная невидимсоть, а 1.0 полная видимость
		}

		// API для вызова функции и работы ее функционала только при видимости
		const observer = new IntersectionObserver(callback, options);
		// родитель видимого элемента
		const target = document.querySelector('.clock');

		observer.observe(target);
		

	} catch {}
}

export default clock;