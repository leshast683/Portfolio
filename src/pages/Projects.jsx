import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "Radio App Redesign",
      description: "A modern redesign of a radio app focused on better user experience and simple, clear navigation. The project included user research, wireframes, and high-quality design mockups. I also made sure the layout worked well on mobile screens.",
      tech: "Figma, User Research, Prototyping",
      link: "#"
    },
    {
      title: "Priority Manager App",
      description: "A task management app that helps users stay organized and keep track of their daily tasks with an easy-to-use design and helpful scheduling tools. It makes it easier to stay on top of to-do lists, set reminders, and see progress all in one place.",
      tech: "Figma, User Research, Prototyping",
      link: "#"
    },
    {
      title: "Reimagining the uscis.gov webpage",
      description: "Creation of more accessible and modern version of uscis.gov webpage. As an active user of uscis.gov webpage I've noticed that there were some problems with accessibility and outdated design. Here is my version of fixing these problems.",
      tech: "Adobe XD, User Research, Accessibility Testing",
      link: "#"
    }
  ];

  return (
    <motion.div
      className={styles.projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <img 
              src={`/img/${project.title === "Radio App Redesign" ? "radio" : project.title === "Priority Manager App" ? "manager" : "uscis"}.jpg`} 
              alt={project.title}
              className={styles.previewImage}
            />
            <p>{project.description}</p>
            <p className={styles.tech}>{project.tech}</p>
            {(project.title === "Radio App Redesign" || project.title === "Priority Manager App" || project.title === "Reimagining the uscis.gov webpage") ? (
              <button onClick={() => {
                const modal = document.createElement('div');
                modal.className = styles.modal;
                modal.innerHTML = `
                  <div class="${styles.modalContent}">
                    <div class="${styles.framesContainer}">
                      ${project.title === "Reimagining the uscis.gov webpage" ? `
                        <div class="${styles.computerFrame}">
                          <div class="${styles.screen}">
                            <img src="/img/web1.jpg" alt="First Design" />
                          </div>
                        </div>
                        <div class="${styles.computerFrame}">
                          <div class="${styles.screen}">
                            <img src="/img/web2.jpg" alt="Second Design" />
                          </div>
                        </div>
                      ` : `
                        <div class="${styles.iphoneFrame}">
                          <div class="${styles.screen}">
                            <img 
                              src="/img/${project.title === "Radio App Redesign" ? "first" : "priority1"}.jpg" 
                              alt="First Design"
                              style="width: 100%; height: 100%; object-fit: cover;"
                            />
                          </div>
                        </div>
                        <div class="${styles.iphoneFrame}">
                          <div class="${styles.screen}">
                            <img 
                              src="/img/${project.title === "Radio App Redesign" ? "second" : "priority2"}.jpg" 
                              alt="Second Design"
                              style="width: 100%; height: 100%; object-fit: cover;"
                            />
                          </div>
                        </div>
                        <div class="${styles.iphoneFrame}">
                          <div class="${styles.screen}">
                            <img 
                              src="/img/${project.title === "Radio App Redesign" ? "third" : "priority3"}.jpg" 
                              alt="Third Design"
                              style="width: 100%; height: 100%; object-fit: cover;"
                            />
                          </div>
                        </div>
                        <div class="${styles.iphoneFrame}">
                          <div class="${styles.screen}">
                            <img 
                              src="/img/${project.title === "Radio App Redesign" ? "forth" : "priority4"}.jpg" 
                              alt="Fourth Design"
                              style="width: 100%; height: 100%; object-fit: cover;"
                            />
                          </div>
                        </div>
                      `}
                    </div>
                    <button class="${styles.closeButton}">Close</button>
                  </div>
                `;
                document.body.appendChild(modal);
                modal.querySelector(`.${styles.closeButton}`).onclick = () => {
                  document.body.removeChild(modal);
                };
              }} className={styles.viewButton}>
                View Project
              </button>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}