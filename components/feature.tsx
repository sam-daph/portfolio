import Head from "next/head";
import { Footer } from "./footer";

export const Featuree = () => {
  return (
    <>
      <div className="feature-about">
        <h1 className="title mb-6">Fonctionnalité</h1>
        <div className="test">
          <h1 className="title-feature">
            Bienvenue sur Samdaph.ai ! Découvrez comment notre application
            révolutionne la création d'avatars virtuels et les interactions avec
            ChatGPT. Plongez dans une démonstration captivante de notre
            technologie et imaginez les possibilités infinies. Préparez-vous à
            rejoindre ce voyage passionnant dès aujourd'hui !
          </h1>
        </div>
        <h1 className="category-video">Découvrez comment notre application fonction</h1>
        <video controls width="100%" className="mt-6 vid">
          <source src="/demo-for-project-portfolio.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </>
  );
};
