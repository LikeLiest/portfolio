import { Contact } from "./Contact";
import { ContactWithUrl } from "./ContactWithUrl";

import style from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section id={style.contacts}>
      <h1>Contacts</h1>

      <div className={style.contactWrapper}>
        <Contact contactName="Location" contactDescription="Kazan, Russia" />
        <ContactWithUrl
          contactName="Telegram"
          contactDescription="+7 (927) 046-58-70"
          contactUrl="https://t.me/whitewill69"
        />
        <Contact
          contactName="Email"
          contactDescription="rasimzakirov9@gmail.com"
        />
      </div>
    </section>
  );
};
