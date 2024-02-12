const input = document.querySelector('#input')
const items = document.querySelectorAll('li')
// console.log(items)

const filterFunction = () => {
  const value = input.value.toLowerCase()
  Array.from(items).forEach((item) => {
    const text = item.innerText.toLowerCase()

    if (!text.includes(value)) {
      item.style.display = "none"
    } else {
      item.style.display = ""; // or item.style.display = "initial";
      // item.style.display = "list-item"
    }
  })
}

input.addEventListener("input", filterFunction)
