export default function Stats({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
      {children}
    </div>
  );
}
