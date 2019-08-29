const app = document.getElementById('root')

const container = document.getElementById('div')
container.setAttribute('container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://127.0.0.1:8081/assets/tasks.json', true)
request.onload = function() {

  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(list => {
      const label = document.getElementById('title')
      p.textContent = `${movie.title}...`


      const p = document.getElementById('p')
      p.textContent = list.title


      container.appendChild(title)
      div.appendChild(label)
      div.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
