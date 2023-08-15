const blogArticlesLeftArrow = document.querySelector(
  '.blog-articles__left-button'
)
const blogArticlesRightArrow = document.querySelector(
  '.blog-articles__right-button'
)
const blogArticlesItem = document.querySelector('.blog-articles__item')
const blogArticlesSlider = document.querySelector(
  '.blog-articles__slider-block'
)
const blogArticlesContent = document.querySelector('.blog-articles__slider')
const blogArticlesContainer = document.querySelector(
  '.blog-articles__container'
)

let blogArticlesCoor

blogArticlesLeftArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(blogArticlesContainer).width) > 992) {
    let itemWidth = getComputedStyle(blogArticlesItem).width
    let containerWidth = getComputedStyle(blogArticlesSlider).width
    let move =
      (parseInt(containerWidth) - 3 * parseInt(itemWidth)) / 2 +
      parseInt(itemWidth)

    if (!blogArticlesCoor) {
      blogArticlesCoor = 0
    }

    if (blogArticlesCoor <= -move) {
      blogArticlesContent.style.transform = `translateX(${
        blogArticlesCoor + move + 'px'
      })`
      blogArticlesCoor = blogArticlesCoor + move
    }
  }
})

blogArticlesRightArrow.addEventListener('click', () => {
  if (parseInt(getComputedStyle(blogArticlesContainer).width) > 992) {
    let itemWidth = getComputedStyle(blogArticlesItem).width
    let containerWidth = getComputedStyle(blogArticlesSlider).width
    let move =
      (parseInt(containerWidth) - 3 * parseInt(itemWidth)) / 2 +
      parseInt(itemWidth)
    if (!blogArticlesCoor) {
      blogArticlesCoor = 0
    }

    if (!(blogArticlesCoor <= -move * 3)) {
      blogArticlesContent.style.transform = `translateX(${
        blogArticlesCoor - move + 'px'
      })`
      blogArticlesCoor = blogArticlesCoor - move
    }
  }
})
