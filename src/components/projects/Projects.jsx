import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Deep Learning Research",
    role: "MiniPlaces Dataset & More",
    img: "horse2zebra.gif",
    details: [
      "Worked on a comprehensive deep learning project utilizing the MiniPlaces dataset, and constructed Residual Networks (ResNets), Vision Transformers (ViT), and Generative Adversarial Networks (GANs) from scratch",
      "Mastered semantic and instance segmentation techniques, driving nuanced scene understanding and object differentiation",
      "Gained exposure to Neural Radiance Fields (NeRFs) for generating 3D scene representations",
    ],
    // link: "", // Update with relevant URL
  },
  {
    id: 2,
    title: "Python Scraper & SQL Analysis",
    role: "Government Contract Aggregator",
    img: "beautifulsoup.jpeg",
    details: [
      "Constructed a Python-based web scraping tool capable of handling intricate session cookies for secure domains",
      "Despite irregular HTML structures, the tool adeptly compiled and structured data into a coherent dataframe",
      "The extracted data was seamlessly exported to SQL for further analysis",
    ],
    // link: "", // Update with relevant URL
  },
  {
    id: 3,
    title: "Mobile & Web Applications",
    role: "Schedulator, Tinder, Amazon, BruinPal",
    img: "mobilewebapp.jpeg",
    details: [
      "Engineered full-stack clones of Amazon, Tinder, and Expedia using React, Node.js, Firebase, and SQL",
      "Conceived an educational visualizer for sorting algorithms leveraging React's dynamic rendering capabilities",
      "Built 'BruinPal,' a live marketplace fostering task exchange within university campuses, as well as organizing rideshares",
      "Created 'Schedulator,' an app that uses a custom optimization algorithm for efficient schedule management",
    ],
    // link: "https://example.com/mobile-web-applications", // Update with relevant URL
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.role}</p>
            <ul>
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            {/* <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              See More
            </a> */}
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
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
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
