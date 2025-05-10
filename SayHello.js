

(function(window) {
	var sayWord = "Hello "; //Dont forget space after Hello
	var helloGreeter = function (name) {
		console.log(sayWord + name);
	}

	window.helloGreeter = helloGreeter;

})(window);
