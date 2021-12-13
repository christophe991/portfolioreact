import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <h2 class="margin-top">Qui suis-je?</h2>
        <p>Je m’appelle christophe j’ai 40 ans, 
          je suis en reconversion professionnel suite a un accident de trajet, 
          durant mon ancienne expérience 
          j’ai travaillé en équipe sur plusieurs sites de nettoyage diffèrent.</p>
        <h2>Qualités:</h2>
        <ul>
          <il>	Diplomatie : je parle calmement et fait preuve de recul sur la situation</il>
        </ul>
        <ul>
          <il>	Attentif : si je dois faire quelque chose qui est demander c’est fait dans tout ou le lendemain selon la situation </il>
        </ul>
        <ul>
          <il>	Consciencieux : durant mon travail les clients ma souvent dit que je suis consciencieux </il>
        </ul>
        
        <ul>
          <il>	Rapide et efficace : exemple je suis capable de nettoyer une salle du McDonald en 2H30 aux lieux de 3H </il>
        </ul>
        <h2>Mon porjet</h2>
        <p>Etant maintenant je souhaite mettre mes qualités au sein de l’entreprise qui 
          m’accepterai comme junior et me formerai au développement pour un stage 
          d’un mois du 11 janvier au O7 février 2022 en plus de mon auto formation, 
          afin de continuer dans ce domaine. </p>
        <p>Ensuite après quelque de pratique dans l’entreprise 
          je travaillerai en parallèle sur la création d’un jeu sur navigateur.</p>
        
    </div>
  );
}

export default App;