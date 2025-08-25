export function FormInput(props) {
  return (
    <input
      {...props}
      className={`border border-gray-400 rounded-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        props.className || ""
      }`}
    />
  );
}
