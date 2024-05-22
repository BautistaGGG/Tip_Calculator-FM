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
  <main className='font-Space-Mono'>
    <h1 className='text-center text-4xl my-4 text-[#00494d]'>  
      Splitter
    </h1>
    <article className="container mx-auto bg-white p-6 md:p-8 rounded-md md:flex md:justify-center md:gap-8">
      <section>
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
      </section>
      
      <section className='bg-[#00494d] p-4 rounded-md'>
        {errorMessage && <p className="text-red-500"> {errorMessage} </p>}
        <Results 
          totalPerPerson={totalPerPerson} 
          tipPerPerson={tipPerPerson} 
          totalWithTipPerPerson={totalWithTipPerPerson}
        />

        <button 
          className="bg-white hover:bg-gray-400 text-[#00494d] font-bold py-2 px-4 block my-0 mx-auto md:ml-2 rounded disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={billAmount === ''}
          onClick={handleCalculate}
        > 
          Calcular
        </button>

        <button 
          className="bg-[#26c0ab] hover:bg-[#1c9181] text-gray-800 font-bold py-2 px-4 rounded block mx-auto my-4 md:ml-2 disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={billAmount === ''} 
          onClick={handleReset}
        > 
          Reiniciar 
        </button>
      </section>
    </article>
  </main>
  );
}

export default App
