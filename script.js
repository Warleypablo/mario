const Pipe = document.querySelector('.Pipe');
const tubo = document.querySelector('.tubo');

const jump = () => {
	Pipe.classList.add('jump');
	setTimeout(() =>  {
			Pipe.classList.remove('jump');
	}, 500);
}

const loop = setInterval (() => {
	
	const tuboPosition = tubo.offsetLeft;
	const PipePosition = +window.getComputedStyle(Pipe).bottom.replace('px', '');
	console.log (PipePosition);
	
	if (tuboPosition <= 120 && tuboPosition > 0 && PipePosition < 80) {
		
		tubo.style.animation='none';
		tubo.style.left =`${tuboPosition}px`;
	}
	
}, 10);
	document.addEventListener('keydown', jump);