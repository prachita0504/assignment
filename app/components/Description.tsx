import { NextPage } from 'next';

const Description: NextPage = () => {
  return (
    <section className="bg-white text-center py-10 px-4 md:px-20 text-gray-800">
      {/* Title */}
      <h2 className="text-2xl text-[#1f2b6c] font-medium border-y border-blue-700 inline-block py-2 px-4">
        CulturArTistLy
      </h2>

      {/* Tagline */}
      <p className="mt-2 text-lg font-normal">Ma Muse | Muzik Me</p>

      {/* Description Summary */}
      <p className="mt-4 text-md">
        <strong>Production / Distribution musicale</strong> : Independent Record Label / Maison de disque | Maison d’édition de livres / Artistes, auteurs, interprètes indépendants / Label discographie / Éditeur de musique / Music publisher
        <br />
        <strong>Studio de Musique</strong>
        <br />
        <strong>DJ/Producteurs</strong>
      </p>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-justify">
        <div>
          <h3 className="text-center text-lg font-semibold mb-2">À propos</h3>
          <p>
            Les Productions CulturATtistLy Inc. couvrent les volets musicaux, arts littéraires, spectacles et divertissements. Ses activités se concentrent surtout dans la production musicale, la distribution, la commercialisation d’enregistrement de musique. Affilié à d’autres entreprises connexes de services relatifs aux films et au domaine de l'audiovisuel, de studios de musique et de Sonorisation. Ces services connexes sont offerts sur demande seulement.
          </p>
        </div>

        <div>
          <h3 className="text-center text-lg font-semibold mb-2">About us</h3>
          <p>
            CulturATtistLy Productions Inc. covers musical, literary arts, shows and entertainment. Its activities are mainly concentrated in music production, distribution, marketing of music recordings. Affiliated with other related film and audiovisual services, music and sound studios. These related services are available upon request only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
