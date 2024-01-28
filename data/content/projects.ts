import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "PROsody",
    desc: "Leverage Machine Learning to improve your public speaking skills!",
    img: "/static/projects/prososos.png",
    link: "",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Python", "Node.js", "Express.js","MySWL", "Okta OAuth", "Hume AI", "AWS"],
  },
  {
    id: 1,
    title: "Subway Surfer Multitasker",
    desc: "A fun-multitsking chrome extension with 5000 dowloads!",
    img: "/static/projects/ssmp.png",
    link: "https://chromewebstore.google.com/detail/subwaysurfer-multitasker/maboghjgeadhelcbdpjegiijbfinaboc",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Javascript"],
  },
  {
    id: 2,
    title: "PhishNet.io",
    desc: "A distrubuted phishing email scam detector with NLP!",
    img: "/static/projects/phishnet.png",
    link: "phishnet.io",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Python", "ANN", "Keras"," REST API", "Word2Vec", "KNN", "AWS"],
  },
  {
    id: 3,
    title: "Soundscape",
    desc: "Discover curated music playlists based on your mood & meet people with similar tastes!",
    img: "/static/projects/scape2.png",
    link: "https://github.com/jag-prabhakaran",
    tags: ["React", "Python", "BERT", "Cuda", "CockroachDB", "Flask", "Google Cloud"],
  },
  {
    id: 4,
    title: "Stock Predictor with NLP",
    desc: "Time Series Forecasting for Stocks with emphasis on Investor sentiment!",
    img: "/static/projects/stock.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Python", "ANN", "Genetic Algorithms", "Tweepy", "Git"],
  },
  {
    id: 5,
    title: "Art Movement Image Recognition Model",
    desc: "Detect the art movement of paintings trained with Vision Transformers!",
    img: "/static/projects/OCR (1).png",
    link: "https://github.com/jag-prabhakaran",
    tags: ["Python", "Pytorch", "Flask", "Transformers", "ViT", "OpenCV"],
  },
  {
    id: 6,
    title: "Quantum Convolutional Neural Network for Image Recognition",
    desc: "QCNN implementation to efficiently classify handrwiten numbers!",
    img: "/static/projects/OCR.png",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Python", "QCNN", "Tensorflow", "Pennylane"],
  },
  {
    id: 7,
    title: "Game-Theoretic Cell Malignancy Classifier",
    desc: "Cancer cell classifier with emphasis on feature attribution!",
    img: "/static/projects/gtcc.png",
    github: "https://github.com/jag-prabhakaran",
    tags: ["Python", "SHAP", "Game Theory", "scikit"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects