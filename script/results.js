$(document).ready(function() {
    $('#interResultButton').on('click', function() {
        $('.wrapperIntra').css('display', 'none');
        if($('.wrapper').css('display')=='none') {
            $('.wrapper').css('display', 'block');
        }
        else {
            $('.wrapper').css('display', 'none');
        }
    })
    $('#intraResultButton').on('click', function() {
        $('.wrapper').css('display', 'none');
        if($('.wrapperIntra').css('display')=='none') {
            $('.wrapperIntra').css('display', 'block');
        }
        else {
            $('.wrapperIntra').css('display', 'none');
        }
    })
})