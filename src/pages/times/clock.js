const clock = () => {
	try {
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
		

	} catch {}
}

export default clock;