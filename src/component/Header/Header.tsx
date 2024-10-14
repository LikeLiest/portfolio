import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <h1>
          Hi, my name is <em>Rasim</em>
        </h1>
        <h2>a fullstack developer</h2>
        <h3>with passion for learning and creating.</h3>
        <button>Download CV</button>
      </div>
    </header>
  );
};
