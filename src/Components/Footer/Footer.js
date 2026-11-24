import React from 'react';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import './Footer.css';

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-socials'>
                <a href="https://www.facebook.com/latabledechantal" target="_blank" rel="noreferrer">
                    <img src={FacebookIcon} alt="Facebook de La table de Chantal" />
                </a>
                <a href="https://www.instagram.com/latabledechantal" target="_blank" rel="noreferrer">
                    <img src={InstagramIcon} alt="Instagram de La table de Chantal" />
                </a>
            </div>
            <p>© {new Date().getFullYear()} La table de Chantal</p>
        </footer>
    )
}
