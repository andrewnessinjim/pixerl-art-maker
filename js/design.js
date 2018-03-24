const headerColors = ["red","yellow","green","blue","violet","pink"];

$(function() {
    $('#banner').append(new MatrixString("PIXEL ART MAKER").getHTMLString());

    $('.banner-matrix-cell-on').mouseenter(function(event){
        $(event.target).css("background-color",headerColors[Math.floor(Math.random()*5)]);
    })
})