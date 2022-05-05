// "use strict";

// ScrollOnClick =================================
const burger = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const fixedBlocks = document.querySelectorAll('.fixed');

function burger_open(element) {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = element;
	});
	document.body.style.paddingRight = element;
	document.body.classList.add("lock");
	burger.classList.add("active");
	menuBody.classList.add("active");
}

function burger_close() {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = '0';
	});
	document.body.style.paddingRight = '0';
	document.body.classList.remove("lock");
	burger.classList.remove("active");
	menuBody.classList.remove("active");
}

const menuLinks = document.querySelectorAll('.goto[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	
	function onMenuLinkClick(e) {
		e.preventDefault();
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			
			if (burger.classList.contains('active')) {
				burger_close(); 
			}

			window.scrollTo({
				left: 0,
				top: gotoBlockValue,
				behavior: "smooth"
			});
		}
	}
}
