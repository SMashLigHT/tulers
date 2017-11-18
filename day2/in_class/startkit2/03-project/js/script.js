window.addEventListener('load',function(){
	//код-демонстрация функций
	function logger(text){
		return text[2]
	}
	console.log(logger('Привет'))
	//alert(logger('Hola'))

	let myFunction = function(){
		return 'Cool, bro!'
	}
	console.log(myFunction())

	//Упрощение
	let $ = function(selector){
		return document.querySelector(selector);
	}
	//$('.controls').style.backgroundColor = 'red'

	// рабочий код проекта
	let rightArrow = document.querySelector('.rightArrow')
	let leftArrow = document.querySelector('.leftArrow')
	let myCoolEarth = document.querySelector('.earth')
	let Counter = 0
	const homeBtn = document.querySelector('.home')

	rightArrow.addEventListener('click', function(){
		Counter = Counter+5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)' // 'rotate(5deg)'	
	})

	leftArrow.addEventListener('click', function (){
		Counter = Counter-5
		myCoolEarth.style.transform = 'rotate('+Counter+'deg)'
	})

	
	homeBtn.addEventListener('click', function() {
		window.location = 'file:///Users/stanislavkonstantinov/Desktop/tulers/index.html'
	})
})