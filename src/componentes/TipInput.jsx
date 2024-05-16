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
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipPercentage">
        Porcentaje de propina
      </label>

      <select
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${customTip && 'bg-gray-200'}`}
        id="tipPercentage"
        value={tipPercentage}
        onChange={handleTipChange}
        disabled={!!customTip} // Disable select if customTip is set
      >
        <option value="">Selecciona un porcentaje de propina</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="25">25%</option>
        <option value="50">50%</option>
      </select>
      {/* Disable custom tip input when a percentage is selected */}
      <input
        className={`shadow appearance-none border rounded mt-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${tipPercentage && 'bg-gray-200'}`}
        type="number"
        placeholder="Enter custom tip percentage"
        value={customTip}
        onChange={handleCustomTipChange}
        disabled={!!tipPercentage} // Disable input if tipPercentage is set
      />
    </div>
  )
}


export default TipInput