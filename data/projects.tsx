import PERCEPTUI from "../assets/perceptui.png";
import BRAINLY from "../assets/brainly.png";
import SAFECRYPT from "../assets/safecrypt.png";
import GRIDCONNECT from "../assets/gridc.png";
import GRIDCONNECT_LIGHT from "../assets/gridc-light.png";
import BRAINLY_LIGHT from "../assets/brainly-light.png";

export const projectData = [
  {
    name: "Percept UI",
    desc: "A comprehensive React component library designed to enhance your web applications with high-quality, accessible, and customizable UI components.",
    link: "https://perceptui.codebrise.tech/",
    repo: "https://github.com/perceptui/ui",
    imageLight: PERCEPTUI,
    imageDark: PERCEPTUI,
    tech: [
      "nextra",
      "nextjs",
      "npm",
      "vite",
      "react",
      "tailwindcss",
      "typescript",
    ],
  },
  {
    name: "Brainly",
    desc: "A second brain to manage your important links and docs. Store organize and access your important content with ease.",
    link: "https://brainlyv1.vercel.app/",
    repo: "https://github.com/CuriousCoder00/brainly",
    imageLight: BRAINLY_LIGHT,
    imageDark: BRAINLY,
    tech: [
      "vite",
      "react",
      "tailwindcss",
      "shadcn",
      "mongodb",
      "expressjs",
      "zod",
      "react-hook-forms",
    ],
  },
  {
    name: "SafeCrypt Sol",
    desc: "A web based wallet on Solana Blockchain. Effortlessly manage your Solana assets with our secure and user-friendly wallet. Create, import and monitor your holdings all in one place.",
    link: "https://safecryptsol.vercel.app/",
    repo: "https://github.com/CuriousCoder00/safecryptsol",
    imageLight: SAFECRYPT,
    imageDark: SAFECRYPT,
    tech: ["nextjs", "next-auth", "tailwindcss", "shadcn", "solana"],
  },
  {
    currentlyWorking: true,
    name: "Grid Connect",
    desc: "A web based community app where like-minded people gather and explore diverse communities tailored to various categories.",
    link: "https://grid-connect.vercel.app/",
    repo: "https://github.com/CuriousCoder00/grid-connect",
    imageLight: GRIDCONNECT_LIGHT,
    imageDark: GRIDCONNECT,
    tech: [
      "nextjs",
      "next-auth",
      "tailwindcss",
      "shadcn",
      "prisma",
      "supabase",
      "postgres",
    ],
  },
];
