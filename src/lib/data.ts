export const profile = {
  name: 'Muhammad Furqan',
  title: 'Full Stack Developer | Java & Spring Boot | AI/ML Integration',
  phone: '+92 327 5144926',
  email: 'mfurqanch.dev@gmail.com',
  summary:
    'Full Stack Developer with hands-on experience building end-to-end web applications combining Java/Spring Boot and Python/Flask, including integration of machine learning models into production-ready systems. Adept at database design, secure authentication, and delivering complete, real-world solutions from backend to frontend.',
  experienceSnapshot: '1+ year hands-on with Java Spring Boot across 4 shipped projects',
  education: {
    degree: 'Bachelor of Science in Computer Science',
    dates: '2022 – 2026',
    institution: 'International Islamic University, Islamabad',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-f-758273225',
    github: 'https://github.com/MFurqanCh10?tab=repositories',
  },
}

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'C++', 'JavaScript'] },
  {
    label: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Flask', 'JWT Authentication', 'MVC Architecture', 'JPA Hibernate'],
  },
  {
    label: 'Frontend',
    items: ['HTML', 'TailwindCSS', 'Bootstrap', 'JavaScript', 'Thymeleaf', 'React.js'],
  },
  { label: 'Databases', items: ['MySQL', 'SQL', 'PostgreSQL', 'MongoDB'] },
  { label: 'Developer Tools', items: ['Git', 'GitHub', 'Vercel', 'AWS', 'Railway', 'Agile/Scrum Workflow'] },
  { label: 'AI / Machine Learning', items: ['Scikit-learn', 'Random Forest', 'Logistic Regression'] },
]

export const projects = [
  {
    number: '01',
    name: 'AI-Powered Student Academic Advisor System',
    badge: 'Final Year Project',
    description:
      'Full-stack AI advisory platform for academic risk prediction, classification, and transcript analysis.',
    bullets: [
      'Predicts academic risk (Low/Medium/High) and classifies students by CGPA, attendance, and failed subjects using Random Forest and Logistic Regression.',
      'AI Transcript Analyzer detects weak, failed, and problematic courses and generates structured reports with performance insights and personalized study recommendations.',
      'JWT-based authentication with role-based access control for Student and Admin roles.',
      'Recommendation engine and analytics dashboard to support academic decision-making.',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'Flask', 'Scikit-learn', 'JWT', 'MySQL'],
  },
  {
    number: '02',
    name: 'E-Commerce Store & Admin Portal',
    badge: 'Full-Stack Application',
    description:
      'Full-stack e-commerce platform with a dedicated admin management portal.',
    bullets: [
      'Product browsing, cart management, and checkout with a separate Admin Portal for products, orders, and users.',
      'RESTful APIs in Java/Spring Boot and server-rendered frontend pages using Thymeleaf, HTML, and CSS.',
      'Relational MySQL schema for product, order, and user data.',
      'Secure authentication and role-based authorization for user and admin workflows.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Thymeleaf', 'HTML', 'CSS', 'MySQL'],
  },
  {
    number: '03',
    name: 'Personal Portfolio Website',
    badge: 'Deployed on Vercel',
    description:
      'Responsive single-page portfolio showcasing full-stack projects, technical skills, and contact details.',
    bullets: [
      'Designed and deployed a responsive single-page portfolio website using HTML, TailwindCSS, and JavaScript.',
      'Dedicated sections for projects, skills, education, and contact.',
      'Resume link, email contact button, and copy-email option for recruiter outreach.',
      'Deployed the site on Vercel for public access.',
    ],
    technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'Vercel'],
  },
]

export const certifications = ['Java Spring Boot (Udemy)', 'Python', 'MySQL', 'Web Development']
