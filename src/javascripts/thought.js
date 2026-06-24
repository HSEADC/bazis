import thoughtFon1 from '../images/thought_fon_1.svg'
import thoughtFon2 from '../images/thought_fon_2.svg'
import thoughtFon3 from '../images/thought_fon_3.svg'
import thoughtFon4 from '../images/thought_fon_4.svg'
import thoughtFon5 from '../images/thought_fon_5.svg'

const thoughts = [
  {
    text: 'Тишина не всегда пустая. Иногда в ней просто становится слышно себя',
    image: thoughtFon1
  },
  {
    text: 'Одиночество не нужно сразу заполнять. Иногда с ним нужно просто познакомиться',
    image: thoughtFon2
  },
  {
    text: 'Опора — это не про вечную силу, а про возможность вернуться к себе',
    image: thoughtFon3
  },
  {
    text: 'Усталость не делает тебя слабым. Она только показывает, где нужен отдых',
    image: thoughtFon4
  },
  {
    text: 'Не каждый день должен менять жизнь. Иногда достаточно просто быть к себе ближе',
    image: thoughtFon5
  }
]

let currentThoughtIndex = -1

document.addEventListener('DOMContentLoaded', () => {
  const thoughtBlock = document.querySelector('.thought_main')
  const thoughtText = document.querySelector('.thought_main h2')
  const thoughtButton = document.querySelector('.A_ThoughtLink')

  function getRandomThoughtIndex() {
    let randomIndex = Math.floor(Math.random() * thoughts.length)

    while (randomIndex === currentThoughtIndex) {
      randomIndex = Math.floor(Math.random() * thoughts.length)
    }

    return randomIndex
  }

  function showRandomThought() {
    currentThoughtIndex = getRandomThoughtIndex()

    const currentThought = thoughts[currentThoughtIndex]

    thoughtBlock.style.backgroundImage = `url(${currentThought.image})`
    thoughtText.innerText = currentThought.text
  }

  showRandomThought()

  thoughtButton.addEventListener('click', () => {
    showRandomThought()
  })
})