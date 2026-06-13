import Container from "../layout/Container";

import SectionHeading from "../ui/SectionHeading";

import TimelineCard from "./TimelineCard";

import { experience } from "../../data/experience";

const Journey = () => {
    return (
        <section
            id="journey"
            className="py-24 relative"
        >
            <Container>
                <SectionHeading
                    subtitle="Journey"
                    title="My Development Journey"
                />

                <div
                    className="
          max-w-4xl
          "
                >
                    {experience.map((item) => (
                        <TimelineCard
                            key={item.title}
                            item={item}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Journey;