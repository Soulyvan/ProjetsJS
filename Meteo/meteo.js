let ville;

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition( position => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + 
        position.coords.longitude + '&lat=' + position.coords.latitude
        + '&appid=ff1b2767aa8ab7406462a7318562b27b&units=metric';

        myMeteo(url);
    }, erreur, options);
}
else {
    erreur();
}

var options = {
    enableHighAccuracy: true // pour avoir une géolocalisation tres precise
}

function erreur() {
    ville = "Libreville";
    afficheMeteo(ville);
}

const btnChangerVille = document.querySelector('#changer');

btnChangerVille.addEventListener('click', () => {
    let ville = prompt("Entrer une ville");
    afficheMeteo(ville)
});

function myMeteo(myUrl) {
    $.get(myUrl, function(data, status){
        if (status == "success"){
            document.getElementById('ville').textContent = data.name;
            document.getElementById('temperature_label').textContent = data.main.temp;
        }
        else {
            alert("Un problème est intervenue, merci de réessayer plus tard");
        }
    });
}

function afficheMeteo(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
    ville + '&appid=ff1b2767aa8ab7406462a7318562b27b&units=metric';

    myMeteo(url);
}