// It's a good practice to have interfaces in their own file (e.g., 'interfaces.ts')
// or defined in the component that uses them. For now, it's fine here.
export interface Project {
  id: number;
  title: string;
  tools: string;
  image: string; // The image property is a string (path to the image)
  alt: string;
}

// Import your local image. Webpack/Vite will handle turning this into a usable path string.
import DaanImg from "../images/Daan_landing_Page.png";
import QuizKarooImg from "../images/QuizKaroo_landing_Page.png";
import GreenPulseImg from "../images/GreenPulse_Landing_Page.png";
export const projects: Project[] = [
  {
    id: 1,
    title: "DAAN",
    tools: "React, Tailwind, Node.js, MongoDB, Blockchain, Solidity, Hardhat, Face Recognition, Sentiment Analysis, Auto Investing Ai Bot",
    // Corrected: Pass the imported image variable directly.
    image: DaanImg,
    alt: "Screenshot of the DAAN crowdfunding platform",
  },
  {
    id: 2,
    title: "QuizKaroo",
    tools: "DJango , Flask , Generative Ai , Google Gemini",
    // This assumes you have an image at 'public/images/portfolio-v1.webp'
    image: QuizKarooImg,
    alt: "Screenshot of my first portfolio website",
  },
  {
    id: 3,
    title: "Green Pulse",
    tools: "MERN Stack, TensorFlow, PyTorch, Kaggle, GenAI",
    image: GreenPulseImg,
    alt: "Screenshot of an e-commerce store homepage",
  },
  // You can add more project objects here
];