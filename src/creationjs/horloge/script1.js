//appeler l'heure local
clock();

//fonction pour affiger l'heure
function clock(){
    //date
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);//recupere l'heure actuelle
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //cacul les degres pour faire tourner les aiguilles
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    /* console.log(hours);
    console.log(minutes); */
    

    //afficher
    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}
//interval faire tourner l'aiguille des secondes
setInterval(clock, 1000);