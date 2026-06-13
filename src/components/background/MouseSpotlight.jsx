import { motion } from "framer-motion";

import useMousePosition from "../../hooks/useMousePosition";

const MouseSpotlight = () => {
    const { x, y } =
        useMousePosition();

    return (
        <motion.div
            animate={{
                x: x - 200,
                y: y - 200,
            }}
            transition={{
                type: "tween",
                ease: "linear",
                duration: 0.15,
            }}
            className="
      pointer-events-none
      fixed
      top-0
      left-0
      w-[400px]
      h-[400px]
      rounded-full
      bg-blue-500/10
      blur-[120px]
      z-0
      "
        />
    );
};

export default MouseSpotlight;