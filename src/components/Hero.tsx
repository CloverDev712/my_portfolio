import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-accent font-medium mb-4"
              >
                Hello, I'm a
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60"
              >
                Developer, Designer & Marketing Strategist
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mt-6 max-w-lg mx-auto md:mx-0"
              >
                I create engaging digital experiences and help businesses grow through strategic marketing and development.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <Button size="lg" className="gap-2 group" onClick={() => window.location.href = '#projects'}>
                View My Work 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10" onClick={() => window.location.href = '#contact'}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-accent/20 to-accent/5 p-8 flex items-center justify-center backdrop-blur-sm">
              <motion.div 
                animate={{ 
                  rotate: [-10, 10, -10],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="w-full h-full rounded-full bg-gradient-to-tr from-accent/30 to-accent/10 overflow-hidden flex items-center justify-center"
              >
                <img
                  src="/images/hero.jpg"
                  alt="Profile"
                  className="w-5/6 h-5/6 object-cover rounded-full border-4 border-accent/40 shadow-2xl bg-background/40"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -z-10 top-1/3 -left-4 w-24 h-24 rounded-full bg-accent/10"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -z-10 bottom-1/4 -right-6 w-32 h-32 rounded-full bg-accent/10"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
