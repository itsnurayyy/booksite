var acc = document.getElementsByClassName('accor');
var i;
var len = acc.length;
for(i=0; i<len; i++){
	acc[i].addEventListener('click', 
		function(){
			/* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
		this.classList.toggle('active');
		 /* Toggle between hiding and showing the active panel */
		var content = this.nextElementSibling;
		if(content.style.maxHeight){ /* to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes*/
			content.style.maxHeight = null;
		}
		else{
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	}
	)
}

