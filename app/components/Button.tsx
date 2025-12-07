interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3 rounded-md font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-[#C67A2B] text-white hover:bg-[#a86422]",
    outline:
      "border border-[#C67A2B] text-[#C67A2B] hover:bg-[#C67A2B] hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
