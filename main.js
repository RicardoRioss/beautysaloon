 /*Abre e fecha o menu quando clicar nos icones: hamburger e X*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const e of toggle) {
  e.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

 /*Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const e of links) {
  e.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

 /*Mudar o Header da página quando der scroll*/
 const header = document.querySelector('#header')
 const navHeight = header.offsetHeight
 

function changeHeaderWhenScroll () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}



 /*Testimonials Carousel Slide Swiper*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

 /*Mostrar Elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contacts .links,
   footer .brand, footer .social
  `,{ interval: 100 })


  /*Botão voltar para o topo*/ 

  const backToTopButton = document.querySelector('.back-to-top')

  function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme sessão visivel na página */
  const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if(checkpointStart && checkpointEnd) {
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')

      } else {
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
      }
    }
  }





  
/* When Scroll */
  window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })



