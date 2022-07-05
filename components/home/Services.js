import SectionHeader from '../atoms/SectionHeader';
import styles from '../../styles/home/Services.module.css';

const services = [
  {
    title: 'Service 1',
    description:
      'It was popularised in the 1960s with the release of Letraset sheets.',
  },
  {
    title: 'Service 1',
    description:
      'It was popularised in the 1960s with the release of Letraset sheets.',
  },
  {
    title: 'Service 1',
    description:
      'It was popularised in the 1960s with the release of Letraset sheets.',
  },
  {
    title: 'Service 1',
    description:
      'It was popularised in the 1960s with the release of Letraset sheets.',
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <SectionHeader
          headingText="Our services"
          paragraphText="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
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
