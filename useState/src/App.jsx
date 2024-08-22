import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transaction, setTransaction] = useState([]);

  const handleAddTransaction = () => {
    setTransaction([...transaction, { amount, type }]);

    setAmount("");
    setType("income");
  };

  return (
    <>
      <div className="bg-gray-500 w-full h-screen flex flex-col justify-center items-center">
        <div className="flex  gap-5">
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            placeholder="Add Amount"
          />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income" className="">
              Income
            </option>
            <option value="expense">Expense</option>
          </select>
          <button
            onClick={handleAddTransaction}
            className="bg-black text-white py-2 px-4"
          >
            Submit
          </button>
        </div>
        <div>
          {transaction.map((data, index) => {
            return (
              <div key={index} className="flex gap-5">
                <h1 className="font-bold underline text-3xl">
                  {index + 1}
                  {")"} {data.amount}
                </h1>
                <h1
                  className={`font-bold underline text-3xl ${
                    data.type === "income" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {data.type}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
