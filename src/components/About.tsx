import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Bilingual digital professional (English/Spanish) with 8+ years of experience in web development, UI/UX design, and digital marketing. Passionate about building fintech platforms, leading teams, and driving business growth through technology and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                Based in Miami, FL, I bring a unique blend of technical and business expertise, holding an MA and MBA, and a proven track record in fintech, project management, and digital marketing. I specialize in launching financial solutions, scaling digital campaigns, and designing seamless user experiences for clients across the US and Latin America.
              </p>
              <p className="text-muted-foreground">
                I thrive on solving complex problems, optimizing user journeys, and delivering measurable results—whether building platforms for gig workers, leading cross-functional teams, or crafting creative strategies that drive growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">My Journey</h3>
              <p className="text-muted-foreground">
                My career spans project management, full-stack development, and marketing leadership for startups and established brands. I believe in the power of combining technical excellence with strategic vision, and I'm passionate about creating digital products that make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-accent">8+</span>
                <span className="text-sm text-muted-foreground">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-accent">10+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
            </div>
          </div>
          
          <div className="relative p-4">
            <div className="aspect-video bg-accent/10 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/about.jpg"
                  alt="About"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-accent rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
