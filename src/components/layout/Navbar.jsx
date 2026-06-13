import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Events, scrollSpy } from "react-scroll";
import Container from "./Container";

const navLinks = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Skills",
    to: "skills",
  },
  {
    name: "Expertise",
    to: "expertise",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/10
      backdrop-blur-xl
      bg-[#0B0F19]/70
      "
    >
      <Container>
        <nav
          className="
          h-20
          flex
          items-center
          justify-between
          "
        >
          {/* LOGO */}

          <div
            className="
            text-2xl
            font-bold
            tracking-wide
            "
          >
            <span className="text-white">Yash Rana</span>

            <span className="text-blue-500">.</span>
          </div>

          {/* DESKTOP NAV */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >
            {navLinks.map((link) => (
              <Link
                spy={true}
                activeClass="text-white"
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="
                cursor-pointer
                text-sm
                text-gray-300
                hover:text-white
                transition-all
                duration-300
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RESUME BUTTON */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
            hidden
            md:flex
            items-center
            justify-center
            px-5
            py-2.5
            rounded-xl
            bg-blue-500
            hover:bg-blue-600
            transition-all
            duration-300
            font-medium
            "
          >
            Resume
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            md:hidden
            text-white
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>

      {/* MOBILE MENU */}

      {isOpen && (
        <div
          className="
          md:hidden
          border-t
          border-white/10
          bg-[#0B0F19]
          "
        >
          <div
            className="
            flex
            flex-col
            p-6
            gap-6
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="
                text-gray-300
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
                "
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              mt-2
              px-5
              py-3
              rounded-xl
              bg-blue-500
              hover:bg-blue-600
              transition-all
              duration-300
              text-center
              font-medium
              "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
