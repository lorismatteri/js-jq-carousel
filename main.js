//Generare un carosello di immagini
$(function() {
    //1. Prendo le icone delle frecce con jQuery e le metto in una variabile
    var avanti = $('.next i');
    var indietro = $('.prev i');

    //Generiamo un carosello in avanti spostando la classe active da una img all'altra
    avanti.click(function() {
        var imgVisualizzata = $('img.active');
        imgVisualizzata.removeClass('active').next().addClass('active');

        if(imgVisualizzata.hasClass('last')) {
            $('img.first').addClass('active');
        }
        
        //Rendiamo attivi i cerchi
        var cerchioBlu = $('i.active');
        cerchioBlu.removeClass('active').next().addClass('active');

        if(cerchioBlu.hasClass('last')) {
            $('i.first').addClass('active');
        }
    });

    //Ora facciamo in senso opposto
    indietro.click(function() {
        var imgVisualizzata = $('img.active');
        imgVisualizzata.removeClass('active').prev().addClass('active');

        if(imgVisualizzata.hasClass('first')) {
            $('img.last').addClass('active');
        }

        //Rendiamo i cerchi attivi
        var cerchioBlu = $('i.active');
        cerchioBlu.removeClass('active').prev().addClass('active');

        if(cerchioBlu.hasClass('first')) {
            $('i.last').addClass('active');
        }
        
    });

    //Implementiamo l'uso delle frecce della tastiera
    $(document).keydown(function(x) {
        var imgVisualizzata = $('img.active');
        var cerchioBlu = $('i.active');
        if (x.which == 37) {
            imgVisualizzata.removeClass('active').prev().addClass('active');
            cerchioBlu.removeClass('active').prev().addClass('active');

            if(imgVisualizzata.hasClass('first')) {
                $('img.last').addClass('active');
            }
            if(cerchioBlu.hasClass('first')) {
                $('i.last').addClass('active');
            }

        } else if (x.which == 39) {
            imgVisualizzata.removeClass('active').next().addClass('active');
            cerchioBlu.removeClass('active').next().addClass('active');

            if(imgVisualizzata.hasClass('last')) {
                $('img.first').addClass('active');
            }
            if(cerchioBlu.hasClass('last')) {
                $('i.first').addClass('active');
            }

        }
    });
})
