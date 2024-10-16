import { Skills } from "./Skills.tsx";
import style from "./Home.module.scss";
import { Header } from "../../component/Header/Header.tsx";

export const Home = () => {
  return (
    <main id={style.main}>
      <Header />
      <section>
        <Skills
          title="Frontend"
          skills="React, ReactRouter, NextJS, TypeScript/JavaScript, NPM, SCCS, TailWind, Bootstrap"
        />
        <Skills
          title="Backend"
          skills="Java - 17, Java Mail Sender,
          Spring Web, Spring Cloud, Spring Security, Spring Data, Spring Session, Spring Data Jpa, Spring Validation"
        />
        <Skills title="Database" skills="PostgreSQL, MongoDB, Redis" />
        <Skills title="Additional" skills="Docker, GitHub, Terminal(Unix)" />
      </section>
    </main>
  );
};
