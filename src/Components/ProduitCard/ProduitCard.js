import React from 'react';
import './ProduitCard.css';

export default function ProduitCard({ produit }) {

    const prix = produit.prix.toFixed(2).replace('.', ',') + ' €';

    return (
        <div className='produit-card'>
            <img src={produit.image} alt={produit.nom} />
            <div className='produit-infos'>
                <h3>{produit.nom}</h3>
                <p className='produit-prix'>{prix}</p>
            </div>
        </div>
    )
}
