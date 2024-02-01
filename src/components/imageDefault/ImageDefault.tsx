import { FunctionComponent } from "react";

interface ImageDefaultProps {}

const ImageDefault: FunctionComponent<ImageDefaultProps> = () => {
  return (
    <div className="authorsLicense">
      Image by{" "}
      <a
        href="https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=821993"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alexa
      </a>{" "}
      from{" "}
      <a
        href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=821993"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pixabay
      </a>
    </div>
  );
};

export default ImageDefault;
