import { useRef } from "react";

import { motion } from "framer-motion";

const MagneticButton = ({
    children,
    className = "",
}) => {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const button =
            ref.current;

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX -
            rect.left -
            rect.width / 2;

        const y =
            e.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2
            }px)
    `;
    };

    const handleMouseLeave = () => {
        ref.current.style.transform =
            "translate(0px, 0px)";
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={
                handleMouseMove
            }
            onMouseLeave={
                handleMouseLeave
            }
            whileTap={{
                scale: 0.96,
            }}
            className={`
      relative
      overflow-hidden
      transition-transform
      duration-200
      ${className}
      `}
        >
            {/* GLOW */}

            <span
                className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500/0
        via-white/10
        to-purple-500/0
        opacity-0
        hover:opacity-100
        transition-opacity
        duration-500
        "
            />

            <span className="relative z-10">
                {children}
            </span>
        </motion.button>
    );
};

export default MagneticButton;