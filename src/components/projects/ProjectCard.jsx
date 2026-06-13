import { motion } from "framer-motion";

import {
    ArrowUpRight,
} from "lucide-react";
import { FiGithub as GithubIcon } from "react-icons/fi";

const ProjectCard = ({
    project,
}) => {
    return (
        <motion.div

            whileHover={{
                y: -6,
            }}

            className="
      group
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:border-blue-500/30
      transition-all
      duration-500
      "
        >
            {/* IMAGE */}

            <div className="overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="
          w-full
          h-[260px]
          object-cover
          group-hover:scale-105
          transition-all
          duration-700
          "
                />
            </div>

            {/* CONTENT */}

            <div className="p-8">
                {/* TITLE */}

                <h3
                    className="
          text-2xl
          font-bold
          text-white
          "
                >
                    {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                    className="
          mt-4
          text-gray-400
          leading-relaxed
          "
                >
                    {project.description}
                </p>

                {/* FEATURES */}

                <div
                    className="
          mt-6
          flex
          flex-wrap
          gap-3
          "
                >
                    {project.features.map(
                        (feature) => (
                            <span
                                key={feature}
                                className="
                text-sm
                px-3
                py-2
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-gray-300
                "
                            >
                                {feature}
                            </span>
                        )
                    )}
                </div>

                {/* TECH STACK */}

                <div
                    className="
          mt-6
          flex
          flex-wrap
          gap-3
          "
                >
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="
              px-4
              py-2
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/20
              text-blue-400
              text-sm
              "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* BUTTONS */}

                <div
                    className="
          mt-8
          flex
          items-center
          gap-4
          "
                >
                    {/* LIVE */}

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-blue-500
            hover:bg-blue-600
            transition-all
            duration-300
            font-medium
            "
                    >
                        Live Demo

                        <ArrowUpRight size={18} />
                    </a>

                    {/* GITHUB */}

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
            w-12
            h-12
            rounded-xl
            border
            border-white/10
            bg-white/5
            flex
            items-center
            justify-center
            hover:border-blue-500/30
            transition-all
            duration-300
            "
                    >
                        <GithubIcon size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;