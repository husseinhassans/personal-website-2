import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zvsg3ov", "template_8rx5swf", formRef.current, {
        publicKey: "sF-ryu80ppYjcyMt8",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Reach Out</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>Husseinhmhassan@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>3333 S La Cienega Blvd, Los Angeles, CA, 90016</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Mobile</h2>
          <span>+1 (424) 425-9229</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {/* got svg from https://www.svgrepo.com/ */}
          <svg
            // fill="orange"
            width="450px"
            height="450px"
            viewBox="0 0 64 64"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M11.8418,20.4248l29.042-0.0034c0.5522,0,1-0.4478,1-1s-0.4478-1-1-1l-29.042,0.0034c-0.5522,0-1,0.4478-1,1     S11.2896,20.4248,11.8418,20.4248z"
            />

            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M33.7593,25.8887H11.8418c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h21.9175c0.5522,0,1-0.4478,1-1     S34.3115,25.8887,33.7593,25.8887z"
            />

            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M33.7593,33.1934H11.8418c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h21.9175c0.5522,0,1-0.4478,1-1     S34.3115,33.1934,33.7593,33.1934z"
            />

            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M33.7763,40.5015H11.8418c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h21.9345c0.5522,0,1-0.4478,1-1     S34.3286,40.5015,33.7763,40.5015z"
            />

            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M33.396,48.6914h-0.0005l-8.3828,0.0034c-0.5522,0-0.9995,0.4482-0.9995,1.0005s0.4478,0.9995,1,0.9995h0.0005     l8.3828-0.0034c0.5522,0,0.9995-0.4482,0.9995-1.0005S33.9482,48.6914,33.396,48.6914z"
            />

            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M61.3525,12.0815l-2.2285-1.209c-0.7393-0.4023-1.5928-0.4932-2.4019-0.2515c-0.8101,0.2393-1.4771,0.7778-1.8809,1.519     l-4.3599,8.0269V5.8838c0-2.2632-1.8413-4.1045-4.1045-4.1045H9.5327c-0.2462,0-0.5461,0.1156-0.7222,0.291L1.2985,9.5375     C1.1246,9.7224,1,9.9928,1,10.25v47.8662c0,2.2632,1.8413,4.1045,4.1045,4.1045H46.377c2.2632,0,4.1045-1.8413,4.1045-4.1045     v-19.41l12.1372-22.3444C63.4482,14.834,62.8809,12.9141,61.3525,12.0815z M8.5156,5.1962v1.9493     c0,1.1606-0.9438,2.1045-2.1045,2.1045H4.4283L8.5156,5.1962z M48.4814,58.1162c0,1.1606-0.9438,2.1045-2.1045,2.1045H5.1045     C3.9438,60.2207,3,59.2769,3,58.1162V11.25h3.4111c2.2632,0,4.1045-1.8413,4.1045-4.1045V3.7793H46.377     c1.1606,0,2.1045,0.9438,2.1045,2.1045v17.9654L38.6118,42.02c-0.0438,0.0808-0.1229,0.3453-0.1211,0.4893l0.0864,7.3013     c0.0044,0.3682,0.2109,0.7046,0.5371,0.875c0.1455,0.0757,0.3047,0.1133,0.4629,0.1133c0.1968,0,0.3931-0.0581,0.562-0.1729     l5.9287-4.0278c0.0111-0.0076,0.0159-0.0214,0.0267-0.0294c0.1144-0.0842,0.2173-0.1868,0.2897-0.3197     c0,0,0.0001-0.0005,0.0002-0.0007c0.0001-0.0001,0.0002-0.0002,0.0002-0.0002l2.0967-3.86V58.1162z M40.5108,44.1913     l3.0764,1.6741l-3.032,2.0599L40.5108,44.1913z M60.8613,15.4067L45.1049,44.4142l-4.2584-2.3174L55.9409,14.313l0.6582-1.2197     c0.3062-0.5615,1.0093-0.769,1.5693-0.4639l2.2285,1.209C60.957,14.1436,61.165,14.8477,60.8613,15.4067z"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
