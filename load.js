function createNode(element)
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

const label = document.getElementById("title");

const url = "../assets/tasks.json";

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
      let title = data.results;

      return title.map(function(lista) {

        let label = createNode('label');

        lable.innerHTML=`${lista.title}`;

        append(label);

      })

})

.catch(function(error) {

      console.log(JSON.stringify(error));

})
