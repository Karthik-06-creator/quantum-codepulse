"use client";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ResultVisualizer({ result }) {
  const COLORS = ["#a855f7", "#6366f1", "#14b8a6", "#f59e0b", "#ef4444"];

  const data = result?.probabilities?.map((p, i) => ({
    name: result.states[i],
    value: p,
  }));

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-10 text-center">
      <h3 className="text-2xl font-semibold mb-6">Simulation Result</h3>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <PieChart width={250} height={250}>
          <Pie dataKey="value" data={data} outerRadius={100} label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="bg-gray-900 p-4 rounded-lg w-72">
          <h4 className="text-lg mb-3">Quantum States:</h4>
          {result.states.map((s, i) => (
            <p key={i}>
              {s}: {Math.round(result.probabilities[i] * 100)}%
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
