var spam_menu = document.getElementById('spam_menu'),
	nav = document.getElementById('nav');

spam_menu.addEventListener('click',()=>{
	nav.classList.toggle('ver');
},false);