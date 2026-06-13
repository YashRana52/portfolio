import { motion } from "framer-motion";

import Container from "../layout/Container";

import SectionHeading from "../ui/SectionHeading";

import SkillCard from "./SkillCard";

import { skills } from "../../data/skills";

import { staggerContainer } from "../../animations/stagger";

import { fadeUp } from "../../animations/fadeUp";

const Skills = () => {
    return (
        <section
            id="skills"
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
                            subtitle="Tech Stack"
                            title="Technologies I Work With"
                        />
                    </motion.div>

                    {/* CATEGORIES */}

                    <div className="space-y-16">
                        {skills.map((category) => (
                            <motion.div
                                key={category.category}
                                variants={fadeUp}
                            >
                                <h3
                                    className="
                  text-2xl
                  font-semibold
                  mb-8
                  text-white
                  "
                                >
                                    {category.category}
                                </h3>

                                <div
                                    className="
                  grid
                  grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  gap-6
                  "
                                >
                                    {category.items.map(
                                        (skill) => (
                                            <SkillCard
                                                key={skill.name}
                                                name={skill.name}
                                                Icon={skill.icon}
                                            />
                                        )
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Skills;