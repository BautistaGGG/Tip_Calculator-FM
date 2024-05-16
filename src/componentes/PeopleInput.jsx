/* eslint-disable react/prop-types */
function PeopleInput({ numPeople, setNumPeople }) {
    function handleInputChange(e) {
        setNumPeople(e.target.value);
      }
    
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numPeople">
            Number of People
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numPeople"
            type="number"
            placeholder="Enter number of people"
            value={numPeople}
            onChange={handleInputChange}
          />
        </div>
      );
}

export default PeopleInput