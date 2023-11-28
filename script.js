// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Simulez un processus d'aspiration de données
    simulateDataAspiration();
});

function simulateDataAspiration() {
    var progressBar = document.getElementById("progress-bar");
    var progress = 0;

    // Utilisez setInterval pour mettre à jour la barre de progression
    var interval;

    function updateProgressBar() {
        // Mettez à jour la barre de progression jusqu'à 100%
        if (progress < 100) {
            progress += 5; // Augmentez selon vos besoins
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(interval);

            // Redirigez l'utilisateur vers la page de données après l'aspiration complète
            redirectToDataPage();
        }
    }

    interval = setInterval(updateProgressBar, 200); // Réduisez l'intervalle selon vos besoins pour accélérer la progression
}

function pauseProgressBar() {
    // Mettez en pause la barre de progression pendant 5 secondes
    setTimeout(function () {
        // Reprenez la mise à jour de la barre de progression après la pause
        simulateDataAspiration();
    }, 5000); // Pause de 5 secondes (5000 millisecondes)
}

function redirectToDataPage() {
    // Remplacez "page-des-donnees.html" par le nom de votre page de données
    window.location.href = "page-des-donnees.html";
}
