
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Laravel", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 }, 
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "BitBucket", level: 80 },
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Wireframing", level: 85 },
        { name: "Photoshop", level: 80 },
      ]
    },
    {
      title: "Marketing",
      skills: [
        { name: "SEO", level: 80 },
        { name: "Content Strategy", level: 85 },
        { name: "Analytics", level: 75 },
        { name: "Social Media", level: 80 },
        { name: "Email Marketing", level: 75 },
        { name: "Google Analytics", level: 70 },
        { name: "Google Ads", level: 70 },
        { name: "Facebook Ads", level: 80 },
        { name: "Instagram Ads", level: 80 },
        { name: "LinkedIn Ads", level: 80 },
        
      ]
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground">Expertise across development, design, and marketing</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border border-border">
              <div className="bg-accent h-1.5"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span className="text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
