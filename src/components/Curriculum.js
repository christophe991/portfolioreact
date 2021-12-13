import '../styles/Curriculum.css'

function Curriculum(){
    return(
        <div>
            <h2>Competences en développement</h2>
            <p>
            Voici les langage de programation apris en formation avec un affichage
            sous forme de tableau en javascript.
        </p>
        <table>
            <thead class="bg-primary">
                <tr class="text-center color-secondary">
                    <th>Image</th>
                    <th>Langage</th>
                    <th>Progression</th>
                </tr>
            </thead>
            
            <tbody id="listcompetences" class="h-50"></tbody>
        </table>
        <h2 class="margin-top">Formations</h2>
        <ul class="row mt-5">
            <li class="col-2">&raquo;2021-2022</li>
            <li class="col-10">M2Iformation</li>
        </ul>
        <ul class="mission">
            <h5>Missions:</h5>
            <li>&#8227;Création projet file rouge application avec reactjs</li>
        </ul>
       
        <ul class="row mt-5 "> 
            <li class="col-2">&raquo;2020-2021</li>
            <li class="col-10">Développeur web et web mobile chez Webforce3</li>
        </ul>
       
        <ul class="mission">
            <h5>Missions:</h5>
            <li>&#8227;Création du portfolio</li>
            <li>&#8227;Mise en situation en evaluation</li>
            <li>&#8227;Page personnel pendant le temps libre</li>
            <li>&#8227;Projet de groupe en fin de formation, suivre le lien dipôme et certification</li>
        </ul>
        
        <ul class="row mt-5">       
            <li class="col-2">&raquo;2020</li>
            <li class="col-10">Découverte des metiers numerique Afpa de Roubaix</li>
            <ul class="mission">
                <h5>Missions:</h5>
                <li>&#8227;Création jeu du pendu en javascript</li>
                
            </ul>
        </ul>
        
        <ul class="row mt-5">   
            <li class="col-2">&raquo;2009-2010</li>
            <li class="col-10">Technicien d'assistance en informatique Cirften</li>
            <li class="col-2">&raquo;2009</li>
            <li class="col-10">Préparation contrat pro technicien d'assistance en informatique Cirften</li>
            <li class="col-2">&raquo;2005</li>
            <li class="col-10">BEP Vente action marchande ecole ST Catherine</li>
        </ul>
        
        <h2 class="margin-top">Expériences professionnelles</h2>
        <ul class="row">
            <li class="col-2">&raquo;2010</li>
            <li class="col-10">Stage technicien d'assistance en informatique mairie de Tourcoing</li>
        </ul>
        <ul class="mission">
            <h5>Missions:</h5>
            <li>&#8227;Remplacement des cartouches d'encre</li>
            <li>&#8227;Ajout d'une carte réseau</li>
            <li>&#8227;Intervention sur les ordinateurs en ecole</li>
            <li>&#8227;Changement du lecteur CD</li>
        </ul>
        <ul class="row mt-5">
            <li class="col-2">&raquo; 2010-2019</li> 
            <li class="col-10">Agent d'entretien Azurial, GSF, Selio nettoyage des bureaux, fin de chantier</li>
        </ul>
        
        <ul class="row">
            <li class="col-2">&raquo;2010</li>
            <li class="col-10">Stage technicien d'assistance en informatique MEL (CUDL)</li>
        </ul>
        <ul class="mission">
            <h5>Missions:</h5>
            <li>&#8227;Configuration d'adresse ip suite a une migration de classe A a classe C</li>
            <li>&#8227;Changement d'une carte graphique</li>
            <li>&#8227;Probleme de mot de passe, configuration du compte utilisateur</li>
            <li>&#8227;Paramétrage du logiciel au demarrage de windows</li>
        
        </ul>
        
        <ul class="row">
            <li class="col-2">&raquo; 2006-2008 </li>
            <li class="col-10">Agent d'entretien Amazone service, Solutis, ISS nettoyage des bureaux, Mcdonald, ecole</li>
            <li class="col-2">&raquo; 2005</li> 
            <li class="col-10">Stage vendeur création de nouveaux clients Thiret</li>
            <li class="col-2">&raquo; 2002-2003</li> 
            <li class="col-10">Hôte de caisse Carrefour euralille</li>
        </ul>
        
        <h5>Loisirs</h5>
        <ul>
            <li>Informatique:</li> 
            <li>Jeux video:</li>     
                
        </ul>
        </div>
    )
}export default Curriculum