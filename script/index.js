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

    //Galary
    $('.carousel').carousel({
        interval: 3500
    })

});

//Timer Logic

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jan 22, 2020 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)

