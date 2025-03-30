import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    java,
    git,
    dietician,
    figma,
    multiSoft,
    jobit,
    tripguide,
    threejs,
    ens
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Data Structures & Algorithms",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "ENS Enterprises PVT LTD",
      icon: ens,
      iconBg: "#383E56",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Seamlessly integrated multiple APIs for create, read, update, and delete operations while implementing Firebase authentication for a secure and dynamic user experience.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "MultiSoft Systems",
      icon: multiSoft,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Sept 2022",
      points: [
        "Led a team of two talented individuals and assumed the role of designer and developer in creating responsive front-end solutions for both client and admin websites from the ground up.",
        "Utilized ReactJS for the front-end and Firebase for the back-end, demonstrating a strong combination of leadership and technical expertise in project delivery.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dietician Website",
      description:
        "Health and fitness platform allowing dieticians to advise clients on food and exercise plans with admin portal for trainers to assign personalized plans, track client progress, and manage health details.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "RESTful APIs",
          color: "pink-text-gradient",
        },
      ],
      image: dietician,
      source_code_link: "https://github.com/Amanx14/Dietician-Website",
      live_link : "https://dietician-website-three.vercel.app/"
    },
    {
      name: "Netflix GPT",
      description:
        " Netflix-inspired React app with GPT-powered search, Firebase authentication, Redux state management, and TMDB API integration for seamless movie discovery.",
      tags: [
        {
          name: "React.js, firebase",
          color: "blue-text-gradient",
        },
        {
          name: "TMDB API",
          color: "green-text-gradient",
        },
        {
          name: "Chat-GPT Integration",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Amanx14/nextflix",
      live_link : "https://nextflix-one-alpha.vercel.app/"
    },

    {
      name: "Art School",
      description:
        "Art School platform featuring a dynamic homepage and real-time product data fetching. Enhanced user engagement by displaying product details.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/amanx14",
      live_link : "https://art-school-khaki.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  