import { v4 as uuidv4 } from 'uuid';

import soupeOignon from './images/soupe-oignon.jpg';
import saladeNicoise from './images/salade-nicoise.jpg';
import escargots from './images/escargots.jpg';
import foieGras from './images/foie-gras.jpg';
import oeufsMimosa from './images/oeufs-mimosa.jpg';

import boeufBourguignon from './images/boeuf-bourguignon.jpg';
import coqAuVin from './images/coq-au-vin.jpg';
import ratatouille from './images/ratatouille.jpg';
import confitCanard from './images/confit-canard.jpg';
import blanquette from './images/blanquette.jpg';

import cremeBrulee from './images/creme-brulee.jpg';
import tarteTatin from './images/tarte-tatin.jpg';
import mousseChocolat from './images/mousse-chocolat.jpg';
import profiteroles from './images/profiteroles.jpg';
import ileFlottante from './images/ile-flottante.jpg';

import vinRouge from './images/vin-rouge.jpg';
import champagne from './images/champagne.jpg';
import limonade from './images/limonade.jpg';
import cafe from './images/cafe.jpg';
import jusOrange from './images/jus-orange.jpg';

const produits = [
  // Entrées
  { id: uuidv4(), categorie: "entrées", nom: "Soupe à l'oignon gratinée", image: soupeOignon, prix: 8.5 },
  { id: uuidv4(), categorie: "entrées", nom: "Salade niçoise", image: saladeNicoise, prix: 9 },
  { id: uuidv4(), categorie: "entrées", nom: "Escargots de Bourgogne", image: escargots, prix: 12 },
  { id: uuidv4(), categorie: "entrées", nom: "Foie gras maison", image: foieGras, prix: 15 },
  { id: uuidv4(), categorie: "entrées", nom: "Œufs mimosa", image: oeufsMimosa, prix: 7 },

  // Plats
  { id: uuidv4(), categorie: "plats", nom: "Bœuf bourguignon", image: boeufBourguignon, prix: 22 },
  { id: uuidv4(), categorie: "plats", nom: "Coq au vin", image: coqAuVin, prix: 20 },
  { id: uuidv4(), categorie: "plats", nom: "Ratatouille provençale", image: ratatouille, prix: 16 },
  { id: uuidv4(), categorie: "plats", nom: "Confit de canard", image: confitCanard, prix: 23 },
  { id: uuidv4(), categorie: "plats", nom: "Blanquette de veau", image: blanquette, prix: 21 },

  // Desserts
  { id: uuidv4(), categorie: "desserts", nom: "Crème brûlée", image: cremeBrulee, prix: 7.5 },
  { id: uuidv4(), categorie: "desserts", nom: "Tarte Tatin", image: tarteTatin, prix: 8 },
  { id: uuidv4(), categorie: "desserts", nom: "Mousse au chocolat", image: mousseChocolat, prix: 7 },
  { id: uuidv4(), categorie: "desserts", nom: "Profiteroles", image: profiteroles, prix: 9 },
  { id: uuidv4(), categorie: "desserts", nom: "Île flottante", image: ileFlottante, prix: 6.5 },

  // Boissons
  { id: uuidv4(), categorie: "boissons", nom: "Verre de vin rouge", image: vinRouge, prix: 6 },
  { id: uuidv4(), categorie: "boissons", nom: "Coupe de champagne", image: champagne, prix: 11 },
  { id: uuidv4(), categorie: "boissons", nom: "Limonade à la framboise", image: limonade, prix: 4.5 },
  { id: uuidv4(), categorie: "boissons", nom: "Café expresso", image: cafe, prix: 2.5 },
  { id: uuidv4(), categorie: "boissons", nom: "Jus d'orange pressé", image: jusOrange, prix: 5 },
];

export default produits;
