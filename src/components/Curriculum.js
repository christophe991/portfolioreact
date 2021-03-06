import '../styles/Curriculum.css'

function Curriculum(){
    return(
        <div>
            <h2 className='mt-5'>Competences en développement</h2>
            <p className='mt-5'>
            Voici les langage de programation apris en formation avec un affichage, je possede
            des connaissances en frontend et backend.
        </p>
        <table className='competence mt-5'>
            <thead class="bg-primary">
                <tr class="text-center color-secondary">
                    <th>Image</th>
                    <th>Langage</th>
                    <th>Progression</th>
                </tr>
            </thead>
            <tr>
                <td><img src="img/php.png" alt='php'/></td><td>php</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/sql.png" alt='sql'/></td><td>SqlSever</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/js.png" alt='js'/></td><td>JAVSCRIPT</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/boot.jpg" alt='bootstrap5'/></td><td>BootSTRAP5</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/angular.png" alt='angular'/></td><td>ANGULAR</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/reactjs.png" alt='react'/></td><td>REACT</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            <tr>
                <td><img src="img/csharp.png" alt='react'/></td><td>CSharp</td><td><img src="img/progre.jpg" alt='progression'/></td>
            </tr>
            
        </table>
        <h2 className='mt-5'>Evaluation en developpement web et web mobile</h2>
        <p className='mt-5'>Durant la formation Chez Webforce3 apres un mois de cour j'ai effectuer
            des evaluations, voici le resultat en image.
        </p>
        <img className='eval mt-5' src="img/evaluations.png" alt='evaluation'/>
        <h2 className="mt-5">Formations</h2>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2021-2022</li>
            <li className='col-10'>Formation dotnet M2IFormation</li>
        </ul>
        <ul className='mission mt-5'>
            <h5 className='mt-5'>Missions :</h5>
            <li>&#8227;Création projet fil rouge en react et wpf</li>
            <li>&#8227;Réalisation du portfolio en react</li>
            <li>&#8227;Création de mini jeu en javascript</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2020-2021</li>
            <li className='col-10'>Développeur web et web mobile Webforce3</li>
        </ul>
        <ul className='mission mt-5'>
            <h5>Missions :</h5>
            <li>&#8227;Projet de groupe en fin de formation sur synfony 5</li>
            <li>&#8227;Mise en situation avec des evaluations</li>
            <li>&#8227;Création de page personnel pendant mon temps libre</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2020</li>
            <li className='col-10'>Découverte des metiers numérique Afpa</li>
        </ul>
        <ul className='mission mt-5'>
            <h5>Missions :</h5>
            <li>&#8227;Création du jeu du pendu en javascript</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2009-2010</li>
            <li className='col-10'>BAC PRO technicien d'assistance en informatique cirften</li>
            <li className='col-2'>&raquo;2009</li>
            <li className='col-10'>Préparation contrat pro technicien d'assistance en informatique Cirften</li>
            <li className='col-2'>&raquo;2005</li>
            <li className='col-10'>BEP vente action marchande école ST Catherine</li>
        </ul>
        <h2 className='mt-5'>Expériences professionnelles</h2>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2010</li>
            <li className='col-10'>Stage technicien d'assistance en informatique mairie de Toucoing</li>
        </ul>
        <ul className='mission mt-5'>
            <h5>Missions :</h5>
            <li>Remplacement des cartouches d'encre</li>
            <li>Ajout d'une carte réseau</li>
            <li>Changement du lecteur cd</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2010-2019</li>
            <li className='col-10'>Agent d'entretien Azurial, GSF, Selio</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2010</li>
            <li className='col-10'>Stage technicien d'assistance en informatique MEL(CUDL)</li>
        </ul>
        <ul className='mission mt-5'>
            <h5>Missions :</h5>
            <li>&#8227;Configuration d'adresse ip suit a une migration</li>
            <li>&#8227;Changement d'une carte graphique</li>
            <li>&#8227;Configuration du compte utilisateur</li>
            <li>&#8227;Paramétrage du logiciel au demarrage de windows</li>
        </ul>
        <ul className='row mt-5'>
            <li className='col-2'>&raquo;2006-2008</li>
            <li className='col-10'>Agent d'entretien Amazone service, Iss, Solutis</li>
            <li className='col-2'>&raquo;2005</li>
            <li className='col-10'>Stage télévendeur création de nouveau client Thiriet</li>
            <li className='col-2'>&raquo;2002-2003</li>
            <li className='col-10'>Hôte de caisse Carrefour Euralille</li>
        </ul>
        <h2>Loisirs</h2>
        <ul className='mt-5'>
            <li>Informatique</li>
            <li>Jeu video</li>
        </ul>
        
        
        </div>
    )
}export default Curriculum