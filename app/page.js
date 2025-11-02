"use client";
import { useState } from "react";
import QuantumCard from "./components/QuantumCard";
import ResultVisualizer from "./components/ResultVisualizer";
import { motion } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const simulateQuantum = async () => {
    if (!input.trim()) return alert("Enter valid input!");
    const res = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-purple-400 mb-6"
      >
        Quantum Vision ⚛️
      </motion.h1>

      <QuantumCard
        input={input}
        setInput={setInput}
        simulateQuantum={simulateQuantum}
      />

      {result && <ResultVisualizer result={result} />}
    </div>
  );
}
