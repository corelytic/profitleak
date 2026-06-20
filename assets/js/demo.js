(function(){
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link){
    link.addEventListener('click', function(event){
      var target = document.querySelector(link.getAttribute('href'));
      if(target){ event.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
})();
