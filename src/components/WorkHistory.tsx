import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
}

const workExperiences: WorkExperience[] = [
    {
        title: 'Project Manager, Lead Developer',
        company: 'KoinsYa',
        location: 'Miami, FL United States',
        period: 'February 2023 – May 2025',
        description: [
            'Launched a financial solution for gig workers, driving user adoption and revenue growth.',
        ],
        technologies: ['Laravel', 'MySQL', 'jQuery', 'Payment Gateways', 'Bank Verification', 'ClickSend', 'Figma', 'Git', 'BitBucket', 'AWS'],
    },
  {
    title: 'Project Manager, Lead Developer',
    company: 'GA Tech Group',
    location: 'Miami, FL United States',
    period: 'February 2023 – Present',
    description: [
      'Launched a financial solution for gig workers, driving user adoption and revenue growth.',
      'Developed customer-centric fintech platforms and automated financial tools.',
      'UI & UX design',
      'Optimized the marketing funnel, boosting lead conversion rates.',
      'Lead developers',
      'Built the backend using Laravel',
    ],
    technologies: ['Laravel', 'MySQL', 'jQuery', 'Payment Gateways', 'Bank Verification', 'ClickSend', 'Figma', 'Git', 'BitBucket', 'AWS'],
  },
  {
    title: 'Marketing Director, UI/UX Designer',
    company: 'DriverBoost LLC',
    location: 'Miami, FL United States',
    period: 'April 2022 – May 2024',
    description: [
      'Achieved a 400% conversion increase via digital strategies (paid search, social media, display ads).',
      'Leveraged HubSpot to enhance lead qualification and engagement.',
      'Directed Facebook ad campaigns, increasing customer acquisition and ROI.',
      'Designed pages including the landing page using Figma',
    ],
    technologies: ['Figma', 'HubSpot', 'Facebook Ads', 'Google Analytics', 'Google Tag Manager'],
  },
  {
    title: 'Full Stack Developer | PM',
    company: 'DriverBoost LLC',
    location: 'Miami, FL United States',
    period: 'December 2019 – April 2022',
    description: [
      'Led the development of fintech systems, integrating credit verification APIs and enhancing conversions.',
      'Built a strong online presence, amplifying brand visibility across platforms.',
      'Developed user-friendly, modern interface using React, Tailwind CSS',
      'Developed scalable API using Laravel',
    ],
    technologies: ['Laravel', 'jQuery', 'Bootstrap', 'MySQL', 'Payment Gateways', 'Bank Verification', 'ClickSend', 'Figma', 'Git', 'BitBucket', 'AWS'],
  },
  {
    title: 'SOCIAL MEDIA MANAGER',
    company: 'ANDE Corp',
    location: 'Remote, United States',
    period: 'August 2018 – December 2022',
    description: [
      'Managed digital marketing for a food truck brand, increasing brand awareness and customer engagement.',
      'Created targeted social media content, driving daily customer acquisition.',
    ],
    technologies: ['Social Media Marketing'],
  },
  {
    title: 'Account Executive',
    company: 'Hispanic Group',
    location: 'Miami, FL United States',
    period: 'January 2017 – March 2018',
    description: [
      'Drove sales of audiovisual content rights by leveraging strategic networking and compelling client pitches to TV channels and online streamers.',
      "Oversaw HGLatam's digital assets, including traffic management, website, Vimeo, and YouTube channel maintenance, as well as trade show logistics, ensuring seamless operations and impactful presentations.",
    ],
    technologies: ['Sales', 'Digital Asset Management'],
  },
  {
    title: 'MARKETING COORDINATOR',
    company: 'CESGO Group',
    location: 'Aguadilla, Puerto Rico',
    period: 'October 2015 – December 2016',
    description: [
      'Led marketing for six restaurants, boosting brand recognition and sales through seasonal campaigns.',
      'Managed and optimized paid social media campaigns, achieving outstanding ROAS while maintaining strict budget control.',
    ],
    technologies: ['Marketing', 'Social Media', 'Campaign Management'],
  },
];

const WorkHistory = () => {
  return (
    <section id="work" className="py-20 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional experience and the impact I've made along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />

              <div className="bg-card rounded-lg p-6 shadow-lg backdrop-blur-sm border border-border/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                      {experience.location && <><MapPin className="w-4 h-4 ml-2" /><span>{experience.location}</span></>}
                    </div>
                  </div>
                </div>

                <p className="font-medium text-accent mb-3">{experience.company}</p>

                <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory; 