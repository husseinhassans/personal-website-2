import { useRef } from "react";
import "./experience.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sundial",
    img: "/trysundial white.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad ipsa accusamus similique quod totam voluptatem quaerat quae illo facilis. At doloribus eum fuga incidunt, ipsam provident corporis minima accusantium!",
  },
  {
    id: 2,
    title: "AvidBeam Technologies",
    img: "/Avidbeam Logo 2.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad ipsa accusamus similique quod totam voluptatem quaerat quae illo facilis. At doloribus eum fuga incidunt, ipsam provident corporis minima accusantium!",
  },
  {
    id: 3,
    title: "NI Capital",
    img: "/NI Capital 2.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad ipsa accusamus similique quod totam voluptatem quaerat quae illo facilis. At doloribus eum fuga incidunt, ipsam provident corporis minima accusantium!",
  },
  {
    id: 4,
    title: "RSM International",
    img: "/RSM.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad ipsa accusamus similique quod totam voluptatem quaerat quae illo facilis. At doloribus eum fuga incidunt, ipsam provident corporis minima accusantium!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="experience" ref={ref}>
      <div className="progress">
        <h1>Work Experience</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experience;
