const headerColors = ["red","yellow","green","blue","violet","pink"];

$(function() {
    $('#banner').css("opacity","0");
    $('#banner').append(new MatrixString("PIXEL ART MAKER").getHTMLString());
    $('#banner').animate({
        opacity : 1
    }, 200);

    $('.banner-matrix-cell-on').mouseenter(function(event){
        $(event.target).animate({
            opacity : 0
        },
        1000,
        function() {
            $(event.target).css("background-color",headerColors[Math.floor(Math.random()*5)]);
            $(event.target).animate({
                opacity : 1
            }, 500)
        });
    });

    $('#info_icon').click(function(){
        $('#instructions').animate({
            marginLeft : "-5px",
            opacity : 1
        },
        1000);
      
        $('#info_icon').animate({
            opacity : 0
        },
        500,
        function() {
            $('#info_icon').css("display","none");
            $('#close_icon').css("display", "inline");
            $('#close_icon').animate({opacity:1})
        })
        
    });

    $('#close_icon').click(function(){
        $('#instructions').animate({
            marginLeft : "-300px",
            opacity : 0
        },
        1000);
        $('#close_icon').animate({
            opacity : 0
        },
        500,
        function() {
            $('#close_icon').css("display","none");
            $('#info_icon').css("display", "inline");
            $('#info_icon').animate({opacity:1})
        });
    });
})