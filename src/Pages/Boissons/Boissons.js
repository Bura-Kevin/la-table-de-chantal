import React from 'react';
import ListeProduits from '../../Components/ListeProduits/ListeProduits';

export default function Boissons() {

    return (
        <div className='page'>
            <h1 className='page-title'>Les boissons</h1>
            <p className='page-intro'>Vins, boissons fraîches et boissons chaudes pour accompagner votre repas.</p>

            <ListeProduits categorie="boissons" />
        </div>
    )
}
