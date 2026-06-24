const tagColors = {
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

const allTags = Object.keys(tagColors)

document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('.C_IndexSectionCardTagsArtic')

  if (!filterContainer) return

  const allButton = filterContainer.querySelector('.A_IndexSectionCardTag')
  const filterButtons = filterContainer.querySelectorAll('.A_IndexSectionCardTagArtic')

  const testCards = document.querySelectorAll('.C_Tests a')

  let activeTags = []

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

  function updateButtons() {
    if (activeTags.length === 0) {
      setAllActive()
      return
    }

    allButton.style.backgroundColor = inactiveColor
    allButton.style.color = darkText

    filterButtons.forEach((button) => {
      const tagName = normalizeTag(button.innerText)

      if (activeTags.includes(tagName)) {
        button.style.backgroundColor = tagColors[tagName]
        button.style.color = darkText
      } else {
        button.style.backgroundColor = inactiveColor
        button.style.color = darkText
      }
    })
  }

  function getCardTags(card) {
    const tags = card.querySelectorAll('.A_IndexSectionCardTagTest')

    return Array.from(tags).map((tag) => normalizeTag(tag.innerText))
  }

  function shouldShowCard(card) {
    const cardTags = getCardTags(card)

    return activeTags.some((activeTag) => cardTags.includes(activeTag))
  }

  function filterCards() {
    if (activeTags.length === 0) {
      testCards.forEach((card) => {
        card.style.display = ''
      })

      return
    }

    testCards.forEach((card) => {
      card.style.display = shouldShowCard(card) ? '' : 'none'
    })
  }

  function resetFilters() {
    activeTags = []
    updateButtons()
    filterCards()
  }

  setAllActive()

  allButton.addEventListener('click', () => {
    resetFilters()
  })

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tagName = normalizeTag(button.innerText)

      if (activeTags.includes(tagName)) {
        activeTags = activeTags.filter((tag) => tag !== tagName)
      } else {
        activeTags.push(tagName)
      }

      if (activeTags.length === allTags.length) {
        resetFilters()
        return
      }

      updateButtons()
      filterCards()
    })
  })
})