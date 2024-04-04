import { useEffect, useRef } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Sidebar from "../sidebar/Sidebar";

export const Navbar = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["&lt;Portfolio /&gt;"],
      startDelay: 300,
      typeSpeed: 30,
      showCursor: true,
      cursorChar: "|",
      cursorBlinkSpeed: 1000,
      loop: false,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar />
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt;Hussein Hassan /&gt;{" "}
        </motion.span> */}
        <div>
          <span ref={el}></span>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/husseinhhassan/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/husseinhassans/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/husseinhassans">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
