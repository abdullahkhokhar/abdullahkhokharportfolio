(function(){
  var menu = document.querySelector('ul');
  var menulink = document.getElementById("menu");

  menulink.addEventListener('click', function(e){
    menu.classList.toggle('active');
    e.preventDefault();
  });
})();
