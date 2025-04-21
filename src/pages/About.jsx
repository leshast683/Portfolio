
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.content}>
            <div className={styles.contentLayout}>
              <div className={styles.imageWrapper}>
                <div className={styles.backgroundShape}></div>
                <img src="/img/trip.jpg" alt="Profile" className={styles.profileImage} />
              </div>
              <div className={styles.textContent}>
                <h1>About Me</h1>
                <div className={styles.bio}>
                  <p>Hi! I'm Alex — a Digital Media major student at UCF who's really into web design and creating digital content. I love mixing creativity with tech, whether that means building cool websites or coming up with fun and engaging online campaigns.</p>
                  <p>I'm always trying to learn something new, and I make it a goal to pick up a fresh skill or technique every week. For me, digital media isn't just about making things look nice — it's about creating experiences that actually connect with people.</p>
                  <p>Right now, I'm focused on growing as a UX/UI developer. I'm super interested in how design and user experience work together, and I'm doing my best to master the tools and skills that make digital products not just pretty, but easy and enjoyable to use.</p>
                  <p>If you're looking for someone who's creative, curious, and always up for a challenge, let's connect! I'd love to help bring great ideas to life.</p>
                </div>
                <div className={styles.skillsContainer}>
                  <h2>Skills</h2>
                  <div className={styles.skills}>
                    <div className={styles.skillItem}>Figma</div>
                    <div className={styles.skillItem}>InVision</div>
                    <div className={styles.skillItem}>Sketch</div>
                    <div className={styles.skillItem}>React.js</div>
                    <div className={styles.skillItem}>JavaScript</div>
                    <div className={styles.skillItem}>Node.js</div>
                    <div className={styles.skillItem}>PHP</div>
                    <div className={styles.skillItem}>HTML/CSS</div>
                  </div>
                </div>
                <div className={styles.interestsContainer}>
                  <h2>Interests</h2>
                  <p>Outside of digital media, I have a big passion for traveling. I love discovering new places, learning about different cultures, and finding hidden gems wherever I go. Every trip gives me a fresh perspective and fuels my creativity. Whether I'm walking through historic streets, trying new foods, or just soaking in the scenery, travel always inspires new ideas for my projects.</p>
                  <p>I also enjoy capturing these experiences through YouTube videos, combining storytelling with visuals to share my adventures with others. It's my way of connecting with people and showing the beauty of the world through my lens.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
