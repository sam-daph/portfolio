import { Footer } from "./footer";

export const About = () => {
  return (
    <>
      <section className="feature-about">
        <div className="flex items-center">
          <div className="w-1/2 pr-20">
            <div className="mb-10">
              <p className="text-2xl font-semibold text-center">À Propos</p>
            </div>
            <div className="w-2/2">
              <img
                src="/robot.jpg"
                alt="Image À Propos"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="home-social">
            <a href="https://github.com/samdaphbynet/samdaphAI">Github</a>
        </div>
            </div>
          </div>
          <div className="w-1/2 content-about">
            <h1 className="text-3xl font-semibold m-10">
              Contexte de notre Application
            </h1>
            <p className="">
              Samdaph.ai est bien plus qu'une simple plateforme de création
              d'avatars virtuels. Notre projet a été inspiré par une vision
              partagée de connecter les individus à travers l'innovation
              technologique. Notre histoire commence il y a 3 semaines.
            </p>
            <p className="text-gray-600">
              Ce projet est né de notre désir de repousser les limites de la
              créativité et de la communication en ligne. C'est notre portfolio
              project pour{" "}
              <a
                href="https://www.holbertonschool.com"
              >
                Holberton School
              </a>
              , mais c'est aussi notre contribution à un avenir où la
              technologie nous permet de façonner des mondes virtuels
              captivants. En tant qu'équipe, nous croyons que l'imagination est
              la clé pour exploiter le plein potentiel de la technologie.
              Samdaph.ai vous invite à explorer cet univers où l'imagination
              rencontre la technologie, où vous pouvez créer des avatars uniques
              et vivre des conversations passionnantes grâce à l'intelligence
              artificielle de ChatGPT.
            </p>
            <p className="text-gray-600">
              Rejoignez-nous aujourd'hui pour faire partie de cette aventure
              exceptionnelle et contribuer à notre vision d'un monde virtuel
              connecté et inspirant.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
};
