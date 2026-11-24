import React from 'react';
import ListeProduits from '../../Components/ListeProduits/ListeProduits';

export default function Carte() {

    return (
        <div className='page'>
            <h1 className='page-title'>La carte</h1>
            <p className='page-intro'>Des plats faits maison, préparés avec des produits frais et de saison.</p>

            <ListeProduits titre="Entrées" categorie="entrées" />
            <ListeProduits titre="Plats" categorie="plats" />
            <ListeProduits titre="Desserts" categorie="desserts" />
        </div>
    )
}
