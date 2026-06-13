import Container from "./Container";

const Footer = () => {
    return (
        <footer
            className="
      border-t
      border-white/10
      py-8
      "
        >
            <Container>
                <div
                    className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          "
                >
                    {/* LEFT */}

                    <p className="text-gray-400">
                        © 2026 Yash Rana. All rights
                        reserved.
                    </p>

                    {/* RIGHT */}

                    <p className="text-gray-500 text-sm">
                        Built with React, Tailwind &
                        Framer Motion.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;