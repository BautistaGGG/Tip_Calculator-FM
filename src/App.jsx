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
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalWithTipPerPerson, setTotalWithTipPerPerson] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');


  function calculateResults() {
    //Calculando el total a pagar x persona
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
    //VALIDACIONES de los calculos
    if (!billAmount || !numPeople) {
      setErrorMessage('Por favor, llena todos los campos requeridos.');
      return;
    }
  
    if (parseFloat(billAmount) <= 0 || parseInt(numPeople) <= 0) {
      setErrorMessage('Los valores deben ser mayores a 0.');
      return;
    }
  
    if (!tipPercentage && !customTip) {
      setErrorMessage('Selecciona un % de propina o ingresa un % personalizado.');
      return;
    }
  
    setErrorMessage('');
    calculateResults();
  }

  function handleReset() {
    //REINICIO de los valores
    setBillAmount('');
    setTipPercentage('');
    setCustomTip('');
    setNumPeople('');
    setErrorMessage('');
    setTotalPerPerson(0);
    setTipPerPerson(0);
    setTotalWithTipPerPerson(0);
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
        Calcular
      </button>

      <button onClick={handleReset} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Reiniciar 
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
