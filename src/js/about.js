const aboutTeamLeftArrow = document.querySelector('.about-team__arrow-left')
const aboutTeamRightArrow = document.querySelector('.about-team__arrow-right')
const aboutTeamItem = document.querySelector('.about-team__item')
const aboutTeamSlider = document.querySelector('.about-team__slider-block')
const aboutTeamContent = document.querySelector('.about-team__slider')
const aboutTeamContainer = document.querySelector('.about-team__container')

let aboutTeamCoor

aboutTeamLeftArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(aboutTeamContainer).width) > 992) {
    let itemWidth = getComputedStyle(aboutTeamItem).width
    let containerWidth = getComputedStyle(aboutTeamSlider).width
    let move =
      (parseInt(containerWidth) - 3 * parseInt(itemWidth)) / 2 +
      parseInt(itemWidth)

    if (!aboutTeamCoor) {
      aboutTeamCoor = 0
    }

    if (aboutTeamCoor <= -move) {
      aboutTeamContent.style.transform = `translateX(${
        aboutTeamCoor + move + 'px'
      })`
      aboutTeamCoor = aboutTeamCoor + move
    }
  }
})

aboutTeamRightArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(aboutTeamContainer).width) > 992) {
    let itemWidth = getComputedStyle(aboutTeamItem).width
    let containerWidth = getComputedStyle(aboutTeamSlider).width
    let move =
      (parseInt(containerWidth) - 3 * parseInt(itemWidth)) / 2 +
      parseInt(itemWidth)
    if (!aboutTeamCoor) {
      aboutTeamCoor = 0
    }

    if (!(aboutTeamCoor <= -move * 3)) {
      aboutTeamContent.style.transform = `translateX(${
        aboutTeamCoor - move + 'px'
      })`
      aboutTeamCoor = aboutTeamCoor - move
    }
  }
})
