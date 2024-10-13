type TypeSkills = {
  title: string;
  skills: string;
};

// React.FC<{OBJECT}> -> нужен для TS чтобы типизировать компонент и вернуть его как JSX компоне
export const Skills: React.FC<TypeSkills> = ({ title, skills }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{skills}</p>
    </div>
  );
};