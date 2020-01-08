$(function () {

    $("#loading").height($(window).height());

    $(window).resize(function () {
        $("#loading").height($(window).height());

    });

    $("#loading").fadeOut(2000);

    // ------

    $("li.Hidden").mouseenter(function () {
        $("ul.hiddenList").slideDown("slow");
    });

    $("li.Hidden").mouseleave(function () {
        $("ul.hiddenList").slideUp("slow");
    });

    // ------

    $("ul.navBox>li").mouseenter(function () {
        $(this).css({
            "background-color": "#afafaf",
            "transition": "1s"
        });

        $(this).children("a").css({
            "color": "#4b4b4b"
        });
    });

    $("ul.navBox>li").mouseleave(function () {
        $(this).css({
            "color": "#afafaf",
            "background-color": "#6b6b6b"
        });

        $(this).children("a").css({
            "color": "#afafaf"
        });
    });

    // ------

    $(window).scroll(function () {

        // console.log($(window).scrollTop());
        // console.log($(".navBox").offset().top);

        if ($(window).scrollTop() > 350) {

            $(".container").addClass("navBox-fixed")

        }

        // if ($(window).scrollTop() > $(".container").offset().top) {
        //     $(".container").removeClass("navBox-fixed")
        // }

        else {

            $(".container").removeClass("navBox-fixed")

        }

    });

    //------ 

    $(".dismiss").click(function () {
        $("div.topic-welcome").slideUp("slow");
    });

    //------

});