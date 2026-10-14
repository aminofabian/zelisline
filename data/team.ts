export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  description: string;
  skills: string[];
  location: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Fabian Amino",
    role: "Lead Software Developer",
    expertise: "Full Stack Development",
    description: "Experienced software developer specializing in web applications with Next.js, React, Flutter, and more.",
    github: "https://github.com/aminofabian",
    skills: ["Next.js", "React", "Flutter", "MySQL", "TypeORM", "Prisma"],
    location: "Nairobi, Kenya",
  },
  {
    name: "Tobias Baraka",
    role: "Full Stack Engineer",
    expertise: "JavaScript & Security",
    description: "Security-focused full stack developer with expertise in Node.js and PostgreSQL.",
    github: "https://github.com/tobias-barakaa",
    skills: ["Node.js", "PostgreSQL", "Redis", "OAuth", "Data Encryption"],
    location: "Kenya",
  },
  {
    name: "Eugene Keya",
    role: "Software Developer",
    expertise: "Web Development",
    description: "Passionate developer focused on creating innovative web solutions.",
    skills: ["JavaScript", "React", "Node.js"],
    location: "Kenya",
  },
  {
    name: "Dolphine Peace",
    role: "UI/UX Developer",
    expertise: "Frontend Development",
    description: "Creative developer specializing in building beautiful user interfaces.",
    skills: ["React", "CSS", "UI/UX Design"],
    location: "Kenya",
  },
];
