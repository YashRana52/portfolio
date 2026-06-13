import { motion } from "framer-motion";

import { staggerContainer } from "../../animations/stagger";

import { fadeUp } from "../../animations/fadeUp";

import Container from "../layout/Container";

import SectionHeading from "../ui/SectionHeading";

import ExpertiseCard from "./ExpertiseCard";

import { expertise } from "../../data/expertise";

const Expertise = () => {
    return (
        <section
            id="expertise"
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
                            subtitle="Engineering Expertise"
                            title="Building Production-Grade Backend Systems"
                        />
                    </motion.div>

                    {/* GRID */}

                    <div
                        className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
                    >
                        {expertise.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                            >
                                <ExpertiseCard
                                    item={item}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Expertise;