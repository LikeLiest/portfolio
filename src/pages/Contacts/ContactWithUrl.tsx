import { TypeContactProps } from "./Contact";

export const ContactWithUrl: React.FC<Partial<TypeContactProps>> = ({
  contactName,
  imgSrc,
  contactDescription,
  contactUrl,
}) => {
  return (
    <a href={contactUrl}>
      <div>
        {contactName && <h1>{contactName}</h1>}
        {imgSrc && <img src={imgSrc} alt="image" />}
        {contactDescription && <h2>{contactDescription}</h2>}
      </div>
    </a>
  );
};
