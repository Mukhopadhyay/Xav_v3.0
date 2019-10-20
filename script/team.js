$(document).ready(function () {
    let boolNav = false;
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        if (boolNav) {
            //If opened

            console.log('closed');
            boolNav = false;
            $(".navItems").animate({ opacity: "0" }, 500);
            $('.navItems').css('visibility', 'hidden');

        }
        else {
            //if closed
            console.log('opened!');
            boolNav = true;
            $('.navItems').css('visibility', 'visible');
            $(".navItems").animate({ opacity: "1" });
        }
    });

})