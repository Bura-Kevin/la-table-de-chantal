import React from 'react';
import { Link } from 'react-router-dom';
import Carrousel from '../../Components/Carrousel/Carrousel';
import resto1 from '../../assets/images/resto1.jpg';
import resto2 from '../../assets/images/resto2.jpg';
import resto3 from '../../assets/images/resto3.jpg';
import chef from '../../assets/images/chef.jpg';
import './Accueil.css';

const imagesCarrousel = [
    { src: resto1, alt: "La salle du restaurant" },
    { src: resto2, alt: "La brasserie et son décor" },
    { src: resto3, alt: "La terrasse du restaurant" },
];

export default function Accueil() {

    return (
        <>
            <Carrousel images={imagesCarrousel} />

            <div className='page'>
                <section className='presentation'>
                    <h1 className='page-title'>Bienvenue à La table de Chantal</h1>
                    <p>
                        Niché au cœur de la ville, La table de Chantal vous accueille dans un cadre
                        chaleureux et convivial. Poutres apparentes, nappes blanches et lumière tamisée :
                        tout est pensé pour que vous passiez un moment agréable, entre amis ou en famille.
                    </p>
                    <p>
                        Notre cuisine met à l'honneur les grands classiques de la gastronomie française,
                        préparés chaque jour avec des produits frais et de saison issus de producteurs locaux.
                    </p>
                </section>

                <section className='chef'>
                    <img src={chef} alt="Notre cheffe en train de dresser une assiette" />
                    <div className='chef-texte'>
                        <h2>Notre cheffe</h2>
                        <p>
                            Passionnée de cuisine depuis son enfance, Chantal a appris les recettes
                            traditionnelles aux côtés de sa grand-mère avant de se former dans plusieurs
                            grandes maisons. Après vingt ans d'expérience, elle a ouvert son propre
                            restaurant pour partager une cuisine généreuse, simple et authentique.
                        </p>
                        <Link to="/carte" className='chef-lien'>Découvrir la carte</Link>
                    </div>
                </section>
            </div>
        </>
    )
}
