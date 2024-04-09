import { useRef, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const text = type === "experience" ? "<Experience />" : "<Projects/>";

  //   const el = useRef(null);
  //   useEffect(() => {
  //     const typed = new Typed(el.current, {
  //       strings: [text],
  //       startDelay: 300,
  //       typeSpeed: 30,
  //       showCursor: true,
  //       cursorChar: "|",
  //       cursorBlinkSpeed: 1000,
  //       loop: false,
  //     });

  //     // Cleanup
  //     return () => {
  //       typed.destroy();
  //     };
  //   }, []);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "experience"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>{text}</motion.h1>
      <motion.h1 style={{ y: yText }}></motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
