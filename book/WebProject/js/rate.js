const openRate = document.getElementById('rate_open');
const closeRate =document.getElementById('post');
const popUp = document.getElementById('rate');
openRate.addEventListener('click', function(e){
	e.preventDefault();
	rate.classList.add('active');
})

closeRate.addEventListener('click', () =>{
	rate.classList.remove('active');
})