import { motion } from "framer-motion";

const TimelineCard = ({
    item,
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -40,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
            }}
            className="
      relative
      pl-10
      pb-14
      "
        >
            {/* LINE */}

            <div
                className="
        absolute
        left-[11px]
        top-0
        w-[2px]
        h-full
        bg-white/10
        "
            />

            {/* DOT */}

            <div
                className="
        absolute
        left-0
        top-1
        w-6
        h-6
        rounded-full
        bg-blue-500
        border-4
        border-[#0B0F19]
        "
            />

            {/* CONTENT */}

            <div
                className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        hover:border-blue-500/30
        transition-all
        duration-300
        "
            >
                {/* YEAR */}

                <span
                    className="
          text-blue-400
          text-sm
          font-medium
          "
                >
                    {item.year}
                </span>

                {/* TITLE */}

                <h3
                    className="
          mt-3
          text-2xl
          font-semibold
          text-white
          "
                >
                    {item.title}
                </h3>

                {/* DESCRIPTION */}

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

export default TimelineCard;