import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

import Container from "../layout/Container";

import SectionHeading from "../ui/SectionHeading";

const Contact = () => {
    return (
        <section
            id="contact"
            className="
      py-24
      relative
      "
        >
            <Container>
                <SectionHeading
                    subtitle="Contact"
                    title="Let's Build Something Great"
                />

                <div
                    className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
                >
                    {/* LEFT */}

                    <div>
                        <h3
                            className="
              text-4xl
              font-bold
              leading-tight
              "
                        >
                            Have an opportunity,
                            project, or idea?
                        </h3>

                        <p
                            className="
              mt-6
              text-gray-400
              leading-relaxed
              text-lg
              "
                        >
                            I’m always interested in
                            building scalable web
                            applications, backend
                            systems, and modern SaaS
                            products.
                        </p>

                        {/* SOCIALS */}

                        <div
                            className="
              flex
              items-center
              gap-5
              mt-10
              "
                        >
                            {/* GITHUB */}

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:border-blue-500/30
                hover:-translate-y-1
                transition-all
                duration-300
                "
                            >
                                <Github size={24} />
                            </a>

                            {/* LINKEDIN */}

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:border-blue-500/30
                hover:-translate-y-1
                transition-all
                duration-300
                "
                            >
                                <Linkedin size={24} />
                            </a>

                            {/* EMAIL */}

                            <a
                                href="mailto:your@email.com"
                                className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:border-blue-500/30
                hover:-translate-y-1
                transition-all
                duration-300
                "
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div
                        className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
                    >
                        <form className="space-y-6">
                            {/* NAME */}

                            <div>
                                <label
                                    className="
                  text-sm
                  text-gray-400
                  "
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="
                  w-full
                  mt-2
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  focus:border-blue-500/40
                  transition-all
                  duration-300
                  "
                                />
                            </div>

                            {/* EMAIL */}

                            <div>
                                <label
                                    className="
                  text-sm
                  text-gray-400
                  "
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="
                  w-full
                  mt-2
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  focus:border-blue-500/40
                  transition-all
                  duration-300
                  "
                                />
                            </div>

                            {/* MESSAGE */}

                            <div>
                                <label
                                    className="
                  text-sm
                  text-gray-400
                  "
                                >
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="
                  w-full
                  mt-2
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  outline-none
                  resize-none
                  focus:border-blue-500/40
                  transition-all
                  duration-300
                  "
                                />
                            </div>

                            {/* BUTTON */}

                            <button
                                className="
                w-full
                py-4
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition-all
                duration-300
                font-medium
                "
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;