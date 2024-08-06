export const Button = ({children, onClick}) => {
  return (
    <button className="px-4 py-2 border bg-gray-100 hover:bg-gray-300 rounded-lg" onClick={onClick}>{children}</button>
  );
}