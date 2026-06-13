
import { motion } from "framer-motion";

import MagneticButton from "../ui/MagneticButton";

import {
    FiGithub as Github,
    FiLinkedin as Linkedin,
    FiArrowRight as ArrowRight,
} from "react-icons/fi";

import Container from "../layout/Container";

const Hero = () => {
    return (
        <section
            id="home"
            className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      pt-32
      pb-20
      "
        >
            {/* BACKGROUND */}

            <div
                className="
        absolute
        top-[-100px]
        left-[20%]
        w-[300px]
        h-[300px]
        bg-blue-500/20
        blur-[120px]
        rounded-full
        "
            />

            <div
                className="
        absolute
        bottom-[-100px]
        right-[10%]
        w-[300px]
        h-[300px]
        bg-purple-500/20
        blur-[120px]
        rounded-full
        "
            />

            <Container>
                <div
                    className="
          flex
          flex-col
          items-center
          text-center
          "
                >
                    {/* BADGE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            text-blue-400
            text-sm
            mb-8
            "
                    >
                        Available for Full-Stack Roles
                    </motion.div>

                    {/* HEADING */}

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            max-w-6xl
            "
                    >
                        Building
                        <span className="text-blue-500">
                            {" "}
                            Scalable Backend Systems{" "}
                        </span>
                        & Modern Full-Stack Applications
                    </motion.h1>

                    {/* SUBTITLE */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
            mt-8
            text-base
            sm:text-lg
            text-gray-400
            leading-relaxed
            max-w-3xl
            "
                    >
                        Full-stack MERN developer
                        specializing in scalable
                        backend architecture, Redis
                        systems, authentication,
                        real-time applications, and
                        production-grade SaaS
                        platforms.
                    </motion.p>


                    {/* ACTIONS */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.9,
                        }}
                        className="
  flex
  items-center
  justify-center
  gap-5
  mt-10
  flex-wrap
  "
                    >
                        {/* GITHUB */}

                        <a
                            href="#"
                            className="
    w-14
    h-14
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    flex
    items-center
    justify-center
    hover:border-blue-500/40
    hover:-translate-y-1
    transition-all
    duration-300
    "
                        >
                            <Github size={22} />
                        </a>

                        {/* RESUME BUTTON */}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="
    px-8
    py-4
    rounded-2xl
    bg-blue-500
    hover:bg-blue-600
    hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
    transition-all
    duration-300
    font-medium
    text-white
    "
                        >
                            Download Resume
                        </a>

                        {/* LINKEDIN */}

                        <a
                            href="#"
                            className="
    w-14
    h-14
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    flex
    items-center
    justify-center
    hover:border-blue-500/40
    hover:-translate-y-1
    transition-all
    duration-300
    "
                        >
                            <Linkedin size={22} />
                        </a>
                    </motion.div>



                    {/* TERMINAL */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="
            mt-20
            w-full
            max-w-5xl
            "
                    >
                        <div
                            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
              shadow-2xl
              text-left
              "
                        >
                            {/* TOP BAR */}

                            <div
                                className="
                flex
                items-center
                gap-2
                px-6
                py-4
                border-b
                border-white/10
                "
                            >
                                <div className="w-3 h-3 rounded-full bg-red-500" />

                                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>

                            {/* CONTENT */}


                            <div
                                className="
  grid
  lg:grid-cols-3
  gap-8
  p-6
  md:p-10
  font-mono
  text-sm
  md:text-base
  "
                            >
                                {/* BACKEND */}

                                <div
                                    className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
    "
                                >
                                    <p className="text-green-400">
                                        $ backend-engineering
                                    </p>

                                    <div className="mt-5 space-y-3 text-gray-300">
                                        <p>
                                            → Node.js & Express
                                        </p>

                                        <p>
                                            → REST API Design
                                        </p>

                                        <p>
                                            → JWT Authentication
                                        </p>

                                        <p>
                                            → RBAC Systems
                                        </p>

                                        <p>
                                            → Inngest Workflows
                                        </p>

                                        <p>
                                            → Rate Limiting
                                        </p>

                                        <p>
                                            → Scalable Architecture
                                        </p>
                                    </div>
                                </div>

                                {/* DATABASE */}

                                <div
                                    className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
    "
                                >
                                    <p className="text-green-400">
                                        $ database-systems
                                    </p>

                                    <div className="mt-5 space-y-3 text-gray-300">
                                        <p>
                                            → MongoDB Aggregation
                                        </p>

                                        <p>
                                            → PostgreSQL
                                        </p>

                                        <p>
                                            → MySQL
                                        </p>

                                        <p>
                                            → Advanced SQL
                                        </p>

                                        <p>
                                            → Query Optimization
                                        </p>

                                        <p>
                                            → Database Indexing
                                        </p>

                                        <p>
                                            → Redis Caching
                                        </p>
                                    </div>
                                </div>

                                {/* FRONTEND */}

                                <div
                                    className="
    rounded-2xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
    "
                                >
                                    <p className="text-green-400">
                                        $ frontend-realtime
                                    </p>

                                    <div className="mt-5 space-y-3 text-gray-300">
                                        <p>
                                            → Next.js & React
                                        </p>

                                        <p>
                                            → TypeScript
                                        </p>

                                        <p>
                                            → Tailwind CSS
                                        </p>

                                        <p>
                                            → Framer Motion
                                        </p>

                                        <p>
                                            → Socket.io Systems
                                        </p>

                                        <p>
                                            → Zustand & Redux
                                        </p>

                                        <p>
                                            → SaaS UI Architecture
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

