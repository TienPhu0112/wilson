$(function () {
    $("i.arrow-up").hide();
    $("i.arrow-down").show();

    $("li.nav-arrow").mouseover(function (e) {
        $(this).find("i.arrow-down").hide();
        $(this).find("i.arrow-up").show();
    })

    $("li.nav-arrow").mouseleave(function (e) {
        $(this).find("i.arrow-down").show();
        $(this).find("i.arrow-up").hide();
    })
})
