window.addEventListener('load',function() {

	let $ = function (selector) {
		return document.querySelector(selector);
	}

	// let button = document.querySelector('.button')
	// let popup_item = document.querySelector('.popup_item')
	// let popup_button = document.querySelector('.popup_button')

	$('.button').addEventListener('click', function() {
		$('.popup_item').style.display = 'block'
	})
	$('.popup_button').addEventListener('click', function () {
		$('.popup_item').style.display = 'none'
	})

})

//hj