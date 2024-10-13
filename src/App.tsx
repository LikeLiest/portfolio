import "./index.css";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Main } from "./component/Main/Main";
import { Nav } from "./component/Nav/Nav";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer/>
    </>
  );
};
