
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="text-xl font-heading font-bold tracking-tight text-foreground mb-2">
                Diego Antunez<span className="text-accent">.</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Creating exceptional digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div>
                <h4 className="font-medium mb-2 text-sm">Quick Links</h4>
                <ul className="flex gap-4 text-sm">
                  <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                  <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
                  <li><a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <hr className="border-border my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {currentYear} Diego Antunez. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
