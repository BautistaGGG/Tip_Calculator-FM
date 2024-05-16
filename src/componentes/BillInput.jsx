/* eslint-disable react/prop-types */
function BillInput({ billAmount, setBillAmount }) {

    function handleInputChange(e) {
      setBillAmount(e.target.value);
    }
  
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billAmount">
          Bill Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="billAmount"
          type="number"
          placeholder="Enter bill amount"
          value={billAmount}
          onChange={handleInputChange}
        />
      </div>
    );
  }

export default BillInput