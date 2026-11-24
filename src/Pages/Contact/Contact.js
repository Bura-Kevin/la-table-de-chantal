import React from 'react';
import FormulaireContact from '../../Components/FormulaireContact/FormulaireContact';
import './Contact.css';

export default function Contact() {

    return (
        <div className='page'>
            <h1 className='page-title'>Contact</h1>
            <p className='page-intro'>Une question, une réservation ? N'hésitez pas à nous écrire.</p>

            <div className='contact'>
                <FormulaireContact />

                <div className='contact-infos'>
                    <h2>Nous trouver</h2>
                    <p><strong>Adresse :</strong> 12 rue Mercière, 69002 Lyon</p>
                    <p><strong>Téléphone :</strong> <a href="tel:+33478000000">04 78 00 00 00</a></p>

                    <iframe
                        title="Plan d'accès à La table de Chantal"
                        src="https://maps.google.com/maps?q=12%20rue%20Merci%C3%A8re%2069002%20Lyon&z=16&output=embed"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
