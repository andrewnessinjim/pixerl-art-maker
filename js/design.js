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

    let modalContainer = $('#modal-container');
    $('#info_icon').click(function(){
       displayModal();
    });

    $('#help_icon').click(function(){
        displayModal();
    });

    $('.modal-close-button').click(function() {
        hideModal();
    });

    //Close the modal if the user click anywhere outside the modal
    modalContainer.click(function() {
        hideModal();
    })

    //Fade in while displaying
    function displayModal(){
        modalContainer.css("opacity", 0);
        modalContainer.css("display","block");
        modalContainer.animate({
            opacity : 1
        }, 400);
    }

    //Fade out while hiding
    function hideModal(){
        modalContainer.css("opacity", 1);
        modalContainer.animate({
            opacity : 0
        }, 
        400,
        function() {
            modalContainer.css("display","none");
        });
    }
})