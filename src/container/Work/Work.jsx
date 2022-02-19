import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Work.scss";

const Work = () => {
  const works = [
    {
      title: "Modern UI/UX website",
      description: "This is just any website",
      projectLink:"",
      codeLink:"",
      imgUrl: images.about01,
      tag:"UI/UX",
    },
    {
      title: "Modern UI/UX website",
      description: "This is just any website",
      projectLink:"",
      codeLink:"",
      imgUrl: images.about02,
      tag:"Web App",
    },
    {
      title: "Modern UI/UX website",
      description: "This is just any website",
      projectLink:"",
      codeLink:"",
      imgUrl: images.about03,
      tag:"ReactJs",
    },
  ];

  return (
    <>
      <h2 className="head-text" style={{ paddingTop: "2rem" }}>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div id="work" className="app__work-filter">
        {[
          "UI/UX",
          "Web Applications",
          "React JS",
        ].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div transition={{ duration: 0.5, delayChildren: 0.5}} className="app__work-portfolio">
      {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
