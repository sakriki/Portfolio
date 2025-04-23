import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.webp",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.webp",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.webp",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Node.js",
    image: "node.webp",
    width: 80,
    height: 80,
  },

] as const;

export const SOCIALS = [
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://youtube.com/@techrikiyt",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/techrikiyt",
  },

  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/saksham.jaiswal.1884/",
  },

] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Photoshop",
    image: "photoshop.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Premiere",
    image: "premiere.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "github",
    image: "github.webp",
    width: 65,
    height: 65,
  },
  {
    skill_name: "grok",
    image: "grok.webp",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Canva",
    image: "canva.webp",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Firebase Studio",
    image: "firebase_studio.webp",
    width: 80,
    height: 80,
  },

] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.webp",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Firebase",
    image: "firebase.webp",
    width: 55,
    height: 55,
  },
 
  {
    skill_name: "MySQL",
    image: "mysql.webp",
    width: 70,
    height: 70,
  },

] as const;

export const FULLSTACK_SKILL = [


  {
    skill_name: "Figma",
    image: "figma.webp",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "Gafadi Chat",
    description:
      'This is one of the best projects that I have made when I was in high school. I made this for my fellow college students so that they can chat anonymously with any random college student. This site was entirely built by me including the databse, hosting, and encryption protection.',
    image: "/projects/project-1.png",
    link: "https://gafadi.great-site.net",
  },
  {
    title: "Fridge Chef",
    description:
      'This website was my first wesite which i created entirely by AI, which has an integrated AI (LOL). Here you can enter any ingredients you have at home and it can suggest some recipes to try with your available ingredients. It uses GEMINI recommend you the delicious recipes!',
    image: "/projects/project-2.png",
    link: "https://fridgechefsaksham.vercel.app/",
  },
  {
    title: "Space Themed Website",
    description:
      'This was a website which I built for group project in during my high school. This project was made by me, along with my 4 team members. This website has some basic information about the mystery of the cosmos. This site uses simple HTML, CSS and very few JAVASCRIPT code.',
    image: "/projects/project-3.png",
    link: "https://spaceprojectsaksham.netlify.app/homepage",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@techrikiyt",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sakriki",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/channels/@rikidagod",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/techrikiyt",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/saksham-jaiswal-15bb3b312/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://instagram.com/techrikiyt",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://youtube.com/techrikiyt",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:saksham.riki@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://youtube.com/@techrikiyt",
};
