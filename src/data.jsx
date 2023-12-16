import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink } from 'react-icons/fi';


import Work1 from './assets/textmodulator.png'
import Work2 from './assets/personal.png';
import Work3 from './assets/newsmonkey.png';
import Work4 from './assets/final_year.png';
// import Work5 from './assets/project-5.jpg';
//import Work6 from './assets/project-6.jpg';


import intern1 from './assets/Internship_1.jpg';
import intern2 from './assets/Internship_2.png';
import intern3 from './assets/HTML-1.png'
import intern4 from './assets/AI_ML.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sujeet',
  },

  {
    id: 2,
    title: 'Middle Name : ',
    description: 'Kumar',
  },

  {
    id: 3,
    title: 'Last Name : ',
    description: 'Gupta',
  },

  {
    id: 4,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 5,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ghaziabad',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 8595827683',
  },

  {
    id: 8,
    title: 'Languages : ',
    description: 'English, Hindi',
  },

  {
    id: 9,
    title: 'Email : ',
    description: 'sujeetgupta2801@gmail.com',
  },

];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Completed <br/> Projects',
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br/> Internships',
  },

  {
    id: 3,
    no: '2+',
    title: 'Completed <br/> Certificates',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2022 -11/2022',
    title: 'Web Developer <span> Internshala </span>',
    desc: 'Developed intermediate-level skills through training, capable of building responsive web pages and implementing interactive features.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2022 -08/2022',
    title: 'AWS AI ML <span> AICTE </span>',
    desc: 'Completed course on Artificial Intelligence and Machine Learning. Equipping me with essential skills in data analysis, predictive modeling, and Deep Learning techniques,'
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '10/2022 -10/2022',
    title: 'Data Analysis with Python <span> YBI </span>',
    desc: 'This internship is provided by YBI Foundation. In this internship I have studied concept like Regression and Classification',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'B.Tech(ECE)',
    desc: 'KIET GROUP OF INSTITUTION, Delhi-NCR, Ghaziabad, Uttar Pradesh, 201206.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2020',
    title: '12th',
    desc: 'Sky Hawk International School, Delhi',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: '10th',
    desc: 'Geeta International Public School, Kushinagar, Uttar Pradesh, 274304',
  },

];

export const skills = [

  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '65',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '50',
  },

  {
    id: 4,
    title: 'React.js',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Node.js',
    percentage: '65',
  },

  {
    id: 6,
    title: 'C++',
    percentage: '60',
  },

  {
    id: 7,
    title: 'DSA',
    percentage: '60',
  },

  {
    id: 8,
    title: 'C',
    percentage: '60',
  },

];

export const portfolio = [

  {
    id: 1,
    img: Work4,
    title: 'spendWise',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'React.js, Node.js',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: 'https://github.com/Sujeet2801/spendWise_Website',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://spend-wise-website-nine.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: 'https://github.com/Sujeet2801/Portfolio-Website',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://sujeet2801.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work1,
    title: 'Text Modulator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },

      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS, JS',
      },

      {
        icon: <FaGithub />,
        title: 'Github: ',
        desc: 'https://github.com/Sujeet2801/TextUtils-react',
      },

      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://textmodulator.netlify.app',
      },
    ],
  },


  {
    id: 4,
    img: Work3,
    title: 'News Webite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FaGithub />,
        title: 'Github : ',
        desc: 'https://github.com/Sujeet2801/newsmokey',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://newsmokey.vercel.app/',
      },
    ],
  },

  // {
  //   id: 4,
  //   // img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FaGithub />,
  //       title: 'Github : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Github : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FaGithub />,
  //       title: 'Github : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },

];

export const internship = [

  {
    id: 1,
    img: intern1,
    title: 'Web Development',
    details: [
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: intern1,
      }
    ],
  },

  {
    id: 2,
    img: intern2,
    title: 'Data Analysis with Python',
    details: [
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: intern2,
      },
    ],
  },

  {
    id: 3,
    img: intern3,
    title: 'HTML Bootcamp',
    details: [
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: intern3,
      },
    ],
  },

  {
    id: 4,
    img: intern4,
    title: 'AI-ML Internship',
    details: [
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: intern4,
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];