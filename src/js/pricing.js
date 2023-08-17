const plansButton = document.querySelector('.pricing-plans__annual-button')
const circleButton = document.querySelector(
  '.pricing-plans__annual-button-circle'
)
const price = document.querySelectorAll('.pricing-plans__plan-price')

plansButton.addEventListener('click', () => {
  circleButton.classList.toggle('active')
  if (circleButton.classList.contains('active')) {
    price.forEach((elem) => {
      elem.innerHTML =
        '$' +
        parseInt(elem.innerHTML.slice(1)) * 12 * 0.8 +
        '<span>/year</span>'
    })
  } else {
    price.forEach((elem) => {
      elem.innerHTML =
        '$' + parseInt(elem.innerHTML.slice(1)) / 12 / 0.8 + '<span>/mo</span>'
    })
  }
})
