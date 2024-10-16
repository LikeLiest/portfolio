import style from "./Footer.module.scss";

import gitHubIcon from "../../../public/icons/gitHub.svg";
import vkIcon from "../../../public/icons/vk.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <a href="#">
            <img src={gitHubIcon} alt="gitHub" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={vkIcon} alt="youtube" />
          </a>
        </li>
      </ul>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
        voluptates iste cumque nemo provident nam blanditiis recusandae rerum,
        odit tenetur.
      </p>
    </footer>
  );
};
