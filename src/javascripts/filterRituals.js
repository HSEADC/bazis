const ritualTagColors = {
  'перед сном': '#ABCBDE',
  'после тяжелого дня': '#DFEED7',
  'не можешь остановить мысли': '#FCE1A8',
  'когда тревожно': '#CBCBE7',
  'после расставания': '#FAD5DB'
}

const allColor = '#1D2025'
const inactiveColor = '#F4F2EC'
const darkText = '#1D2025'
const lightText = '#F9F8F4'

const allRitualTags = Object.keys(ritualTagColors)

let activeRitualTags = []

function normalizeTag(text) {
  return text
    .toLowerCase()
    .replace(/#/g, '')
    .replace(/ё/g, 'е')
    .replace(/\s+/g, ' ')
    .trim()
}

document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('.C_IndexSectionCardTagsArtic')

  if (!filterContainer) return

  const allButton = filterContainer.querySelector('.A_IndexSectionCardTag')
  const filterButtons = filterContainer.querySelectorAll('.A_IndexSectionCardTagArtic')

  // ВАЖНО: у тебя карточки ритуалов — это .O_TestCards внутри .C_Rituals
  const ritualCards = document.querySelectorAll('.C_Rituals .O_TestCards')

  function setAllActive() {
    allButton.style.backgroundColor = allColor
    allButton.style.color = lightText

    filterButtons.forEach((button) => {
      button.style.backgroundColor = inactiveColor
      button.style.color = darkText
    })
  }

  function updateButtons() {
    if (activeRitualTags.length === 0) {
      setAllActive()
      return
    }

    allButton.style.backgroundColor = inactiveColor
    allButton.style.color = darkText

    filterButtons.forEach((button) => {
      const tagName = normalizeTag(button.innerText)

      if (activeRitualTags.includes(tagName)) {
        button.style.backgroundColor = ritualTagColors[tagName]
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

    return activeRitualTags.some((activeTag) => {
      return cardTags.includes(activeTag)
    })
  }

  function filterRituals() {
    if (activeRitualTags.length === 0) {
      ritualCards.forEach((card) => {
        card.style.display = ''
      })

      return
    }

    ritualCards.forEach((card) => {
      if (shouldShowCard(card)) {
        card.style.display = ''
      } else {
        card.style.display = 'none'
      }
    })
  }

  function resetFilters() {
    activeRitualTags = []
    updateButtons()
    filterRituals()
  }

  setAllActive()

  allButton.addEventListener('click', () => {
    resetFilters()
  })

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tagName = normalizeTag(button.innerText)

      if (activeRitualTags.includes(tagName)) {
        activeRitualTags = activeRitualTags.filter((tag) => tag !== tagName)
      } else {
        activeRitualTags.push(tagName)
      }

      if (activeRitualTags.length === allRitualTags.length) {
        resetFilters()
        return
      }

      updateButtons()
      filterRituals()
    })
  })
})