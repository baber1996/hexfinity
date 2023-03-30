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

  button.addEventListener("click", e => {
    e.stopPropagation()
    input.select()
    navigator.clipboard.writeText(input.value)
      .then(() => {
        console.log("Copied to clipboard:", input.value)
      })
      .catch((err) => {
        console.error("Failed to copy:", err)
      })
    input.blur()
  })

  body.style.backgroundColor = hex
  input.value = hex
}

window.addEventListener("load", function() {
  this.alert("Click anywhere on the page to change colour!")
})
