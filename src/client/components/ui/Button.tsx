/**
 * What types of buttons do we need?
 * - Submit
 * - Reset
 * - Button
 * - Link
 * - Cancel
 * - Delete
 */

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export const Button = ({
  onClick,
  children,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
