export type TypeContactProps = {
  contactName: string;
  imgSrc: string;
  contactDescription: string;
  contactUrl?: string;
};

export const Contact: React.FC<Partial<TypeContactProps>> = ({
  contactName,
  imgSrc,
  contactDescription,
}) => {
  return (
    <div>
      {contactName && <h1>{contactName}</h1>}
      {imgSrc && <img src={imgSrc} alt="image" />}
      {contactDescription && <h2>{contactDescription}</h2>}
    </div>
  );
};
