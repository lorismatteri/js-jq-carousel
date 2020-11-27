//Generare un carosello di immagini

//1. Prendo le icone delle frecce con jQuery e le metto in una variabile

var avanti = $('.next i');

var indietro = $('.prev i');

//Generiamo un carosello in avanti spostando la classe active da una img all'altra

avanti.click(function() {
    var imgVisualizzata = $('img.active');

    imgVisualizzata.removeClass('active');

    imgVisualizzata.next().addClass('active');

    if(imgVisualizzata.hasClass('last')) {
        $('img.first').addClass('active');
    }
    
});

//Ora facciamo in senso opposto

indietro.click(function() {
    var imgVisualizzata = $('img.active');

    imgVisualizzata.removeClass('active');

    imgVisualizzata.prev().addClass('active');

    if(imgVisualizzata.hasClass('first')) {
        $('img.last').addClass('active');
    }
    
});
