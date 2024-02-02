const reverseTheString = (string) => {
  let array = string.split('')
  let reversedArray = array.reverse()
  let joinTheString = reversedArray.join('')
  // console.log(joinTheString)
  return joinTheString 
}

const isPalindrome = (string, reversedString) =>  {
  return string === reversedString
}

/*
const numberToString = (inputDate) => {
  if (inputDate.date < 10) {
    inputDate.date = '0'+ inputDate.date 
    // console.log(inputDate.date)
    // console.log(typeof(inputDate.date))
  } if (inputDate.month < 10) {
    inputDate.month = '0'+ inputDate.month
    // console.log(inputDate.month)
    // console.log(typeof(inputDate.month))
  } if (inputDate.year) {
    inputDate.year = ''+ inputDate.year
    // console.log(inputDate.year)
    // console.log(typeof(inputDate.year))
  } 
  // console.log(inputDate)
  // console.log(typeof(inputDate))
  return inputDate
}
*/

const numberToString = (inputDate) => {
  let dateStr = { date: '', month: '', year: ''}
  if(inputDate.date < 10) {
    dateStr.date = '0' + inputDate.date
  } else {
    dateStr.date = inputDate.date.toString()
  }
  if(inputDate.month < 10) {
    dateStr.month = '0' + inputDate.month
  } else {
    dateStr.month = inputDate.month.toString()
  }
  dateStr.year = inputDate.year.toString()
  return dateStr
}

const getAllDateFormat = (inputDate) => {
  const strigfyDate = numberToString(inputDate)
  var ddmmyyyy = strigfyDate.date + strigfyDate.month + strigfyDate.year
  var mmddyyyy = strigfyDate.month + strigfyDate.date + strigfyDate.year
  var yyyymmdd = strigfyDate.year + strigfyDate.month + strigfyDate.date
  var ddmmyy = strigfyDate.date + strigfyDate.month + strigfyDate.year.slice(-2)
  var mmddyy = strigfyDate.month + strigfyDate.date + strigfyDate.year.slice(-2)
  var yyddmm = strigfyDate.year.slice(-2) + strigfyDate.date + strigfyDate.month

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm]
}

/*
const checkPalindrome = (inputDate) => {
  const strigfyDate = getAllDateFormat(inputDate)
  console.log(strigfyDate)
  const resultArray = []
  for (let i =0; i <strigfyDate.length; i++) {
    booleanResult = isPalindrome(strigfyDate[i], reverseTheString(strigfyDate[i]))
    resultArray.push(booleanResult)
  }
  return resultArray
}
*/

const checkPalindrome = (inputDate) => {
  const strigfyDate = getAllDateFormat(inputDate)
  // console.log(strigfyDate)
  let flag = false
 
  for (let i =0; i <strigfyDate.length; i++) {
    if(isPalindrome(strigfyDate[i], reverseTheString(strigfyDate[i]))){
      flag = true
      break
    }
  }
  return flag
}

const isLeapYear = (year) => {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false
}

const getNextDate = (inputDate) => {
  let date = inputDate.date + 1 // increment the day
  let month = inputDate.month
  let year = inputDate.year

  let datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if(month === 2) { // check for February
    if(isLeapYear(year)) {
      if(date > 29) {
        date = 1
        month++
      }
    } else {
      if(date > 28) {
        date = 1
        month++
      }
    }
  } else {
    // check if the day exceeds the max days in month
    if(date > datesInMonth[month - 1]) {
      date = 1
      month++
    }
  }

  if(month > 12) {
    month = 1
    year++
  }

  return {
    date: date,
    month: month,
    year: year
  }
}

const getNextPalindromeDate = (inputDate) => {
  let counterNext = 0
  let nextDate = getNextDate(inputDate)

  while(1) {
    counterNext++
    let isPalindrome = checkPalindrome(nextDate)
    if(isPalindrome) {
      break
    }
    nextDate = getNextDate(nextDate)
  }
  return [counterNext, nextDate]
}

const getPreviousDate = (inputDate) => {
  let date = inputDate.date - 1 // decrement the day
  let month = inputDate.month
  let year = inputDate.year


  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // 1 1 2020

  if (date < 1) {
    month--
    if (month < 1) {
      year--
      month = 12
      date = daysInMonth[month - 1]
    } else {
      date = daysInMonth[month - 1]
    }
  }

  return {
    date: date,
    month: month,
    year: year
  }
}

const getPreviousPalindromeDate = (inputDate) => {
  let counterPrevious = 0
  let previousDate = getPreviousDate(inputDate)

  while(1) {
    counterPrevious++
    let isPalindrome = checkPalindrome(previousDate)
    if(isPalindrome) {
      break
    }
    previousDate = getPreviousDate(previousDate)
  }
  return [counterPrevious, previousDate]
}

const string = 'mom'
const reversedString =  reverseTheString(string)
// console.log(reversedString)
const result = isPalindrome(string, reversedString)
// console.log(result)
const inputDate = {
  date: 5,
  month: 10,
  year: 2015
}
const numToStr = numberToString(inputDate)
// console.log(numToStr)

const formatedDates =  getAllDateFormat(inputDate)
// console.log(formatedDates)

const booleanArray = checkPalindrome(inputDate)
// console.log(booleanArray)

// console.log(getNextDate(inputDate))

const nextPalindromeDate = getNextPalindromeDate(inputDate)
// console.log(nextPalindromeDate)

const previousPalindromeDate = getPreviousPalindromeDate(inputDate)
// console.log(previousPalindromeDate)

const selectedDate = document.querySelector('#bday-input')
console.log(selectedDate)
const showButton = document.querySelector('#show-btn')
console.log(showButton)
const displayResult = document.querySelector('#display-result')

const clickHandler = (event) => {
  let bdayStr = selectedDate.value  // 2020-10-11
  console.log(bdayStr) 
  
  if(bdayStr !== ''){
    let listOfDate = bdayStr.split('-'); // ['2020', '10', '11']

    let dateEntered = {
      date: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0])
    };

    console.log(dateEntered) 
    
    var isPalindrome = checkPalindrome(dateEntered);

    if(isPalindrome){
       displayResult.innerText = 'Yay! your birthday is a palindrome!! 🥳🥳';
    }
    else {
      var [ctr, nextDate] = getNextPalindromeDate(dateEntered);

      displayResult.innerText = `The next palindrome date is ${nextDate.date}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days! 😔`;
    }
  }
}

showButton.addEventListener('click', clickHandler)