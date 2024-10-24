const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');

form.addEventListener('submit', (event) => {
  result.innerText = ``
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
 /**
 * Validates the input values from the form.
 * @returns {boolean} - Returns true if inputs are valid, otherwise false.
 */
  const validateInputs = () => {
    //the inputs are there
     if( dividend === '' || divider === '' ){
      result.innerText = 'Division not performed. Both values are required in inputs. Try again'
      console.error('Division not performed. Both values are required in inputs. Try again')
      return false
    }
    //divider cant be 0
    if (parseFloat(divider) === 0 ){
      result.innerText ='Division not performed. Invalid number provided. Try again'
      console.error('Division not performed. Invalid number provided. Try again')
      return false
    }
    //inputs are numbers
    if ( isNaN(dividend) || isNaN(divider) ){
      console.error('Inputs must be valid numbers')
      throw new Error('Inputs must be a valid number')
    }
    return true
}
  try{
    if(!validateInputs()){
      return
    }

    const divisionResult = parseFloat(dividend) / parseFloat(divider)
    result.innerText = Math.floor(divisionResult)
  } catch(error){
    console.error(error)
    document.body.innerHTML=`
      <div style="text-align: center; margin-top: 20%;">
          <h1 style="color: red;">Error!</h1>
          <p style="font-size: 20px;">Something critical went wrong. Please reload the page</p>
      </div>
      `
  }
});