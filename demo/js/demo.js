$(function () {
    "use strict";
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var position = $(href).offset().top - 60;
        $("html, body").animate({scrollTop: position}, speed, "swing");
    });

    var htmls = ["add", "diff", "format", "get", "is", "set", "utility"];

    for (var i = 0, len = htmls.length; i < len; i++) {
        $("#docs-" + htmls[i]).load("demo/" + htmls[i] + ".html #content", function () {
            $("textarea.code").exCodePrettify({
                showRunButton: true,
                showResetButton: true,
                showDemo: true,
                editCode: true
            });
        });
    }
});