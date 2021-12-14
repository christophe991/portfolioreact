import '../styles/Diplome.css'

function Diplome(){
    return(
        <div>
            <h2 className='mt-5'>Diplôme et certification</h2>
        <div>
            <p className="mt-3">
                Diplome technicien d'assistance en informatique obtenue en fin de formation au cirften, 
                durant cette formation j'ai validée mes competences autodidacte avec ce diplome,
                installation de windows, configuration d'adresse ip, depannage a distance avec un petit plus le HTML et CSS.
            </p>
                <img className="bacpro" src="img/bacpro.png" alt="bacpro"/>
            
        </div>
        
        <div>
            <p className="mt-3">
                Certification obtenue en fin de formation avec webforce3 suite a un projet de groupe,
                nous avons créer un centre commercial virtuel avec des utilisateur qui engregistre leurs
                magasin et les produit, puis des utilisateurs client pour trouver le produit qu'il cherche
                et un administrateur qui verifie le contenue avant de mettre en ligne.
            </p>
                <img className="dev" src="img/dev.png" alt="developpeur"/>
        </div>
        <div>
                <img className="int" src="img/integrateur.png" alt="integrateur"/>
        </div>
        </div>
    )

}export default Diplome