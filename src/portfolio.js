const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://portfolio-smgrv123.vercel.app/',
  title: "SG",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sumrit Grover",
  role: "Software Developer",
  description:
    "I enjoy creating applications, dApps, and websites, as well as tinkering with new technologies. Additionally, I've worked with Java and Python. I am a self-starter with a strong work ethic. You or your organisation can get in touch with me via email if my expertise in programming and technology will be beneficial to you or your business.",
  peerlist: "https://peerlist.io/sumrit_grover",
  social: {
    linkedin: "https://linkedin.com/in/sumrit-grover/",
    github: "https://github.com/smgrv123",
    twitter: "https://twitter.com/grover_sumrit",
    calendly: "https://calendly.com/sumritgrover/30min",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Sustain The World",
    description:
      "Donors may easily connect with non-profit organisations using the app, which streamlines the donation process for both the donors and the organisations collecting the items.",
    stack: ["React Native", "Flask", "PyTorch", "MongoDB"],
    sourceCode: "https://github.com/smgrv123/SustainTheWorld-1",
  },
  {
    name: "Phantom NFT Viewer",
    description:
      "A dApp built on Solana blockchain that allows you to connect your wallet and look at your NFTs 🤭",
    stack: ["React", "Solana"],
    sourceCode: "https://github.com/smgrv123/Phantom-NFT-Viewer",
    livePreview: "http://solvent-website.vercel.app/",
  },
  {
    name: "Offline-Edu",
    description:
      "A system that allows a teacher to transmit notes as media files by converting them to text only messages and delivering them by SMS to students, allowing them to get the contents offline.",
    stack: ["React Native", "Flask", "PyTorch", "Firebase", "Python"],
    sourceCode: "https://github.com/smgrv123/Offline-Edu",
    livePreview:
      "https://drive.google.com/file/d/1mECRUEC9p2pzdFT_BFiOoZsPkS0QLnkM/view?usp=sharing",
  },
  {
    name: "NFT minter",
    description:
      "This dApp uses Candy Minter to mint NFT on the Solana blockchain. ",
    stack: ["React", "Solana"],
    sourceCode: "https://github.com/smgrv123/Nft-Candy-minter-web",
    livePreview: "http://nft-candy-minter-web.vercel.app/",
  },
  {
    name: "Medic",
    description:
      "Medic gives patients transparent info about hospital charges, bed availability, oxygen, and ventilators.",
    stack: ["React Native", "Ionic", "Python", "Flask", "Firebase"],
    sourceCode: "https://github.com/smgrv123/Medic",
    livePreview: "https://hopeful-babbage-6d48f7.netlify.app/",
  },
  {
    name: "The Truth Finder",
    description:
      "This initiative aims to teach individuals that internet news articles may not be accurate. This simple tool helps users avoid erroneous assumptions.",
    stack: ["React Native", "Django"],
    sourceCode: "https://github.com/smgrv123/TheTruthFinder-1",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Firebase",
  "Chakra UI",
  "HTML",
  "GitHub",
  "Git",
  "Solana",
  "CSS",
  "MongoDB",
  "Next JS",
  "Solidity",
  "Python",
  "Java",
  "CPP",
];

const contact = {
  email: "sumritgrover1@gmail.com",
};

export { header, about, projects, skills, contact };
