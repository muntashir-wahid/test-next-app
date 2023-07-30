import { useEffect, useState } from "react";

export default function Skills({ skills }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      <ul className="my-2 flex flex-col gap-2 list-disc">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>

      {!loggedIn ? (
        <button
          className="p-3 border border-gray-700 rounded-md"
          onClick={() => setLoggedIn(true)}
        >
          Login
        </button>
      ) : (
        <button className="p-3 border border-gray-700 rounded-md">
          Start Learning
        </button>
      )}
    </>
  );
}
