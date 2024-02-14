const intialPrice = document.querySelector('.initial-price')
const stockQuantity = document.querySelector('.stock-quantity')
const currentPrice = document.querySelector('.current-price')
const submitButton = document.querySelector('.submit-btn')
const displayResult = document.querySelector('.display-result')

const calculateProfitAndLoss = (initial, quantity, current) => {
  if(initial > current) {
    // loss logic here
    let loss = (initial - current) * quantity
    let lossPercentage = (loss / initial) * 100
    // console.log(`Hey the loss is ${loss} and percent is ${lossPercentage}%.`)
    displayResult.innerHTML = `Hey the loss is ${loss} and percent is ${lossPercentage}%.`
  } else if (initial < current ) {
    // profit logic here
    let profit = (current - initial) * quantity
    let profitPercentage = (profit / initial) * 100
    // console.log(`Hey the loss is ${profit} and percent is ${profitPercentage}%.`)
    displayResult.innerHTML = `Hey the profit is ${profit} and percent is ${profitPercentage}%.`
  } else {
    // break-even logic here
    // console.log(`No Pain No Gain and No Gain No Pain`)
    displayResult.innerHTML = `No Pain No Gain and No Gain No Pain`
  }
}

// console.log(calculateProfitAndLoss(100, 10, 10))
// console.log(calculateProfitAndLoss(10, 10, 100))
// console.log(calculateProfitAndLoss(10, 10, 10))

const submitHandler = () => {
  let enteredInitialPrice = intialPrice.value
  let enteredStockQuantity = stockQuantity.value
  let enteredCurrentPrice = currentPrice.value
  console.log(`${enteredInitialPrice}  ${enteredStockQuantity} ${enteredCurrentPrice}` )
  calculateProfitAndLoss(enteredInitialPrice, enteredStockQuantity, enteredCurrentPrice)
}

submitButton.addEventListener('click', submitHandler)