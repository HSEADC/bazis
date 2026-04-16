initSearch()
console.log('test')

function initSearch() {
  const articles = [
    {
      title: 'Почему тишина иногда пугает',
      description: 'Иногда, когда остаёшься один, кажется, что всё вокруг замирает, а внутри появляется тревога. Но откуда она берётся и что на самом деле скрывается за этим чувством? Разбираемся вместе.',
      url: 'https://hseadc.github.io/bazis/pages/articles/article1.html'
    },
    {
      title: 'Как превратить одиночество в ресурс',
      description: 'Как превратить одиночество в ресурс',
      url: 'https://hseadc.github.io/bazis/pages/articles/article2.html'
    },
    {
      title: 'Фундамент души: на чем строится уверенность',
      description: 'Фундамент души: на чем строится уверенность',
      url: 'https://hseadc.github.io/bazis/pages/articles/article3.html'
    },
    {
      title: 'Как чувства согревают наше одиночество',
      description: 'Как чувства согревают наше одиночество',
      url: 'https://hseadc.github.io/bazis/pages/articles/article4.html'
    },
    {
      title: 'Слушая тишину: находим опору в себе',
      description: 'Слушая тишину: находим опору в себе',
      url: 'https://hseadc.github.io/bazis/pages/articles/article5.html'
    }
  ]

  const input = document.querySelector('.A_SearchInput')
  const button = document.querySelector('.A_SearchButton')

  input.addEventListener('input', () => {
    hadleSearchInput(articles, input, button)
  })

  button.addEventListener('click', () => {
    hadleSearchClick(articles, input, button)
  })
}

function hadleSearchClick(articles, input, button) {
  const value = input.value.toLowerCase()

  const result = articles.find(
    (article) =>
      article.title.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
  )

  if (result) {
    window.location.href = result.url
  }
}

function toggleButton(button, isActive) {
  button.disabled = !isActive
}

function hadleSearchInput(articles, input, button) {
  const value = input.value.toLowerCase()
  const dropdown = document.querySelector('.C_Dropdown')

  const results = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
  )

  if (results > 0) {
    dropdown.style.display = 'none'
  }

  if (value.length < 3) {
    dropdown.style.display = 'none'
    toggleButton(button, false)
  } else {
    toggleButton(button, true)
    renderDropdown(results, dropdown, value)
  }
}

function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = ''
  dropdown.style.display = 'flex'

  results.forEach((result) => {
    const item = document.createElement('a')
    item.classList.add('M_SearchResult')
    item.href = result.url

    const header = document.createElement('h5')
    header.classList.add('A_SearchResultHeader')
    header.innerHTML = hightlight(result.title, value)

    const description = document.createElement('p')
    description.classList.add('A_SearchResultDescription')
    description.innerHTML = hightlight(result.description, value)

    item.appendChild(header)
    item.appendChild(description)

    dropdown.appendChild(item)
  })
}

function hightlight(text, value) {
  const regex = new RegExp(`${value}`, 'gi')
  const formatted = text.replace(
    regex,
    `<span class="Q_Hightlight">${value}</span>`
  )
  console.log(formatted)
  return formatted
}