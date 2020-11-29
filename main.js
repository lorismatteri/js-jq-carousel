//Generare un carosello di immagini

$(function() {
    //1. Prendo le icone delle frecce con jQuery e le metto in una variabile
    var avanti = $('.next i');
    var indietro = $('.prev i');

    //2. Creo una funzione per scorrere avanti le immagini e i cerchi blu spostando la classe active da una img/icon all'altra
    function goNext(image, cerchio) {
        var image = $('img.active');
        var cerchio = $('i.active');

        image.removeClass('active').next().addClass('active');
        cerchio.removeClass('active').next().addClass('active');
    
        if(image.hasClass('last')) {
            $('img.first').addClass('active');
        }
        if(cerchio.hasClass('last')) {
            $('i.first').addClass('active');
        }
    }
    
    //3. Ne creo un'altra per il  senso opposto
    function goPrev(image, cerchio,) {
        var image = $('img.active');
        var cerchio = $('i.active');
        
        image.removeClass('active').prev().addClass('active');
        cerchio.removeClass('active').prev().addClass('active');

        if(image.hasClass('first')) {
            $('img.last').addClass('active');
        }
        if(cerchio.hasClass('first')) {
            $('i.last').addClass('active');
        }
    }

    //Generiamo un carosello in avanti 
    avanti.click(function() {
        goNext();
    });
    //e indietro
    indietro.click(function() {
        goPrev();s
    });
    
    //Implementiamo l'uso delle frecce della tastiera
    $(document).keydown(function(x) {
        if (x.which == 37) {
            goPrev();
        } else if (x.which == 39) {
            goNext();
        }
    });
})