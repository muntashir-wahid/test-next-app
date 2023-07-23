import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-2 max-w-sm mx-auto">
      <input
        className="border border-gray-800 p-1 rounded-sm"
        type="text"
        placeholder="Your user name"
        value={userName}
        data-testid="username-field"
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        className="border border-gray-800 p-1 rounded-sm"
        type="password"
        placeholder="Your password"
        value={password}
        data-testid="password-field"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        data-testid="submit-btn"
        type="submit"
        className={`px-4 py-2 bg-lime-500 font-semibold text-white `}
        disabled={!userName || !password}
      >
        Login
      </button>
    </form>
  );
}
