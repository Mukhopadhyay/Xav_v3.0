function Scroll() {
    let pos = window.pageYOffset;

    if (pos > 100) {

        $('.btn-up').css('display', 'inherit');

    }
    else {

        $('.btn-up').css('display', 'none');

    }

}

window.addEventListener('scroll', Scroll);