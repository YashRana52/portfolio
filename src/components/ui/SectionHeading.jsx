const SectionHeading = ({
    title,
    subtitle,
}) => {
    return (
        <div className="mb-14">
            <p className="text-blue-400 mb-3">
                {subtitle}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeading;