import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function Competences(image, langage, progression){
  this.image = image;
  this.langage = langage;
  this.progression = progression;
}
var competences = [];

const html5 = new Competences("img/html5.jpg", `HTML5 CSS3 JS`,"img/progre1.jpg"  );
const bootstrap = new Competences("img/boot.jpg", `BOOTSTRAP`,"img/progre.jpg"  );
const angular = new Competences("img/angular.png", `ANGULAR`,"img/progre.jpg"  );
const reactjs = new Competences("img/reactjs.png", `REACTJS`,"img/progre.jpg"  );

competences.push(html5, reactjs, bootstrap, angular);

window.onload = function(){
  let listOfCompetences ='';
  competences.forEach(prod =>
      listOfCompetences += `
      <tr class ="text-center">
      <td><img src=${prod.image} class="img-fuild img-thumbnail w-50"></td>
      <td class="w-25 align-middle">${prod.langage}</td>
      <td><img src=${prod.progression} class="img-fuild img-thumbnail w-50"></td>
      `
  )
  document.getElementById(`listcompetences`).innerHTML = listOfCompetences;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
