import { Skills } from "./Skills.tsx";

export const Main = () => {
  return (
    <main>
      <section>
        <Skills
          title="Frontend"
          skills="React, ReactRouter, NextJs, TypeScript/JavaScript, NPM, SCCS, TailWind, Bootstrap  "
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
