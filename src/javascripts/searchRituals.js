initSearch()

function initSearch() {
  const rituals = [
    {
      title: 'Письмо без отправки',
      description: 'Хочется всё сказать человеку, но сначала важно услышать, что именно болит внутри.',
      url: ''
    },
    {
      title: 'Три тихих вдоха',
      description: 'Когда тревога подступает слишком близко, начни не с решения, а с дыхания.',
      url: ''
    },
    {
      title: 'Вечернее отпускание',
      description: 'День уже закончился, но мысли всё ещё держат тебя внутри его напряжения.',
      url: ''
    },
    {
      title: 'Список лишнего шума',
      description: 'Иногда голова переполнена не проблемами, а всем, что давно просит выйти наружу.',
      url: ''
    },
    {
      title: 'Пять точек опоры',
      description: 'Когда внутри неустойчиво, можно вернуться к простым ощущениям тела и пространства.',
      url: ''
    },
    {
      title: 'Ритуал закрытого дня',
      description: 'После тяжёлого дня важно не просто лечь спать, а мягко выйти из напряжения.',
      url: ''
    },
    {
      title: 'Разговор с собой',
      description: 'Если внутри много чувств, попробуй не спорить с ними, а задать им вопрос.',
      url: ''
    },
    {
      title: 'Тёплая пауза, когда сил мало',
      description: 'Когда сил мало, не нужно сразу собираться — сначала можно просто согреться.',
      url: ''
    },
    {
      title: 'Мысли на бумаге',
      description: 'Если мысли ходят по кругу, дай им место вне головы, чтобы стало тише.',
      url: ''
    },
    {
      title: 'Мягкое прощание',
      description: 'После расставания важно отпускать не сразу всё, а маленькими честными шагами.',
      url: ''
    },
    {
      title: 'Комната без тревоги',
      description: 'Перед сном можно создать маленькое пространство, где от тебя ничего не требуется.',
      url: ''
    },
    {
      title: 'Один маленький порядок',
      description: 'Когда день развалился, начни с одного простого действия, которое возвращает контроль.',
      url: ''
    }
  ]

  const input = document.querySelector('.A_SearchInput_Rituals')
  const button = document.querySelector('.A_SearchButton')

  input.addEventListener('input', () => {
    hadleSearchInput(rituals, input, button)
  })

  button.addEventListener('click', () => {
    hadleSearchClick(rituals, input, button)
  })
}

function hadleSearchClick(rituals, input, button) {
  const value = input.value.toLowerCase()

  const result = rituals.find(
    (ritual) =>
      ritual.title.toLowerCase().includes(value) ||
      ritual.description.toLowerCase().includes(value)
  )

  if (result) {
    window.location.href = result.url
  }
}

function toggleButton(button, isActive) {
  button.disabled = !isActive
}

function hadleSearchInput(rituals, input, button) {
  const value = input.value.toLowerCase()
  const dropdown = document.querySelector('.C_Dropdown')

  const results = rituals.filter(
    (ritual) =>
      ritual.title.toLowerCase().includes(value) ||
      ritual.description.toLowerCase().includes(value)
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