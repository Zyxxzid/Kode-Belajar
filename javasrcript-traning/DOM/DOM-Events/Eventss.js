const button = document.querySelector('button')
const ul = document.querySelector('ul')
const body = document.querySelector('body')

button.addEventListener('click', function () {
  const li = document.createElement('li')
  const text = document.createTextNode('item ')

  li.appendChild(text)
  ul.appendChild(li)
})

const ubah = document.querySelector('.Ubah')
ubah.addEventListener('click', function () {
  body.style.backgroundColor = 'Lightblue'
})