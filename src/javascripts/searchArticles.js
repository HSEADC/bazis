initSearch()

function initSearch() {
  const articles = [
    {
      title: 'Как тело первым замечает усталость',
      description: 'О том, как заметить усталость раньше, чем она превратится в раздражение, пустоту и истощение.',
      url: './articles/article1.html'
    },
    {
      title: 'Как вернуться после трудного разговора',
      description: 'О том, как собрать себя после диалога, который оставил тревогу, вину или внутреннюю дрожь.',
      url: './articles/article2.html'
    },
    {
      title: 'Почему близость иногда пугает нас',
      description: 'О том, как отношения могут одновременно давать тепло и вызывать желание отдалиться, чтобы сохранить себя.',
      url: './articles/article3.html'
    },
    {
      title: 'Когда тишина становится слишком громкой',
      description: 'О том, почему в одиночестве поднимается тревога и как научиться слышать себя без страха.',
      url: './articles/article8.html'
    },
    {
      title: 'Как пауза возвращает нас к себе',
      description: 'О том, почему остановка не всегда означает слабость, а иногда становится началом внутреннего восстановления.',
      url: './articles/article14.html'
    },
    {
      title: 'Как не потеряться в близости',
      description: 'О том, как оставаться собой в отношениях, не отказываясь от чувств, заботы и привязанности.',
      url: './articles/article9.html'
    },
    {
      title: 'Почему отдых кажется чем-то лишним',
      description: 'О том, как чувство вины мешает нам восстанавливаться и почему пауза тоже может быть опорой.',
      url: './articles/article17.html'
    },
    {
      title: 'Одиночество после расставания',
      description: 'О том, как снова привыкнуть к себе, когда рядом освобождается место после другого человека.',
      url: './articles/article4.html'
    },
    {
      title: 'Почему быть удобным так утомляет',
      description: 'О том, как постоянное согласие забирает силы и почему честный отказ может стать заботой о себе.',
      url: './articles/article15.html'
    },
    {
      title: 'Когда мысли не дают выдохнуть',
      description: 'О том, как тревожные мысли начинают ходить по кругу, забирать слишком много внимания и как бережно сделать их немного тише.',
      url: './articles/article21.html'
    },
    {
      title: 'Как усталость от людей накапливается',
      description: 'О том, почему даже приятное общение может истощать и как не винить себя за потребность в тишине.',
      url: './articles/article23.html'
    },
    {
      title: 'Как услышать свои настоящие желания',
      description: 'О том, как отличить внутреннее желание от чужих ожиданий, привычки подстраиваться и страха ошибиться.',
      url: './articles/article10.html'
    },
    {
      title: 'Почему мы так боимся тишины',
      description: 'О том, как тишина перестаёт быть пустотой и постепенно становится пространством для честного разговора с собой.',
      url: './articles/article5.html'
    },
    {
      title: 'Как говорить о своих границах',
      description: 'О том, как сказать “мне так не подходит” спокойно, не превращая честность в конфликт.',
      url: './articles/article12.html'
    },
    {
      title: 'Почему тяжёлый день не отменяет тебя',
      description: 'О том, как не обесценивать себя из-за одного тяжёлого дня, в котором не хватило сил, ясности и внутренней опоры.',
      url: './articles/article19.html'
    },
    {
      title: 'Как тревога прячется в переписках',
      description: 'О том, почему мы ждём ответа как подтверждения собственной важности и как вернуть себе спокойствие.',
      url: './articles/article6.html'
    },
    {
      title: 'Почему побыть одному — нормально',
      description: 'О том, как перестать оправдывать одиночество и увидеть в нём не пустоту, а личное пространство.',
      url: './articles/article7.html'
    },
    {
      title: 'Когда хочется отменить весь день',
      description: 'О том, что может стоять за желанием спрятаться от встреч, дел, разговоров и любых решений.',
      url: './articles/article24.html'
    },
    {
      title: 'Как чужая оценка становится громче',
      description: 'О том, как заметить момент, когда мнение других начинает управлять твоими решениями и самоощущением.',
      url: './articles/article13.html'
    },
    {
      title: 'Почему мы сравниваем свои жизни',
      description: 'О том, как чужие успехи в соцсетях заставляют сомневаться в ценности собственного пути.',
      url: './articles/article11.html'
    },
    {
      title: 'Как провести вечер без шума',
      description: 'О том, как остаться наедине с собой, не испугаться тишины и постепенно превратить её в спокойное пространство для себя.',
      url: './articles/article20.html'
    },
    {
      title: 'Почему мы спасаем всех вокруг',
      description: 'О том, как постоянная забота о других может становиться способом не слышать собственные потребности.',
      url: './articles/article22.html'
    },
    {
      title: 'Как разрешить себе быть без ресурса',
      description: 'О том, почему состояние “я не могу” заслуживает не критики, а бережного отношения.',
      url: './articles/article16.html'
    },
    {
      title: 'Как собрать дом внутри себя',
      description: 'О том, как внутренняя опора появляется из маленьких честных действий, привычек и возвращений к себе.',
      url: './articles/article18.html'
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