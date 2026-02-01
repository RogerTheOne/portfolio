import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "aws-svgrepo-com",
    "css3",
    "git",
    "github",
    "html5",
    "java-svgrepo-com",
    "javascript",
    "microsoft",
    "microsoftsqlserver",
    "node-js-svgrepo-com",
    "npm-svgrepo-com",
    "python-svgrepo-com",
    "react",
    "redux-svgrepo-com",
    "tailwindcss",
    "typescript-16-svgrepo-com",
    "visualstudiocode",
    "vitejs",
    "vue-svgrepo-com"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);