$(document).ready(function() {
    $(".small").click(function() {
        $("#one").toggle();
        $("#sma").toggle();
    });

    $(".medi").click(function() {
        $("#two").toggle();
        $("#med").toggle();
    });

    $(".larg").click(function() {
        $("#three").toggle();
        $("#lar").toggle();
    });
})