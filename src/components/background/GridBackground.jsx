const GridBackground = () => {
    return (
        <div
            className="
      fixed
      inset-0
      -z-20
      opacity-[0.03]
      "
        >
            <div
                className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
            />
        </div>
    );
};

export default GridBackground;