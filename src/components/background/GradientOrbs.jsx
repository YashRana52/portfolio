import { motion } from "framer-motion";

const GradientOrbs = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* ORB 1 */}

            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        top-[-100px]
        left-[-100px]
        w-[400px]
        h-[400px]
        rounded-full
        bg-blue-500/20
        blur-[120px]
        "
            />

            {/* ORB 2 */}

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        top-[30%]
        right-[-100px]
        w-[350px]
        h-[350px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
            />

            {/* ORB 3 */}

            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
        absolute
        bottom-[-100px]
        left-[30%]
        w-[300px]
        h-[300px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "
            />
        </div>
    );
};

export default GradientOrbs;