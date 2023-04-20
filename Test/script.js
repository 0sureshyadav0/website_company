
 const data = [
            {
                id:0,
                name: "Suresh Yadav",
                age: 20
            },
            {
                id:1,
                name: "Surya Yadav",
                age: 20
            },
            {
                id:2,
                name: "Yadav",
                age: 20
            }, 
            {
                id:3,
                name: "Yash Kumar",
                age: 20
            }, 
            {
                id:4,
                name: "Hello Bro",
                age: 20
            }
        ]

const buildDiv = data => {
  let element = document.querySelector('#container')
  let html = ''
  for (let i = 0; i < data.length; i++) {
    let { name, age } = data[i]
    html += `
<div class="col" onclick="showText()"></div>
`
  }
  element.innerHTML = html
}

function showText (even) {
  let element = document.querySelector('#container')
  for (let i = 0; i < element.children.length; i++) {
    document.querySelector('#container').children[i].onclick = function () {
        alert(i + ' ' + 'position clicked')
        passIndex(i)
        
        // window.open('index.html', '_blank')
    }
  }
}
function passIndex(i) {
    const dataa = data[i];
    // window.open("index.html", "_blank")
    // document.querySelector("#description").innerHTML = dataa.name;
    
    console.log(dataa.id,dataa.name)
}
const buildDescription = (data)=> {
  let element = document.querySelector('#description')
  for (let i = 0; i < data.length; i++) {
    let { id, name } = data[i]
    if (i === index) {
      element.innerHTML = name
    }
  }
  window.open('index.html', '_blank')
}
