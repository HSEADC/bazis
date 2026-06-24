import '../stylesheets/basic.css'

const tagColors = {
  одиночество: '#ABCBDE',
  усталость: '#DFEED7',
  самоценность: '#FCE1A8',
  тревога: '#CBCBE7',
  отношения: '#FAD5DB',
  'перед сном': '#ABCBDE',
  'после тяжёлого дня': '#DFEED7',
  'не можешь остановить мысли': '#FCE1A8',
  'когда тревожно': '#CBCBE7',
  'после расставания': '#FAD5DB'
}

function normalizeTagText(text) {
  return text
    .toLowerCase()
    .replace('#', '')
    .trim()
}

function colorTags() {
  const tags = document.querySelectorAll(
    '.A_IndexSectionCardTag, .A_IndexSectionCardTagTest, .A_IndexSectionCardTagArt'
  )

  tags.forEach((tag) => {
    if (tag.closest('.Section_Test')) return

    const tagText = normalizeTagText(tag.innerText)
    const tagColor = tagColors[tagText]

    if (tagColor) {
      tag.style.backgroundColor = tagColor
      tag.style.color = '#1D2025'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  colorTags()

  const observer = new MutationObserver(() => {
    colorTags()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
})