export default function Button({ onClick, type, id, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      data-testid={id}
      className="p-3 border border-gray-700 rounded-md"
    >
      {children}
    </button>
  );
}
