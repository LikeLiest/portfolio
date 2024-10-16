import style from "./Footer.module.scss";

import gitHubIcon from "/icons/gitHub-light.svg";
import vkIcon from "/icons/vk-light.svg";
import telegramIcon from "/icons/telegram-light.svg"

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <a href="https://github.com/LikeLiest">
            <img src={gitHubIcon} alt="gitHub" />
          </a>
        </li>
        <li>
          <a href="https://vk.com/id412908267">
            <img src={vkIcon} alt="vk" />
          </a>
        </li>
        <li>
          <a href="https://t.me/whitewill69">
            <img src={telegramIcon} alt="telegram" />
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
