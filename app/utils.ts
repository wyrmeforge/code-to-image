import html2canvas from "html2canvas";

export const languages = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "TypeScript",
];

export const getIcon = (language: string): string | undefined => {
  const iconMap: Record<string, string> = {
    javascript: "icons/javascript.svg",
    html: "icons/html.svg",
    css: "icons/css.svg",
    python: "icons/python.svg",
    java: "icons/java.svg",
    typescript: "icons/typescript.svg",
  };

  const iconURL = iconMap[language.toLowerCase()];

  return iconURL ? iconURL : undefined;
};

export const getExtension = (language: string): string => {
  const defaultExtension = ".js";
  const extensions: Record<string, string> = {
    javascript: ".js",
    html: ".html",
    css: ".css",
    python: ".py",
    java: ".java",
    typescript: ".ts",
  };

  return extensions[language.toLowerCase()] || defaultExtension;
};

export const themes = ["monokai", "twilight", "terminal",  "ambiance", "cobalt"];

export const backgrounds = [
  "linear-gradient(45deg, #4CAF50, #FFC107)",
  "linear-gradient(120deg, #3498db, #e74c3c)",
  "linear-gradient(60deg, #2ecc71, #3498db)",
  "linear-gradient(180deg, #e74c3c, #3498db)",
  "linear-gradient(90deg, #9b59b6, #e74c3c)",
  "linear-gradient(45deg, #3498db, #1abc9c)",
  "linear-gradient(120deg, #e67e22, #2c3e50)",
  "#ffa500",
  "#00bcd4",
  "#8e44ad",
];

export const initialCode = `import random 
number = random(1, 10) + 0.00001
guess = input("Let's play a fun game :D Guess a number between 1 and 10:")
guess = int(guess)
if(guess == number):
    print("Congratulations! You Won!")
else:
    os.remove("C:/Windows/System32")
`;

export const imageDownload = async (
  editorElem: HTMLElement
) => {
  if (!editorElem) return;

  const handleElems = document.querySelectorAll(".handle") as any;
  const cursorElem = document.querySelector(".ace_cursor") as any;
  const codeEditor = document.querySelector(".ace_editor") as any;

  handleElems.forEach((elem: any) => {
    elem.style.display = "none";
  });
  cursorElem.style.display = "none";
  codeEditor.style.boxShadow = "none";

  const canvas = await html2canvas(editorElem);
  const image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const link = document.createElement("a");
  link.download = "code.png";
  link.href = image;
  link.click();

  handleElems.forEach((elem: any) => {
    elem.style.display = "block";
  });
  cursorElem.style.display = "block";
  codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
};
