var avanti = $('.next i');

var indietro = $('.prev i');

avanti.click(function() {
    var imgVisualizzata = $('img.active');

    imgVisualizzata.removeClass('active');

    imgVisualizzata.next().addClass('active');

    if(imgVisualizzata.hasClass('last')) {
        $('img.first').addClass('active');
    }
    
});
