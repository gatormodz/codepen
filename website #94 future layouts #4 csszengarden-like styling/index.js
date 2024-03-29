const root = document.documentElement 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((btn) => {
	btn.addEventListener('click', handleThemeUpdate)
})

function handleThemeUpdate(e) {
	switch(e.target.value) {
		case 'dark': 
			root.style.setProperty('--bg', 'black')
			root.style.setProperty('--bg-text', 'white')
			break
		case 'calm': 
			root.style.setProperty('--bg', '#B3E5FC')
			root.style.setProperty('--bg-text', '#37474F')
			break
		case 'light':
			root.style.setProperty('--bg', 'white')
			root.style.setProperty('--bg-text', 'black')
			break
	}
}

//https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855