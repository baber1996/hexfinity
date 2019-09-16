let body = document.body
let input = document.querySelector("input")
let button = document.querySelector("button")


body.addEventListener("click", changeColor)

function changeColor() {
  const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random()*hexNumbers.length)
    hex = hex + hexNumbers[random]
  }

  input.addEventListener("click", function() {
    event.stopPropagation()
  })

  button.addEventListener("click", function() {
    event.stopPropagation()
    input.select()
    document.execCommand("copy")
    input.blur()
  })

  body.style.backgroundColor = hex
  input.value = hex
}
