import { motion } from "framer-motion";

const ExpertiseCard = ({
    item,
}) => {
    const Icon = item.icon;

    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
            className="
      group
      relative
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      overflow-hidden
      hover:border-blue-500/30
      transition-all
      duration-500
      "
        >
            {/* GLOW */}

            <div
                className="
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-500/0
        to-purple-500/0
        group-hover:from-blue-500/10
        group-hover:to-purple-500/10
        transition-all
        duration-500
        "
            />

            {/* ICON */}

            <div
                className="
        relative
        w-16
        h-16
        rounded-2xl
        bg-blue-500/10
        border
        border-blue-500/20
        flex
        items-center
        justify-center
        mb-6
        "
            >
                <Icon
                    size={30}
                    className="text-blue-400"
                />
            </div>

            {/* CONTENT */}

            <div className="relative">
                <h3
                    className="
          text-2xl
          font-semibold
          text-white
          "
                >
                    {item.title}
                </h3>

                <p
                    className="
          mt-4
          text-gray-400
          leading-relaxed
          "
                >
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ExpertiseCard;