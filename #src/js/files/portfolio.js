const buttonOpen = document.querySelector('.portfolio__button');

buttonOpen.addEventListener('click', function (event) {
if(buttonOpen.classList.contains('active')){
	buttonOpen.classList.remove('active');
	buttonOpen.textContent = "Скрыть";
}
else{
	buttonOpen.classList.add('active');
	buttonOpen.textContent = "Смотреть больше";
}
});
