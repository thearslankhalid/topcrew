import Image from 'next/image';
import SectionHeader from '../atoms/SectionHeader';
import styles from '../../styles/home/Team.module.css';

const team = [
  {
    image: '/assets/arslan.jpg',
    name: 'Arslan Khalid',
    role: 'Lead Front-end engineer',
    facebookProfileLink: 'https://www.linkedin.com/in/thearslankhalid/',
    linkedInProfileLink: 'https://www.linkedin.com/in/thearslankhalid/',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/shah.jpg',
    name: 'Shah Hassan',
    role: 'Full-Stack developer and project manager',
    facebookProfileLink: 'https://facebook.com',
    linkedInProfileLink: 'https://www.linkedin.com/in/shahhassancs/',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/ahmed.jpg',
    name: 'Abdullah Ahmed',
    role: 'Full Stack Developer',
    facebookProfileLink: 'https://www.linkedin.com/in/abdullah-ahmad-92216b16a/',
    linkedInProfileLink: 'https://www.linkedin.com/in/abdullah-ahmad-92216b16a/',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/salman.jpg',
    name: 'Salman Saleem',
    role: 'Designer',
    facebookProfileLink: 'https://www.linkedin.com/in/salman-saleem-8a99291b9/',
    linkedInProfileLink: 'https://www.linkedin.com/in/salman-saleem-8a99291b9/',
    twitterProfileLink: 'https://twitter.com',
  }
];

function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <SectionHeader
          headingText="Our Awesome Team"
          paragraphText="We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process."
        />

        <div className={styles.teamContainer}>
          {team.map((member, index) => (
            <div key={`member-card-${index}`} className={styles.teamMemberCard}>
              <Image
                src={member.image}
                alt={`${member.name} avatar`}
                width={72}
                height={72}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <hr />
              <div className={styles.iconContainer}>
                <a href={member.twitterProfileLink}>
                  <Image src="/assets/linkedin.png" alt="Twitter Profile Link" width={18} height={18} />
                </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
