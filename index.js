window.addEventListener('scroll', () => {
    if (window.scrollY >= 60) {
      document.querySelector('.on_scroll').classList.add('scrolled');
      document.querySelector('.on_scroll').classList.add('navbar-dark');
      document.querySelector('.on_scroll_btn').classList.remove('btn-dark');
      document.querySelector('.on_scroll_btn').classList.add('btn-light');
      document.querySelector('.offcanvas_header').classList.add('text-white');
      document.querySelector('.offcanvas_bg').classList.add('bg-black');
      document.querySelector('.offcanvas_bg').classList.remove('bg-white');
    } else if (window.scrollY < 60) {
      document.querySelector('.on_scroll').classList.remove('scrolled');
      document.querySelector('.on_scroll').classList.remove('navbar-dark');
      document.querySelector('.on_scroll_btn').classList.add('btn-dark');
      document.querySelector('.on_scroll_btn').classList.add('btn-light');
      document.querySelector('.offcanvas_header').classList.remove('text-white');
      document.querySelector('.offcanvas_bg').classList.add('bg-white');
      document.querySelector('.offcanvas_bg').classList.remove('bg-black');
    }
  })

const scrollA = document.querySelectorAll('.scroll-animateB')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      entry.target.classList.add('scroll-animateA');
    } 
  })
  },
  {
    threshold: 0.01,
    rootMargin: '-100px',
  }
);

scrollA.forEach(item => {
  observer.observe(item)
});
