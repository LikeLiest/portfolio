type TypeSkills = {
  title: string;
  skills: string;
};

export const Skills: React.FC<TypeSkills> = ({ title, skills }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{skills}</p>
    </div>
  );
};