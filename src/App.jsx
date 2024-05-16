import { useState } from 'react'
import BillInput from "./componentes/BillInput"
import TipInput from "./componentes/TipInput"
import PeopleInput from "./componentes/PeopleInput"
import Results from './componentes/Results'

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalWithTipPerPerson, setTotalWithTipPerPerson] = useState(0);

  function calculateResults() {
    // Calculate total amount to pay per person
    const totalBill = parseFloat(billAmount);
    const tipPercent = customTip ? parseFloat(customTip) : parseFloat(tipPercentage);
    const tipAmount = (totalBill * tipPercent) / 100;
    const totalWithTip = totalBill + tipAmount;
    const totalPerPersonValue = totalWithTip / parseInt(numPeople);
    const tipPerPersonValue = tipAmount / parseInt(numPeople);

    setTotalPerPerson(totalPerPersonValue);
    setTipPerPerson(tipPerPersonValue);
    setTotalWithTipPerPerson(totalPerPersonValue + tipPerPersonValue);
  }

  function handleCalculate() {
    if (!billAmount || !numPeople) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
  
    if (parseFloat(billAmount) <= 0 || parseInt(numPeople) <= 0) {
      setErrorMessage('Values must be greater than zero.');
      return;
    }
  
    if (!tipPercentage && !customTip) {
      setErrorMessage('Please select a tip percentage or enter a custom tip.');
      return;
    }
  
    setErrorMessage('');
    calculateResults();
  }

  return (
    <div className="container mx-auto p-4">
      <BillInput 
        billAmount={billAmount} 
        setBillAmount={setBillAmount} 
      />

      <TipInput
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />

      <PeopleInput 
        numPeople={numPeople} 
        setNumPeople={setNumPeople} 
      />

      <button onClick={handleCalculate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Calculate
      </button>

      {errorMessage && <p className="text-red-500"> {errorMessage} </p>}
      <Results 
        totalPerPerson={totalPerPerson} 
        tipPerPerson={tipPerPerson} 
        totalWithTipPerPerson={totalWithTipPerPerson}
      />
    </div>
  );
}

export default App
