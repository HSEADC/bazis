import '../stylesheets/articles.css'

import Airtable from 'airtable'
const token =
'patSDodn0tIdbxLpK.852ae3dabd3f9cdb49e20d5afc00677a03ffb3482dcbc9a52c16a37b2e5fbe86'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('appt2XCtryt3Kiwgo')

let content
getArtcilesTeasers().then((data) => {
  content = data

  createArticlesTeasersCards(content)
})

function getArtcilesTeasers() {
    return new Promise((resolve, reject) => {
        const content = []

        base('articles cards').select({
        maxRecords: 100,
        })
        .firstPage()
        .then((result) => {
        result.forEach((record) => {
            content.push({
            id: record.id,
            title: record.fields['Titel'],
            description: record.fields['Description'],
            tags: record.fields['Tegs'],
            link: record.fields['URL'],
            image: record.fields['image']
          })
          })
        resolve(content)
      })
    })
}

function createArticlesTeasersCards(content) {
  content.forEach((stroke) => {
    let { title, description, tags, link, image } = stroke

    const articleCardLink = document.createElement('a')
    articleCardLink.classList.add('C_IndexSectionCardDiv')
    articleCardLink.href = link

    const articleTags = document.createElement('div')
    articleTags.classList.add('C_IndexSectionCardTags')

    tags.forEach((tag) => {
      const articleTag = document.createElement('span')
      articleTag.classList.add('A_IndexSectionCardTag')
      articleTag.innerText = tag

      articleTags.appendChild(articleTag)
    })

    const articleImg = document.createElement('div')
    articleImg.classList.add('C_IndexSectionCardImg')
    articleImg.style.backgroundImage = `url(${image})`

    const articleContent = document.createElement('div')
    articleContent.classList.add('O_IndexSectionCard')

    const articleHeader = document.createElement('h3')
    articleHeader.classList.add('A_IndexH3')
    articleHeader.innerText = title

    const articleText = document.createElement('p')
    articleText.classList.add('A_IndexText')
    articleText.innerText = description

    articleImg.appendChild(articleTags)

    articleContent.appendChild(articleHeader)
    articleContent.appendChild(articleText)

    articleCardLink.appendChild(articleImg)
    articleCardLink.appendChild(articleContent)

    document.querySelector('.O_Articles').appendChild(articleCardLink)
  })
}
