import { FaJava, FaPython, FaReact, FaNodeJs, FaGithub, FaDatabase, FaTools, FaCode, FaHtml5, FaCss3Alt, FaRocket, FaHandshake, FaMicrophone, FaShieldAlt, FaBrain, FaRobot, FaLock, FaCogs, FaLaptopCode, FaTree, FaDesktop } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

/* ============================================================
   PORTFOLIO CONFIGURATION
   ============================================================ */

export const siteConfig = {
  name: 'Lakshmi Pramode',
  logo: '<Lakshmi />',
  title: 'Computer Science Engineering Student | MERN Stack Developer | Product Engineering Enthusiast',
  resumePath: '/assets/resume/resume.pdf?v=20260627',
  profileImage: '/assets/profile/avatar.jpg',
}

export const heroData = {
  badge: 'Ready for Internships & Software Engineering Roles',
  name: 'Lakshmi Pramode',
  taglines: [
    'Computer Science Engineering Student',
    'MERN Stack Developer',
    'Product Engineering Enthusiast'
  ],
  description: 'Building impactful software solutions with Full Stack Development. A technically strong student with a focus on real-world impact.',
}

export const aboutData = {
  heading: 'Building Impactful Solutions',
  paragraphs: [
    "I am a Computer Science Engineering student from St. Joseph's College of Engineering and Technology, Palai. My academic journey has been marked by a strong pursuit of excellence, reflected in my CGPA of 9.34 and a Minor Degree in Robotics and Automation.",
    "I am deeply passionate about Full Stack Development, AI-driven Systems, and Product Engineering. Whether I'm crafting robust backend systems or designing intuitive frontends, my goal is to create scalable software that solves meaningful problems.",
  ],
  interests: [
    { icon: '🌐', title: 'Full Stack Dev', desc: 'MERN stack applications' },
    { icon: '🤖', title: 'AI-driven Systems', desc: 'Intelligent applications' },
    { icon: '⚙️', title: 'Product Eng', desc: 'End-to-end product development' },
    { icon: '🦾', title: 'Robotics', desc: 'Automation & hardware integration' },
  ],
  codeFile: 'Lakshmi.js',
  codeLines: [
    { keyword: 'const', fn: 'lakshmi', bracket: '= {' },
    { prop: 'name', value: '"Lakshmi Pramode"' },
    { prop: 'role', value: '"Full Stack Developer"' },
    { prop: 'education', value: '"B.Tech CSE @ SJCET"' },
    { prop: 'cgpa', value: '9.32', isKeyword: true },
    { prop: 'minor', value: '"Robotics and Automation"' },
    { bracket: '};' },
  ],
}

export const skillsData = [
  { name: 'Java', icon: <FaJava />, category: 'Languages', level: 'Advanced' },
  { name: 'Python', icon: <FaPython />, category: 'Languages', level: 'Advanced' },
  { name: 'C', icon: <FaCode />, category: 'Languages', level: 'Intermediate' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages', level: 'Advanced' },

  { name: 'HTML', icon: <FaHtml5 />, category: 'Frontend', level: 'Advanced' },
  { name: 'CSS', icon: <FaCss3Alt />, category: 'Frontend', level: 'Advanced' },
  { name: 'React.js', icon: <FaReact />, category: 'Frontend', level: 'Advanced' },

  { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', level: 'Advanced' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend', level: 'Advanced' },

  { name: 'MongoDB', icon: <SiMongodb />, category: 'Databases', level: 'Advanced' },
  { name: 'SQL', icon: <SiMysql />, category: 'Databases', level: 'Advanced' },

  { name: 'Git', icon: <FaCode />, category: 'Tools', level: 'Advanced' },
  { name: 'GitHub', icon: <FaGithub />, category: 'Tools', level: 'Advanced' },
  { name: 'VS Code', icon: <VscVscode />, category: 'Tools', level: 'Advanced' },
  { name: 'Postman', icon: <SiPostman />, category: 'Tools', level: 'Intermediate' },

  { name: 'OOP', icon: <FaDatabase />, category: 'Concepts', level: 'Advanced' },
  { name: 'REST APIs', icon: <FaTools />, category: 'Concepts', level: 'Advanced' },
  { name: 'DBMS', icon: <FaDatabase />, category: 'Concepts', level: 'Advanced' },
  { name: 'DSA', icon: <FaCode />, category: 'Concepts', level: 'Advanced' },
  { name: 'UML Modeling', icon: <FaTools />, category: 'Concepts', level: 'Intermediate' },
]

export const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools', 'Concepts']

export const projectsData = [
  {
    title: 'Micro-Alert',
    tag: 'Disaster Management',
    desc: 'Micro-Alert is an AI-powered disaster management system that provides real-time location-based alerts, geo-tagged incident reporting, and verified emergency information.',
    tech: ['React', 'Node.js', 'AI Verification', 'Geolocation', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Lakshmi-Pramode/MicroAlertApp',
    live: '#',
    featured: false,
    image: '/assets/projects/microalert.png',
  },
  {
    title: 'SkyLytix',
    tag: 'NASA Space Apps',
    desc: 'A weather intelligence platform built during the NASA Space Apps Challenge. Features NASA Earth observation data analysis and an environmental analytics dashboard.',
    tech: ['React', 'Python', 'NASA APIs', 'Data Visualization'],
    github: 'https://github.com/Lakshmi-Pramode/Skylytix',
    live: '#',
    featured: false,
    image: '/assets/projects/skylytix.png',
  },
  {
    title: 'FindMyDonor',
    tag: 'MERN Stack',
    desc: 'Blood donor-recipient matching application with location-based search functionality and secure donor profiles to streamline the blood donation process.',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Lakshmi-Pramode/FindMyDonor',
    live: '#',
    featured: false,
    image: '/assets/projects/findmydonor.png',
  },
  {
    title: 'NutriShe',
    tag: 'MERN Stack',
    desc: 'MERN stack web application for nutrition tracking, grocery management, and leftover recipe recommendations, featuring secure authentication.',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Lakshmi-Pramode/Nutrishe',
    live: '#',
    featured: false,
    image: '/assets/projects/nutrishe.png',
  },
  {
    title: 'Qure',
    tag: 'MERN Stack',
    desc: 'Developed an AI-powered system for appointment booking and real-time queue tracking.Implemented role-based access control to manage patient and doctor interactions.',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/Lakshmi-Pramode/Qure',
    live: '#',
    featured: false,
    image: '/assets/projects/healthcare.png',
  },
]

export const experienceData = [
  {
    date: 'June 2026',
    title: 'Cognitive Assessment Intern',
    company: 'Mentiscope Incubated at Nirmaan, IIT Madras',
    desc: [
      'Worked on behavioral analytics and cognitive profiling systems using AI concepts.',
      'Developed user-centric interfaces for evaluation and analysis.',
      'Collaborated on AI-based solutions to enhance user experience.',
    ],
  },
  {
    date: 'June 2025 – July 2025',
    title: 'Full Stack Developer Intern',
    company: 'NeST Technologies',
    desc: [
      'Engineered scalable web applications using MERN stack development principles',
      'Developed and integrated complex REST APIs for secure data exchange',
      'Performed database optimization to enhance query response times and application speed',
      'Participated in active team collaboration within an agile development environment',
    ],
  },
  {
    date: 'Recent',
    title: 'Industrial Visit Trainee',
    company: 'Experion Technologies',
    desc: [
      'Gained industry exposure to modern software engineering practices',
      'Observed enterprise-level product engineering workflows and agile methodologies',
    ],
  },
]

export const educationData = [
  {
    date: 'Current',
    title: 'B.Tech Computer Science and Engineering',
    company: "St. Joseph's College of Engineering and Technology, Palai",
    desc: [
      'CGPA: 9.34',
      'Consistently demonstrating academic excellence across core engineering subjects',
    ],
  },
  {
    date: 'Current',
    title: 'Minor Degree: Robotics and Automation',
    company: "St. Joseph's College of Engineering and Technology, Palai",
    desc: [
      'Specializing in robotic systems, automation technologies, and hardware-software integration',
    ],
  },
]

export const achievementsData = [
  {
    icon: <FaRocket />,
    title: 'NASA Space Apps',
    desc: 'Active participant in the NASA Space Apps Challenge, building data-driven space and earth science solutions.',
  },
  {
    icon: <FaHandshake />,
    title: 'NSS Volunteer',
    desc: 'Dedicated National Service Scheme Volunteer actively participating in community development initiatives.',
  },
  {
    icon: <FaMicrophone />,
    title: 'TEDx Volunteer',
    desc: 'Volunteered for organizing and managing TEDx events, fostering ideas worth spreading.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Regional Coordinator',
    desc: 'Served as Regional Coordinator for the National Resource Protection Force.',
  },
  {
    icon: <FaBrain />,
    title: 'AI/ML Participant',
    desc: 'Selected participant for specialized Artificial Intelligence and Machine Learning workshop at NIT.',
  },
]

export const statsData = [
  { number: 9, suffix: '.34', label: 'CGPA' },
  { number: 4, suffix: '+', label: 'Major Projects' },
  { number: 7, suffix: '+', label: 'Certifications' },
  { number: 100, suffix: '%', label: 'Commitment' },
]

export const certificatesData = [
  {
    id: 'cert-nptel',
    title: 'Fundamentals of AI (Elite + Silver)',
    issuer: 'NPTEL',
    icon: <FaRobot />,
    credentialUrl: '#',
    file: '/assets/certificates/ai.jpeg',
  },
  {
    id: 'cert-privacy',
    title: 'Privacy & Security in Online Social Media',
    issuer: 'NPTEL',
    icon: <FaLock />,
    credentialUrl: '#',
    file: '/assets/certificates/media.jpeg',
  },
  {
    id: 'cert-robots',
    title: 'Wheeled Robots (Elite)',
    issuer: 'NPTEL',
    icon: <FaCogs />,
    credentialUrl: '#',
    file: '/assets/certificates/wheel.jpeg',
  },
  {
    id: 'cert-infosys',
    title: 'Software Engineering',
    issuer: 'Infosys Springboard',
    icon: <FaLaptopCode />,
    credentialUrl: '#',
    file: '/assets/certificates/se.jpeg',
  },
  {
    id: 'cert-dsa',
    title: 'Data Structures',
    issuer: 'Infosys Springboard',
    icon: <FaTree />,
    credentialUrl: '#',
    file: '/assets/certificates/ds.jpeg',
  },
  {
    id: 'cert-java',
    title: 'Java Fundamentals',
    issuer: 'Infosys Springboard',
    icon: <FaJava />,
    credentialUrl: '#',
    file: '/assets/certificates/java.jpeg',
  },
  {
    id: 'cert-it',
    title: 'Operating Systems',
    issuer: 'Infosys Springboard',
    icon: <FaDesktop />,
    credentialUrl: '#',
    file: '/assets/certificates/os.jpeg',
  },
]

// SVG Icons for Contact and Social
const GithubIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const LinkedinIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const MailIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

export const contactLinks = [
  { icon: MailIcon, label: 'Email', value: 'lakshmipramode2345@gmail.com', href: 'mailto:lakshmipramode2345@gmail.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'lakshmi-pramode', href: 'https://www.linkedin.com/in/lakshmi-pramode' },
  { icon: GithubIcon, label: 'GitHub', value: 'Lakshmi-Pramode', href: 'https://github.com/Lakshmi-Pramode' },
]

export const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Lakshmi-Pramode' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshmi-pramode' },
  { icon: MailIcon, label: 'Email', href: 'mailto:lakshmipramode2345@gmail.com' },
]
