import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'San Ignacio University Miami',
    degree: 'Master of Arts (MA)',
    period: '2017–2019',
  },
  {
    school: 'Interamerican University of Puerto Rico',
    degree: 'Master of Business Administration (MBA)',
    period: '2013–2016',
  },
  {
    school: 'Interamerican University of Puerto Rico',
    degree: 'Bachelor of Business Administration (BBA)',
    period: '2008–2013',
  },
];

const Education = () => (
  <section id="education" className="py-12 bg-background/50">
    <div className="container max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Education</h2>
      </motion.div>
      <div className="flex flex-col gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex items-center gap-4 bg-card rounded-lg px-5 py-4 shadow border border-border/50"
          >
            <GraduationCap className="w-6 h-6 text-accent" />
            <div>
              <div className="font-semibold text-lg text-foreground">{edu.school}</div>
              <div className="text-muted-foreground text-sm">{edu.degree}</div>
            </div>
            <div className="ml-auto text-muted-foreground text-sm">{edu.period}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 