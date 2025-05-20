import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground">Let's collaborate on your next project</p>
        </div>
        <div className="max-w-xl mx-auto flex flex-col items-center gap-10">
          <div className="w-full bg-card rounded-xl shadow-lg border border-border/50 p-8 flex flex-col gap-6 items-center">
            <h3 className="text-2xl font-bold mb-2 text-center">Contact Information</h3>
            <p className="text-muted-foreground mb-4 text-center">
              Feel free to reach out if you're looking to collaborate, have questions, or just want to connect.
            </p>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-lg text-foreground">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-lg text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg text-foreground">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h4 className="font-medium mb-3 text-center">Connect With Me</h4>
            <div className="flex gap-4 justify-center">
              <a href="#" className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-accent font-bold">In</span>
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-accent font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">GitHub</span>
                <span className="text-accent font-bold">GH</span>
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Dribbble</span>
                <span className="text-accent font-bold">Db</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
