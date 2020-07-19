
const d = document

const cleanupTags = (d: Document) => {
  d.querySelectorAll('body > *').forEach(i => i && i.tagName !== 'YTD-APP' && i.remove())
  while (d.getElementById('chips')) {
    d.getElementById('chips').remove()
  }
}

const secondaryCleanUp = (d) => {
  const mainContentBody = d.querySelectorAll('ytd-app > *')
  mainContentBody.forEach(i => i && i.tagName !== 'DIV' && i.remove())
}


const init = (d) => {
  cleanupTags(d)
}

d.onreadystatechange = () => d.readyState === 'complete' && init(d)
