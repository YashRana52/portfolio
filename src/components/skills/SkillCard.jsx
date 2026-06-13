import { motion } from "framer-motion";

const SkillCard = ({
    name,
    Icon,
}) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
            }}
            className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      flex
      flex-col
      items-center
      justify-center
      gap-4
      hover:border-blue-500/30
      transition-all
      duration-300
      "
        >
            <Icon
                size={42}
                className="text-blue-400"
            />

            <h3 className="font-medium text-gray-200">
                {name}
            </h3>
        </motion.div>
    );
};

export default SkillCard;