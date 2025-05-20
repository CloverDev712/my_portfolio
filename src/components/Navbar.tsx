import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work History', href: '#work-history' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-heading font-bold tracking-tight text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Diego Antunez<span className="text-accent">.</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-accent transition-colors font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
          <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <motion.button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4"
          >
            <div className="container flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-accent py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
