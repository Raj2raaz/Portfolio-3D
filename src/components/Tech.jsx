import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { styles } from "../styles";

// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p> */}
      <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Skills Overview</p>
  <h2 className={styles.sectionHeadText}>Technical Proficiency.</h2>
</motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I have expertise in HTML5, CSS, JavaScript, and frameworks like React, Next.js, and Node.js. I’m skilled in database management with MongoDB and SQL, and proficient in using Git for version control. My experience spans across building responsive applications and deploying them efficiently with cloud services like Firebase.
</motion.p>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
