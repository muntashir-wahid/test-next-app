import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-6">
      <h4 className="text-2xl font-semibold mb-2">{count}</h4>
      <button
        onClick={() => setCount((prevCount) => ++prevCount)}
        className="p-3 border border-gray-700 rounded-md"
      >
        Increment Count
      </button>
    </div>
  );
}
