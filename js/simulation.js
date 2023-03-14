$(document).ready(function(){
    //PULL UP INTRO ITEMS ON LAUNCH
    $("#title").animate({"top":"0", "opacity":"100%"}, 2000, "easeInOutExpo");
    $("#arrow-back").delay(800).animate({"opacity":"100%"}, 1600, "easeInOutExpo");

    //BEGIN TRIAL ON CLICK
    $("#begin-trial").click(function(){
        $(".bg").animate({"z-index":"0", "opacity":"0"}, 1000, "easeInOutExpo");
        $(".vignette").delay(500).animate({"opacity":"100%"}, 1000, "easeInOutExpo");
        $(".grid-effect").delay(800).animate({"opacity":"25%"}, 1000, "easeInOutExpo");
        var timer;
        function timer(){
            timer = setInterval(myTimer, 1000);
            var c = 3600 * 6;

        function myTimer(){
            $("#timer").animate({"opacity":"85%"}, 1000, "easeInOutExpo");
            $("#sign").delay(300).animate({"opacity":"50%"}, 1000, "easeInOutExpo");
            $("#subway").delay(400).animate({"opacity":"45%"}, 1000, "easeInOutExpo");
            --c;
            var secs = c % 60;
            var secsMins = (c - secs) / 60;
            var mins = secsMins % 60;
            var hrs = (secsMins - mins) / 60;
            console.clear;
            console.log(hrs + " : " + mins + " : " + secs);
            document.getElementById("timer").innerHTML = hrs + " : " + mins + " : " + secs;
            if (c < 0) {
                document.getElementById("timer").innerHTML = "DAILY LIMIT OVER";
            }
            }
        }
        timer();
    });

    //BACK ON CLICK
    $("#back").click(function(){
        $("#interactive-locations").append(`<div id="sign" class="interact"></div>`);
        $("#interactive-locations").append(`<div id="subway" class="interact"></div>`);
        $("#source-vid").attr('src', 'videos/1.mp4');

        $("#sign").click(function(){
            document.getElementById("sign").remove();
            document.getElementById("subway").remove();
            $("#source-vid").attr('src', 'videos/2.mp4');
            $("#back").animate({"opacity":"85%"}, 1000, "easeInOutExpo");
        });

        $("#subway").click(function(){
            document.getElementById("sign").remove();
            document.getElementById("subway").remove();
            $("#source-vid").attr('src', 'videos/3.mp4');
            $("#back").animate({"opacity":"85%"}, 1000, "easeInOutExpo");
        });
    });

    //SIGN ZOOM ON CLICK
    $("#sign").click(function(){
        document.getElementById("sign").remove();
        document.getElementById("subway").remove();
        $("#source-vid").attr('src', 'videos/2.mp4');
        $("#back").animate({"opacity":"85%"}, 1000, "easeInOutExpo");
    });

    //SUBWAY ZOOM ON CLICK
    $("#subway").click(function(){
        document.getElementById("sign").remove();
        document.getElementById("subway").remove();
        $("#source-vid").attr('src', 'videos/3.mp4');
        $("#back").animate({"opacity":"85%"}, 1000, "easeInOutExpo");
    });
});