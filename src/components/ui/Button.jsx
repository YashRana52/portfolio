const Button = ({
    children,
}) => {
    return (
        <button
            className="
      px-6
      py-3
      rounded-xl
      bg-blue-500
      hover:bg-blue-600
      transition-all
      duration-300
      font-medium
      "
        >
            {children}
        </button>
    );
};

export default Button;