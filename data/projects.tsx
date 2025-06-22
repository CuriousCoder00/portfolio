import PERCEPTUI from "../assets/perceptui.png";
import BRAINLY from "../assets/brainly.png";
import BRAINLY_LIGHT from "../assets/brainly-light.png";
import URL_SHORTNER from "../assets/url-shortner.png";
import RUNE_LIGHT from "../assets/rune-light.png";
import RUNE_DARK from "../assets/rune-dark.png";
import RUNE_EXT from "../assets/rune-extension.png";
import AI_AUTO_COMMIT from "../assets/ai-commit.png";

export const projectData = [
  {
    name: "Rune Lang – A Minimal Interpreted Programming Language",
    desc: "Rune Lang is a custom-built, interpreted programming language designed for learning and experimentation.",
    link: "https://rune.kapiljangid.live",
    repo: "",
    imageLight: RUNE_LIGHT,
    imageDark: RUNE_DARK,
    tech: [
      "python",
      "tokens",
      "lexer",
      "AST Nodes",
      "Abstract Syntax Tree",
      "interpreter",
      "parser",
    ],
  },
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
    name: "Rune Lang VS Code Extension",
    desc: "This Visual Studio Code extension provides official support and execution in VS Code for Rune Lang, a custom-designed educational programming language.",
    link: "https://marketplace.visualstudio.com/items?itemName=kjxcodez.rune",
    repo: "",
    imageLight: RUNE_EXT,
    imageDark: RUNE_EXT,
    tech: [
      "VS Code Extension API",
      "TypeScript",
      "VSCE",
      "Marketplace Publishing",
      "TextMate Grammars (tmLanguage)",
    ],
  },
  {
    name: "AI Auto Commit",
    desc: "AI Auto Commit is a developer productivity extension for Visual Studio Code that generates meaningful and concise Git commit messages using AI via scanning changes with simple-git.",
    link: "https://marketplace.visualstudio.com/items?itemName=kjxcodez.rune",
    repo: "https://github.com/CuriousCoder00/ai-commitbot",
    imageLight: AI_AUTO_COMMIT,
    imageDark: AI_AUTO_COMMIT,
    tech: [
      "VS Code Extension API",
      "TypeScript",
      "VSCE",
      "Marketplace Publishing",
      "TextMate Grammars (tmLanguage)",
      "Gemini API",
      "simple-git",
      "diff analyzer",
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
    name: "Url Shortner",
    desc: "A simple and easy to use URL shortner. Shorten your long URLs with ease and share them with your friends.",
    link: "https://shorturlmaker.vercel.app/",
    repo: "https://github.com/CuriousCoder00/url-shortner",
    imageLight: URL_SHORTNER,
    imageDark: URL_SHORTNER,
    tech: [
      "nextjs",
      "tailwindcss",
      "typescript",
      "shadcn",
      "postgres",
      "prisma",
    ],
  },
];
