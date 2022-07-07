const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://vanshikarana.vercel.app/',
  title: 'SG',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sumrit Grover',
  role: 'Software Developer',
  description:
    "I love to develop websites and play around with different technologies. I have also worked with languages like Java and Python. I am highly motivated and responsible towards my work. If my knowledge of programming and technologies can be put to good use by you or your organization you can reach out to me by email.",
  peerlist: 'https://peerlist.io/sumrit_grover',
  social: {
    linkedin: 'https://linkedin.com/in/sumrit-grover/',
    github: 'https://github.com/smgrv123',
    twitter: 'https://twitter.com/grover_sumrit',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Social Circle',
    description:
      'A dApp built on Ethereum blockchain that allows you to connect your wallet and drop a few messages :)',
    stack: ['Solidity', 'React', 'Ethereum'],
    sourceCode: 'https://github.com/Vanshika-Rana/Social-Circle',
    livePreview: 'https://social-circle.vercel.app/',
  },
  {
    name: 'Tasteful Recipes',
    description:
      'This web app makes use of Edamam recipes API and offers recipes for various dishes. ',
    stack: ['React', 'Styled Components', 'Edamam API'],
    sourceCode: 'https://github.com/Vanshika-Rana/Tasteful-Recipes',
    livePreview: 'https://hardcore-morse-8d4aa1.netlify.app/',
  },
  {
    name: 'RCMND',
    description:
      "This app recommends you K-Dramas similar to the one you ABSOLUTELY love <3",
    stack: ['Python', 'Streamlit'],
    sourceCode: 'https://github.com/Vanshika-Rana/RCMND',
    livePreview: 'https://rcmnd-kdrama.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'React Native',
  'JavaScript',
  'Chakra UI',
  'HTML',
  'GitHub',
  'Git',
  'Solana',
  'CSS',
  'MongoDB',
  'Next JS',
  'Solidity',
  'Python',
  'Java',
  'CPP',
]

const contact = {
  email: 'sumritgrover1@gmail.com',
}

export { header, about, projects, skills, contact }
