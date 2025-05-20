import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  roles: string;
  description: string;
  skills: string[];
  link?: string;
  image?: string; // Placeholder for future image support
}

const projects: Project[] = [
  {
    title: 'KoinsYa Financial Services Platform',
    roles: 'Frontend & Backend Development, Frontend Design',
    description:
      'Developed a robust platform providing contract workers access to cash advances and financial services. The platform is designed to ensure quick and reliable service delivery tailored for freelancers and contract workers.',
    skills: [
      'UX & UI Design',
      'Laravel',
      'MySQL',
      'JavaScript',
      'Decision Logic',
      'Bank Verification',
      'Payment Gateway Integration',
      'Social Media Marketing',
    ],
    link: 'https://koinsya.com',
  },
  {
    title: 'GigAid Cash Advance Platform for Ride-Share Drivers',
    roles: 'Frontend & Backend Development, Frontend Design, Project Manager, Marketing Manager',
    description:
      'GigAid addresses the financial instability faced by gig workers who often wait days or weeks for payouts. Our platform integrates seamlessly with ride-sharing platforms to provide instant access to earned income, empowering drivers to manage emergencies, vehicle maintenance, or daily expenses without disruption. Bank verification by Plaid, Payment Gateway Integration, UI & UX responsive design.',
    skills: [
      'UX & UI Design',
      'Laravel',
      'MySQL',
      'JavaScript',
      'Payment Gateway Integration',
      'Plaid',
      'Bank Verification',
      'Social Media Marketing',
    ],
    link: 'https://www.gigaid.us',
  },
  {
    title: 'DriverBoost Cash Advance',
    roles: 'Project Manager, Frontend & Backend Development, Design, Marketing',
    description:
      'DriverBoost addresses liquidity challenges for drivers by offering instant cash advances based on real-time earnings data. Real-Time Earnings Integration by Bank verification, Instant Approval & Disbursement, Flexible Repayment, User Dashboard, Compliance & Security.',
    skills: [
      'Laravel',
      'Bootstrap',
      'Flinks',
      'Bank Verification',
      'API Integration',
      'Web Design',
      'Marketing',
    ],
    link: 'https://www.driverboost.xyz',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing my experience in fintech, gig economy, and digital platforms.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-shadow relative"
            >
              {/* Placeholder for image */}
              {/* <div className="h-40 bg-muted-foreground/10 rounded-lg mb-4 flex items-center justify-center text-muted-foreground">Image</div> */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold flex-1">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <div className="text-sm text-muted-foreground mb-1">My role: <span className="font-medium text-foreground">{project.roles}</span></div>
              <p className="mb-2 text-foreground/90">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
