import React, { useContext } from 'react';
import { CarteContext } from '../../context/CarteContext';
import ProduitCard from '../ProduitCard/ProduitCard';
import './ListeProduits.css';

export default function ListeProduits({ titre, categorie }) {

    const { produits } = useContext(CarteContext);

    const listeProduits = produits
        .filter((produit) => produit.categorie === categorie)
        .map((produit) => <ProduitCard key={produit.id} produit={produit} />);

    return (
        <section className='liste-produits'>
            {titre && <h2>{titre}</h2>}
            <div className='liste-produits-grid'>{listeProduits}</div>
        </section>
    )
}
