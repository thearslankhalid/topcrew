import Image from 'next/image';
import SectionHeader from '../atoms/SectionHeader';
import styles from '../../styles/home/Team.module.css';

const team = [
  {
    image: '/assets/team-1.png',
    name: 'Shah Hassan',
    role: 'Full Stack Developer',
    facebookProfileLink: 'https://facebook.com',
    linkedInProfileLink: 'https://linkedin.com',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/team-2.png',
    name: 'Shah Hassan',
    role: 'Full Stack Developer',
    facebookProfileLink: 'https://facebook.com',
    linkedInProfileLink: 'https://linkedin.com',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/team-3.png',
    name: 'Shah Hassan',
    role: 'Full Stack Developer',
    facebookProfileLink: 'https://facebook.com',
    linkedInProfileLink: 'https://linkedin.com',
    twitterProfileLink: 'https://twitter.com',
  },
  {
    image: '/assets/team-4.png',
    name: 'Shah Hassan',
    role: 'Full Stack Developer',
    facebookProfileLink: 'https://facebook.com',
    linkedInProfileLink: 'https://linkedin.com',
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
                  <Image src="/assets/twitter.png" alt="Twitter Profile Link" width={18} height={18} />
                </a>
                <a href={member.facebookProfileLink}>
                  <Image src="/assets/facebook.png" alt="Facebook Profile Link" width={18} height={18} />
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
