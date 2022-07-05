import SectionHeader from '../atoms/SectionHeader';
import styles from '../../styles/home/Services.module.css';

const services = [
  {
    title: 'Web Applications',
    description:
      'Software and web applications are our passion. Whatever your project, we can help.',
  },
  {
    title: 'Mobile Applications',
    description:
      'Perfectly crafted and intuitive mobile applications across IOS and Android.',
  },
  {
    title: 'Open-source Applications',
    description:
      'Working with and contributing to open-source applications has always been our passion.',
  },
  {
    title: 'Blockchain',
    description:
      'We love to work with the tech of future so we provide services in blockchain as well. ',
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <SectionHeader
          headingText="Our services"
          paragraphText="TopCrew provides our services in web, mobile, and desktop applications. We
          set our goals in accordance with the timeline set by the client, and provide
          high-quality work efficiently and effectively."
        />
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div
              key={`service-card-${index}`}
              className={styles.serviceContainer}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
