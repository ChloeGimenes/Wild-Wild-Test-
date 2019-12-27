import React from 'react';
import './legal.css';
import Title from './Home/Title';
import { Link } from 'react-router-dom';

class Legal extends React.Component {
  render() {
    return (
      <div className="legal-container">
        <div className="legal">
          <Title />
          <h2>Mentions légales</h2>
          <p>
            Merci de lire avec attention les différentes modalités d’utilisation du présent site
            avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans
            réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi
            n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables
            du présent site internet sont :
          </p>
          <h3>Editeur du Site : Wild Code School</h3>
          <ul>
            <li>Numéro de SIRET: 000000</li>
            <li>Responsable editorial: Wild Wild Team</li>
            <li>Adresse: 9 Allée Serr, 33100 Bordeaux</li>
            <li>Téléphone: 09 72 52 63 94</li>
            <li>Fax: 09 72 52 63 94</li>
            <li>Email: DontWorryBeAPI@gmail.com</li>
          </ul>
          <h3>Hébergement :</h3>
          <ul>
            <li>Hébergeur : Local server 9 Allée Serr, 33100 Bordeaux</li>
          </ul>
          <h3>Développement:</h3>
          <ul>
            <li>Chloe, Baptiste, David, Clément et Alex</li>
            <li>Adresse : 9 Allée Serr, 33100 Bordeaux</li>
          </ul>
          <h3>Conditions d’utilisation :</h3>
          <p>
            Ce site est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour
            un meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons
            de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google
            Chrome, etc…
          </p>
          <hr />
          <p>
            Wild Code School met en œuvre tous les moyens dont elle dispose, pour assurer une
            information fiable et une mise à jour fiable de ses sites internet. Toutefois, des
            erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude
            des informations auprès de , et signaler toutes modifications du site qu'il jugerait
            utile. n'est en aucun cas responsable de l'utilisation faite de ces informations, et de
            tout préjudice direct ou indirect pouvant en découler.
          </p>
          <div>
            <Link to="/">
              <button className="end-game-button">Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
