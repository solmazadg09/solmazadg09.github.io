document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      nav.setAttribute('aria-hidden', String(!isOpen));
      // if opening, move focus to the first link
      if(isOpen){
        var firstLink = nav.querySelector('a');
        if(firstLink) firstLink.focus();
      }
    });

    // ensure initial attributes
    btn.setAttribute('aria-expanded', String(nav.classList.contains('open')));
    nav.setAttribute('aria-hidden', String(!nav.classList.contains('open')));
  }

  // Close nav when resizing to desktop sizes
  window.addEventListener('resize', function(){
    if(window.innerWidth > 700 && nav && nav.classList.contains('open')){
      nav.classList.remove('open');
      nav.setAttribute('aria-hidden','true');
      if(btn) btn.setAttribute('aria-expanded','false');
    }
  });
});
