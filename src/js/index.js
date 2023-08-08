const newsLeftArrow = document.querySelector('.news__arrow-left')
const newsRightArrow = document.querySelector('.news__arrow-right')
const newsItem = document.querySelector('.news__item')
const newsSlider = document.querySelector('.news__content-slider')
const newsContent = document.querySelector('.news__content')
const newsContainer = document.querySelector('.news__container')

const reviewsLeftArrow = document.querySelector('.reviews__left-button')
const reviewsRightArrow = document.querySelector('.reviews__right-button')
const reviewsItem = document.querySelector('.reviews__slider-item')
const reviewsSlider = document.querySelector('.reviews__slider')
const reviewsContent = document.querySelector('.reviews__slider-block')

let newsCoor

newsLeftArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(newsContainer).width) > 768) {
    let itemWidth = getComputedStyle(newsItem).width
    let containerWidth = getComputedStyle(newsContent).width
    let move =
      parseInt(containerWidth) - 2 * parseInt(itemWidth) + parseInt(itemWidth)

    if (!newsCoor) {
      newsCoor = 0
    }

    if (newsCoor <= -move) {
      newsSlider.style.transform = `translateX(${newsCoor + move + 'px'})`
      newsCoor = newsCoor + move
    }
  }
})

newsRightArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(newsContainer).width) > 768) {
    let itemWidth = getComputedStyle(newsItem).width
    let containerWidth = getComputedStyle(newsContent).width
    let move =
      parseInt(containerWidth) - 2 * parseInt(itemWidth) + parseInt(itemWidth)

    if (!newsCoor) {
      newsCoor = 0
    }

    if (!(newsCoor <= -move * 2)) {
      newsSlider.style.transform = `translateX(${newsCoor - move + 'px'})`
      newsCoor = newsCoor - move
    }
  }
})

let reviewsCoor

reviewsLeftArrow.addEventListener('click', () => {
  let itemWidth = getComputedStyle(reviewsItem).width
  let move = parseInt(itemWidth)

  if (!reviewsCoor) {
    reviewsCoor = 0
  }

  if (reviewsCoor <= -move) {
    reviewsSlider.style.transform = `translateX(${reviewsCoor + move + 'px'})`
    reviewsCoor = reviewsCoor + move
  }
})

reviewsRightArrow.addEventListener('click', () => {
  let itemWidth = getComputedStyle(reviewsItem).width
  let move = parseInt(itemWidth)

  if (!reviewsCoor) {
    reviewsCoor = 0
  }

  if (!(reviewsCoor <= -move * 3)) {
    reviewsSlider.style.transform = `translateX(${reviewsCoor - move + 'px'})`
    reviewsCoor = reviewsCoor - move
  }
})
