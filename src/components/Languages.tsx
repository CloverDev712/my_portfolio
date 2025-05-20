import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Native or Bilingual', icon: <Globe className="w-5 h-5 text-accent" /> },
  { name: 'Spanish', level: 'Conversational', icon: <MessageCircle className="w-5 h-5 text-accent" /> },
];

const Languages = () => (
  <section id="languages" className="py-12">
    <div className="container max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Languages</h2>
      </motion.div>
      <div className="flex flex-col gap-4 items-center">
        {languages.map((lang) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-card rounded-lg px-5 py-3 shadow border border-border/50 w-full max-w-md"
          >
            {lang.icon}
            <span className="font-medium text-lg text-foreground">{lang.name}</span>
            <span className="ml-auto text-muted-foreground text-sm">{lang.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages; 