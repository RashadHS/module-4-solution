

(function(window) {
	var sayWord = "Goodbye ";  //Dont forget space after Goodbye
	var byeGreeter = function (name) {
  		console.log(sayWord + name);
	}
	
	window.byeGreeter = byeGreeter;

})(window);