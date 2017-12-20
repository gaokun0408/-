var acon = document.getElementById("con");
	acon.innerHTML = acon.innerHTML + acon.innerHTML;

	var timeId = null;
	timeId = setInterval(function(){
		acon.style.top = (acon.offsetTop - 2) + "px";
		if(acon.offsetTop<-160){
			acon.style.top = "0";
		}
	},50);

	acon.onmouseover = function(){
		clearInterval(timeId);
	}

	acon.onmouseout = function(){
		timeId = setInterval(function(){
		acon.style.top = (acon.offsetTop - 2) + "px";
		if(acon.offsetTop <-160){
			acon.style.top = "0";
		}
		},50);
	}
