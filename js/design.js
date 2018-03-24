const headerColors = ["red","yellow","green","blue","violet","pink"];

$(function() {
    $('#banner').append(new MatrixString("PIXEL ART MAKER").getHTMLString());

    $('.banner-matrix-cell-on').mouseenter(function(event){
        $(event.target).animate({
            opacity : 0
        },
        500,
        function() {
            $(event.target).css("background-color",headerColors[Math.floor(Math.random()*5)]);
            $(event.target).animate({
                opacity : 1
            }, 500)
        });
    })
})