import { motion } from "framer-motion";

import Container from "../layout/Container";

import SectionHeading from "../ui/SectionHeading";

import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

import { staggerContainer } from "../../animations/stagger";

import { fadeUp } from "../../animations/fadeUp";

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 relative"
        >
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    variants={staggerContainer}
                >
                    {/* HEADING */}

                    <motion.div variants={fadeUp}>
                        <SectionHeading
                            subtitle="Featured Work"
                            title="Projects That Showcase My Engineering Skills"
                        />
                    </motion.div>

                    {/* PROJECTS */}

                    <div
                        className="
            grid
            lg:grid-cols-2
            gap-10
            "
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.title}
                                variants={fadeUp}
                            >
                                <ProjectCard
                                    project={project}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Projects;