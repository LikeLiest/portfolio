import style from './Projects.module.scss'
import { Project } from './project/Project'

export const Projects = () => {
  return (
    <section id={style.projectContainer}>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
    </section>
  );
};
