const headerButton = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')
const body = document.body

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('active')
  headerNav.classList.toggle('active')
  body.classList.toggle('lock')
})
