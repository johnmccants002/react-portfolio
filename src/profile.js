// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "John McCants",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I'm from Sacramento, CA and I'm a software engineer at OnDeck Pro.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "React Native",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Swift",
    // svg: '',
    faClass: "fab fa-swift",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "VictoryHQ",
    skills: ["Swift, Firebase"],
    url: "https://github.com/johnmccants002/VictoryHQ",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Events App",
    skills: ["MongoDB, Express, React, Node"],
    url: "https://github.com/johnmccants002/project4",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Photofy",
    skills: ["Python, Django, AWS"],
    url: "https://github.com/johnmccants002/Photofy",
  },

  {
    id: "project4",
    name: "Presently",
    skills: ["React Native, Expo Router, Javascript"],
    url: "https://653c58bacd751e12cdfa78f6--presentlyapp.netlify.app/landing",
  },
  {
    id: "project5",
    name: "DuduBubu Widget App",
    skills: ["SwiftUI, WidgetKit, Firebase"],
    url: "https://github.com/johnmccants002/dudububuwidgetapp",
  },
  {
    id: "project6",
    name: "FlashCard AI",
    skills: ["React Native, Expo Router, ChatGPT"],
    url: "https://github.com/johnmccants002/fetchitapp",
  },
  {
    id: "project7",
    name: "Elevate Lawn Care",
    skills: ["Nextjs, Vercel, SMTP"],
    url: "https://www.elevatelawn.care/",
  },
  {
    id: "project8",
    name: "2Leaf Project",
    skills: ["MongoDB, Express, CSS, SendGrid, Javascript, HTML5"],
    url: "https://github.com/johnmccants002/2Leaf-Project",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Reach out to me if you have any questions or want to have a conversation about tech. I'll be sure to get back to you.",
  copyright: "John McCants",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/johnmccants002",
  facebook: "https://www.facebook.com/JohnMcCants2",
  instagram: "https://www.instagram.com/itsmccants/",
  linkedin: "https://www.linkedin.com/in/johnmccants/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
