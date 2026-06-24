initSearch()

function initSearch() {
  const tests = [
    {
      title: 'Комфортно ли тебе наедине с собой?',
      description: 'Короткий тест о том, как ты воспринимаешь одиночество: как пространство для себя или как состояние, которое хочется срочно заполнить.',
      url: './tests/test2.html'
    },
    {
      title: 'Есть ли у тебя внутренняя опора?',
      description: 'Тест поможет понять, насколько ты умеешь опираться на себя, свои ощущения и ценности, а не только на мнение других.',
      url: './tests/test1.html'
    },
    {
      title: 'Ты устал или просто потерял контакт с собой?',
      description: 'Тест о выгорании, внутренней перегрузке и моментах, когда “ничего не хочется” — это не лень, а сигнал.',
      url: './tests/test3.html'
    },
    {
      title: 'Не теряешь ли ты себя в отношениях?',
      description: 'Тест о личных границах, близости и том, насколько ты остаёшься собой рядом с другим человеком.',
      url: './tests/test4.html'
    },
    {
      title: 'Как ты справляешься с тревожными мыслями?',
      description: 'Тест о том, что происходит внутри, когда мысли начинают крутиться по кругу и не дают спокойно выдохнуть.',
      url: './tests/test5.html'
    },
    {
      title: 'Ты правда отдыхаешь или просто исчезаешь из всего?',
      description: 'Тест поможет понять, восстанавливаешься ли ты во время отдыха или просто отключаешься от перегруза.',
      url: './tests/test6.html'
    },
    {
      title: 'Насколько ты зависишь от чужой оценки?',
      description: 'Тест поможет понять, насколько сильно мнение других влияет на твоё спокойствие, решения и ощущение собственной ценности.',
      url: './tests/test7.html'
    }
  ]

  const input = document.querySelector('.A_SearchInput_Test')
  const button = document.querySelector('.A_SearchButton')

  input.addEventListener('input', () => {
    hadleSearchInput(tests, input, button)
  })

  button.addEventListener('click', () => {
    hadleSearchClick(tests, input, button)
  })
}

function hadleSearchClick(tests, input, button) {
  const value = input.value.toLowerCase()

  const result = tests.find(
    (test) =>
      test.title.toLowerCase().includes(value) ||
      test.description.toLowerCase().includes(value)
  )

  if (result) {
    window.location.href = result.url
  }
}

function toggleButton(button, isActive) {
  button.disabled = !isActive
}

function hadleSearchInput(tests, input, button) {
  const value = input.value.toLowerCase()
  const dropdown = document.querySelector('.C_Dropdown')

  const results = tests.filter(
    (test) =>
      test.title.toLowerCase().includes(value) ||
      test.description.toLowerCase().includes(value)
  )

  if (results.length === 0) {
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