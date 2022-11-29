import { useState } from "react";
import "./App.css";

function fizzbuzz(n) {
  if (n % 15 === 0) return "fizzbuzz";
  if (n % 3 === 0) return "fizz";
  if (n % 5 === 0) return "buzz";
  return n;
}

export default function App() {
  const [step, setStep] = useState(1);
  let value = fizzbuzz(step);
  return (
    <>
      <h1 className="mt-10 text-8xl font-bold text-center">Fizzbuzz</h1>
      <div className="flex items-center justify-evenly my-10">
        <div className="w-30 inline-block text-8xl m-4 bg-teal-500 rounded-3xl p-6 text-white">
          step: {step}
        </div>
        <div className="w-30 inline-block font-semibold text-8xl m-4 text-purple-500 p-4 border-purple-500 rounded-3xl border-8">
          {value}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          className="mx-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-2xl font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-white-600 px-3 py-2 text-2xl font-medium leading-4 text-indigo-400 shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setStep(1)}
        >
          Reset
        </button>
      </div>
    </>
  );
}
