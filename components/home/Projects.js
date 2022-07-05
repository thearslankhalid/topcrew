import Image from 'next/image';
import styles from '../../styles/home/Projects.module.css';
import SectionHeader from '../atoms/SectionHeader';

const projects = [
  {
    image: '/assets/hero.svg',
    altImageText: 'Project 1 image',
    title: 'Odoo HR ',
    description:
      'Deployed an HR Odoo Module for SPQR Agency which manages the data of their employees and helps them with the onboarding new recruits  ',
  },
  {
    image: '/assets/hero.svg',
    altImageText: 'Project 1 image',
    title: 'Dinisium',
    description:
      'Dinisium is an asset backed tokens exchange where we can buy/sell tokens backed by real assets .',
  },
  {
    image: '/assets/hero.svg',
    altImageText: 'Project 1 image',
    title: 'Reflective collective',
    description:
      'Reflective collective is a NFT related project where we can purchase NFTs related to characters of a story .',
  },
  {
    image: '/assets/hero.svg',
    altImageText: 'Project 1 image',
    title: 'Project 1',
    description:
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader
          headingText="Projects we've done"
          paragraphText="We've done it carefully and simply. We have crafted experiences
          in a way that is loved by our clients and even more by their users."
        />
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div
              key={`project-card-${index}`}
              className={styles.projectContainer}
            >
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.imageAltText}
                  layout="fill"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
