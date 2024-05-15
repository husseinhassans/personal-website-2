import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-350%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* idea here, I want to make a 3d rotating polygon or cube that displays software engineer, machine learning engineer, Chef, musician. Make it rotate as the user scrolls down the page */}
          {/* make the color of the text gold with a shine or glimmer that moves while you scroll parallax vibes */}
          <motion.h2 variants={textVariants}>&lt;HUSSEIN HASSAN/&gt;</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Dev & ML Engineer
          </motion.h1>
          {/* <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Projects</motion.button>
            <motion.button variants={textVariants}>Contact</motion.button>
          </motion.div> */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer AI Enthusiast Financial Analyst Pianist Chef
      </motion.div>

      {/* idea, use this link and create a new picture with you having some outlines for the profile to look cooler:
      https://creativecloud.adobe.com/discover/article/how-to-make-a-repeated-outline-image-in-adobe-photoshop */}
      <div className="imageContainer">
        <img src="/NoBackground.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
