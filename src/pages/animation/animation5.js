const animation5 = () => {
    const words = ['Love', 'like Art', 'the Future', 'Everything'];
    
    let wordInex = 0,
        charIndex = 0,
        isDeleting = false;
    
        try {
            const dinamicText = document.querySelector('.animation-5__txt span');
            
            const typeEffect = () => {
                const currentWord = words[wordInex],
                currentCar = currentWord.substring(0, charIndex);
                dinamicText.textContent = currentCar;
                dinamicText.classList.add('stop-blink');
                
                if (!isDeleting && charIndex < currentWord.length) {
                    charIndex++;
                    setTimeout(typeEffect, 200);
                } else if (isDeleting && charIndex > 0) {
                    charIndex--;
                    setTimeout(typeEffect, 100);
                } else {
                    isDeleting = !isDeleting;
                    wordInex = !isDeleting ? (wordInex + 1) % words.length : wordInex;
                    setTimeout(typeEffect, 1200);
                    dinamicText.classList.remove('stop-blink');
                }
            }   
            typeEffect();
    } catch{}
}

export default animation5;