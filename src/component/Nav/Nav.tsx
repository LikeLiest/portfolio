import style from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="./home">
          <strong>Developer</strong> portfolio
        </a>
        <ul>
          <li>
            <a href="./home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="./projects">Projects</a>
          </li>
          <li>
            <a href="./contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
