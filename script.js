
(function () {

var names = ["Yaakov", "John", "James", "Ben", "Steve", "Michael", "Jimmy", "Ted", "Ralph", "Jen"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeGreeter(names[i]);
  }
  else {
    helloGreeter(names[i]);
  }
}

})();