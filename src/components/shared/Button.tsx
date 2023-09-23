interface Props {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ type = "button", children, disabled = false }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="group relative inline-block overflow-hidden border border-blue-600 px-8 py-3 focus:outline-none focus:ring">
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 transition-all group-hover:h-full group-active:bg-blue-500"></span>
      <span className="relative text-sm font-medium text-blue-600 transition-colors group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default Button;
