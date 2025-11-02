export default function QuantumCard({ input, setInput, simulateQuantum }) {
    return (
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl mb-4 font-semibold">Enter Quantum Data</h2>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 1010 or Hello"
          className="w-full p-2 mb-4 text-black rounded-lg outline-none"
        />
        <button
          onClick={simulateQuantum}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Simulate
        </button>
      </div>
    );
  }
  