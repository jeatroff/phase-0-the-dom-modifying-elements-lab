// Write your code here!
const body = document.getElementsByTagName('body')[0]
const main = document.querySelector('main#main')
body.removeChild(main)

let newHeader = document.createElement("h1")
newHeader.id = 'victory'
newHeader.textContent = 'Jonathan is the champion'
body.append(newHeader)