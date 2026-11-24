import React, { useState } from 'react';
import './FormulaireContact.css';

const formulaireVide = { nom: '', email: '', sujet: '', contenu: '' };

export default function FormulaireContact() {

    const [formulaire, setFormulaire] = useState(formulaireVide);
    const [envoye, setEnvoye] = useState(false);

    const handleChange = (e) => {
        setFormulaire({ ...formulaire, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnvoye(true);
        setFormulaire(formulaireVide);
    }

    return (
        <form className='formulaire' onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" value={formulaire.nom} onChange={handleChange} required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formulaire.email} onChange={handleChange} required />

            <label htmlFor="sujet">Sujet</label>
            <input type="text" id="sujet" name="sujet" value={formulaire.sujet} onChange={handleChange} required />

            <label htmlFor="contenu">Message</label>
            <textarea id="contenu" name="contenu" rows="6" value={formulaire.contenu} onChange={handleChange} required />

            <button type="submit">Envoyer</button>

            {envoye && <p className='formulaire-merci'>Merci, votre message a bien été envoyé !</p>}
        </form>
    )
}
