import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiRedis,
    SiPostgresql,
    SiTailwindcss,
    SiJavascript,
    SiSocketdotio,
} from "react-icons/si";

export const skills = [
    {
        category: "Frontend",
        items: [
            {
                name: "React.js",
                icon: FaReact,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
            },
        ],
    },

    {
        category: "Backend",
        items: [
            {
                name: "Node.js",
                icon: FaNodeJs,
            },
            {
                name: "Express.js",
                icon: SiExpress,
            },
            {
                name: "Socket.io",
                icon: SiSocketdotio,
            },
        ],
    },

    {
        category: "Database",
        items: [
            {
                name: "MongoDB",
                icon: SiMongodb,
            },
            {
                name: "Redis",
                icon: SiRedis,
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
            },
        ],
    },

    {
        category: "Tools",
        items: [
            {
                name: "Docker",
                icon: FaDocker,
            },
            {
                name: "Git",
                icon: FaGitAlt,
            },
        ],
    },
];