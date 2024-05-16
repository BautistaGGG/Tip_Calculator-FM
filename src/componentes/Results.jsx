/* eslint-disable react/prop-types */
function Results({ totalPerPerson, tipPerPerson, totalWithTipPerPerson }) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Resultado del calculo</h2>
        <div className="flex flex-col space-y-2">
          <div>
            <span className="font-bold">Total /persona:</span> ${totalPerPerson.toFixed(2)}
          </div>
          <div>
            <span className="font-bold">Propina /persona:</span> ${tipPerPerson.toFixed(2)}
          </div>
          <div>
            <span className="font-bold">Total + propina /persona:</span> ${totalWithTipPerPerson.toFixed(2)}
          </div>
        </div>
      </div>
    )
  }

export default Results
  