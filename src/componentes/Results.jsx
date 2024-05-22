/* eslint-disable react/prop-types */
function Results({ totalPerPerson, tipPerPerson, totalWithTipPerPerson }) {
    return (
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="text-[#26c0ab] text-md md:text-2xl">
            <span className="block font-bold text-white">
              Total /persona:
            </span> 
            ${totalPerPerson.toFixed(2)}
          </div>
          <div className="text-[#26c0ab] text-md md:text-2xl">
            <span className="block font-bold text-white">
              Propina /persona:
            </span> 
            ${tipPerPerson.toFixed(2)}
          </div>
          <div className="text-[#26c0ab] text-md md:text-2xl">
            <span className="block font-bold text-white">
              Total + propina /persona:
            </span> 
            ${totalWithTipPerPerson.toFixed(2)}
          </div>
        </div>
      </div>
    )
  }

export default Results
  