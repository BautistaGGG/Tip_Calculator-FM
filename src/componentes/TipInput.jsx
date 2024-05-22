/* eslint-disable react/prop-types */
function TipInput({ tipPercentage, setTipPercentage, customTip, setCustomTip }) {
  function handleTipChange(e) {
    setTipPercentage(e.target.value);
    // Clear custom tip input when a percentage is selected
    setCustomTip('');
  }

  function handleCustomTipChange(e) {
    setCustomTip(e.target.value);
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="tipPercentage">
        Porcentaje de propina
      </label>

      <select
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${customTip && 'bg-gray-200'}`}
        id="tipPercentage"
        value={tipPercentage}
        onChange={handleTipChange}
        disabled={!!customTip} // Disable select IF customTip cambia su valor
      >
        <option value="">Selecciona un porcentaje de propina</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="25">25%</option>
        <option value="50">50%</option>
      </select>
      {/* Disable custom tip when un % es seleccionado */}
      <input
        className={`shadow appearance-none border rounded mt-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${tipPercentage && 'bg-gray-200'}`}
        type="number"
        placeholder="Ingresa un porcentaje de propina personalizado"
        value={customTip}
        onChange={handleCustomTipChange}
        disabled={!!tipPercentage} // Disable input IF tipPercentage cambia su valor
      />
    </div>
  )
}


export default TipInput