const form = document.querySelector('[data-form]')
const result = document.querySelector('[data-result]')

/**
 * Displays an error message on the result element and logs it to the console.
 * @param {string} message - The error message to display and log.
 */
const displayError = (message) => {
  result.innerText=message
  console.error(message)
}

/**
 * Validates the input values from the form.
 * @param {string} dividend - The dividend input value.
 * @param {string} divider - The divider input value.
 * @returns {boolean} - Returns true if inputs are valid, otherwise false.
 */
const validateInputs = (dividend,divider) => {
  //the inputs are there
   if( dividend === '' || divider === '' ){
    displayError('Division not performed. Both values are required in inputs. Try again')
    return false;
  }
  //divider cant be 0
  if (parseFloat(divider) === 0 ){
    displayError('Division not performed. Invalid number provided. Try again')
    return false;
  }
  //inputs are numbers
  if ( isNaN(dividend) || isNaN(divider) ){
    displayError('Inputs must be valid numbers')
    throw new Error('Inputs must be a valid number')
  }
  return true
}

/**
 * Handles the form submission.
 * @param {Event} event - The form submission event.
 */
const handleFormSubmit = (event) => {
  result.innerText = ``
  event.preventDefault()
  const entries = new FormData(event.target)
  const { dividend, divider } = Object.fromEntries(entries)
 
  try{
    if(!validateInputs(dividend, divider)){
      return
    }

    const divisionResult = Math.floor(parseFloat(dividend) / parseFloat(divider))
    result.innerText = divisionResult
  } catch(error){
    console.error(error)
    document.body.innerHTML=`
      <div style="text-align: center; margin-top: 20%;">
          <h1 style="color: red;">Error!</h1>
          <p style="font-size: 20px;">Something critical went wrong. Please reload the page</p>
      </div>
      `
  }
}

form.addEventListener('submit', handleFormSubmit)