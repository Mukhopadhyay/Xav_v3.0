$(document).ready(function() {
    $('#interResultButton').on('click', function() {
        if($('.wrapper').css('display')=='none') {
            $('.wrapper').css('display', 'block');
        }
        else {
            $('.wrapper').css('display', 'none');
        }
    })
})