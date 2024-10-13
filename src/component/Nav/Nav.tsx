import style from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="./index.html">
          <strong>Developer</strong> portfolio
        </a>
        <ul>
          <li>
            <a href="#" className="active">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <button>CHANGE THEME</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
