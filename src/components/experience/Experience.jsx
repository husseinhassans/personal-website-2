import { useRef } from "react";
import "./experience.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sundial",
    role: "Lead Model Engineer (Machine Learning, Data Science, SWE)",
    img: "/trysundial white.png",
    link: "https://www.linkedin.com/company/trysundial/", // Update with relevant URL
    details: [
      "Engineered a backend model using Retrieval Augmented Generation (RAG) for dynamic access to solar regulatory data",
      "Integrated complex regulatory datasets into the model leveraging Pinecone and Llama Index to build a robust vector database architecture",
      "Utilized advanced Pandas data manipulation techniques and regular expressions for efficient data parsing and integration",
      "Streamlined AI-powered query handling processes, markedly improving technical support efficiency for solar installation services",
      "Enhanced natural language processing capabilities of the platform by incorporating OpenAI and Langchain libraries",
    ],
  },
  {
    id: 2,
    title: "AvidBeam Technologies",
    role: "Machine Learning Engineer",
    img: "/Avidbeam Logo 2.jpeg",
    link: "https://www.avidbeam.com/avidauto/", // Update with relevant URL
    details: [
      "Architected a deep learning model leveraging Keras-based Convolutional Neural Networks (CNNs) like ResNet and MobileNet for traffic light detection and classification, achieving benchmark 95% accuracy",
      "Employed OpenCV for sophisticated video analytics, enhancing real-time object detection through Faster R-CNN",
      "Iteratively refined and trained the model to meet rigorous real-world conditions, employing a diverse dataset for comprehensive scenario coverage",
      "Collaborated with cross-functional teams to integrate the machine learning model into AvidBeam's broader video analytics platform, ensuring seamless deployment and scalability in real-time traffic monitoring applications",
    ],
  },
  {
    id: 3,
    title: "NI Capital",
    role: "Data Science Intern",
    img: "/NI Capital 2.png",
    link: "https://nicapital.com.eg/", // Update with relevant URL
    details: [
      "Engineered advanced predictive modeling pipelines using Long Short-Term Memory (LSTM) and ARIMA algorithms to capture intricate patterns for forecasting interest rates in the Egyptian market",
      "Employed Python's Pandas and NumPy for extensive data wrangling, cleaning, and transformation, enhancing the dataset's quality sourced from the Central Bank",
      "Enhanced model robustness by integrating bond offerings data, ensuring predictions accounted for potential market changes and fluctuations",
    ],
  },
  {
    id: 4,
    title: "RSM International",
    role: "Transaction Advisory Services & Finance Intern",
    img: "/RSM.webp",
    link: "https://www.rsm.global/egypt/", // Update with relevant URL
    details: [
      "Conducted data analyses for Kemin Industries' strategic acquisitions, translating complex financial data into clear, strategic insights for decision-making",
      "Utilized advanced valuation methods to assess and present MEVAC's data-driven business metrics, facilitating informed evaluations and negotiations",
    ],
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
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              See More
            </a>
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
