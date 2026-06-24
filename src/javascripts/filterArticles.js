const articleTagColors = {
  одиночество: '#ABCBDE',
  усталость: '#DFEED7',
  самоценность: '#FCE1A8',
  тревога: '#CBCBE7',
  отношения: '#FAD5DB'
}

const allColor = '#1D2025'
const inactiveColor = '#F4F2EC'
const darkText = '#1D2025'
const lightText = '#F9F8F4'

const allArticleTags = Object.keys(articleTagColors)

let activeArticleTags = []

document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('.C_IndexSectionCardTagsArtic')
  const articlesContainer = document.querySelector('.O_Articles')

  if (!filterContainer || !articlesContainer) return

  const allButton = filterContainer.querySelector('.A_IndexSectionCardTag')
  const filterButtons = filterContainer.querySelectorAll('.A_IndexSectionCardTagArtic')

  function normalizeTag(text) {
    return text.toLowerCase().replace('#', '').trim()
  }

  function setAllActive() {
    allButton.style.backgroundColor = allColor
    allButton.style.color = lightText

    filterButtons.forEach((button) => {
      button.style.backgroundColor = inactiveColor
      button.style.color = darkText
    })
  }

  function updateFilterButtons() {
    if (activeArticleTags.length === 0) {
      setAllActive()
      return
    }

    allButton.style.backgroundColor = inactiveColor
    allButton.style.color = darkText

    filterButtons.forEach((button) => {
      const tagName = normalizeTag(button.innerText)

      if (activeArticleTags.includes(tagName)) {
        button.style.backgroundColor = articleTagColors[tagName]
        button.style.color = darkText
      } else {
        button.style.backgroundColor = inactiveColor
        button.style.color = darkText
      }
    })
  }

  function getArticleCards() {
    return articlesContainer.querySelectorAll('.C_IndexSectionCardDiv')
  }

  function getCardTags(card) {
    const tags = card.querySelectorAll('.A_IndexSectionCardTag')

    return Array.from(tags).map((tag) => normalizeTag(tag.innerText))
  }

  function shouldShowCard(card) {
    const cardTags = getCardTags(card)

    return activeArticleTags.some((activeTag) => {
      return cardTags.includes(activeTag)
    })
  }

  function filterArticles() {
    const articleCards = getArticleCards()

    if (activeArticleTags.length === 0) {
      articleCards.forEach((card) => {
        card.style.display = ''
      })

      return
    }

    articleCards.forEach((card) => {
      card.style.display = shouldShowCard(card) ? '' : 'none'
    })
  }

  function resetFilters() {
    activeArticleTags = []
    updateFilterButtons()
    filterArticles()
  }

  setAllActive()

  allButton.addEventListener('click', () => {
    resetFilters()
  })

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tagName = normalizeTag(button.innerText)

      if (activeArticleTags.includes(tagName)) {
        activeArticleTags = activeArticleTags.filter((tag) => tag !== tagName)
      } else {
        activeArticleTags.push(tagName)
      }

      if (activeArticleTags.length === allArticleTags.length) {
        resetFilters()
        return
      }

      updateFilterButtons()
      filterArticles()
    })
  })

  const observer = new MutationObserver(() => {
    filterArticles()
  })

  observer.observe(articlesContainer, {
    childList: true,
    subtree: true
  })
})