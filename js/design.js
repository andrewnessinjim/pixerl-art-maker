const headerColors = ["red","yellow","green","blue","violet","pink"];
const MOUSE_BUTTON_LEFT = 1;
const MOUSE_BUTTON_MIDDLE = 2;
const MOUSE_BUTTON_RIGHT = 3;
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


    $('.grid-input-container input[type="number"]').focusout(function() {
        if(!$(this).val()) {
            $(this).val(10);
        }
    });

    let modalContainer = $('#modal-container');
    $('#info_icon').click(function(){
       displayModal(`
       <p class="form-header">Attributions</p>
       <ul>
            <li><a href="https://www.freepik.com/free-photos-vectors/background">Background image   created by Aopsan - Freepik.com</a></li>

            <li><div>Icons made by <a href="https://www.flaticon.com/authors/prosymbols"        title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/"      title="Flaticon">www.flaticon.com</a> is licensed by <a      href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"   target="_blank">CC 3.0 BY</a></div></li>
    
    
            <li><div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></li>
        </ul>
       `);
    });

    $('#help_icon').click(function(){
        displayModal("Help icon was clicked");
    });

    $('.modal-close-button').click(function() {
        hideModal();
    });

    //Close the modal if the user clicks anywhere outside the modal
    modalContainer.click(function() {
        hideModal();
    })

    //Fade in while displaying
    function displayModal(modalMessage, isError){
        modalContainer.css("opacity", 0);
        modalContainer.css("display","block");
        let modelData = modalContainer.find('.modal-data').first();
        modelData.empty();
        if(isError){
            modalMessage = '<img src="images/bug.png">' + modalMessage;
            modelData.css("color" , "red");
        }
        modelData.append(modalMessage);
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

    $('#btn-generate-grid').click(function() {
        let nColumns = $('#input-grid-height').val();
        let nRows = $('#input-grid-width').val();

        if(!nColumns || !nRows) {
            displayModal("<p>Please enter values from 1 to 100 only</p>", true);
            return;
        } 
        
        let table = "";

        for(let rowNum = 0 ; rowNum < nRows; rowNum++) {
            let row = [];
            for(let colNum = 0 ; colNum <= nColumns; colNum++) {
                row.push('<td class="canvas-cell"></td>');
            }
            table = [
                table,
                '<tr>',
                row.join(""),
                '</tr>'
            ].join("");
        }
        table = [
            "<table class = 'canvas-table'>",
            table,
            "</table>"
        ].join("");
        $('.canvas-table-container').empty();
        $('.canvas-table-container').append(table);
        $('.canvas-cell').css("background-color", $('#input-bg-color').val());
        $('.canvas-table').addClass('animate');
        $('.canvas-cell').css("border-color", $('#input-border-color').val());

        $('.canvas-cell').mouseenter(function(event){
            colorCell($(this), event);            
        });

        $('.canvas-cell').mousedown(function(event){
            event.preventDefault();
            colorCell($(this), event);            
        });

        $('.canvas-cell').contextmenu(function(event) {
            //Ignore right click on canvas cells
            event.preventDefault();
        });
    });

    function colorCell(cell, event) {
        if(event.which === MOUSE_BUTTON_LEFT) {
            cell.css("background-color", $('#input-fg-color').val());
        } else if (event.which === MOUSE_BUTTON_RIGHT) {
            cell.css("background-color", $('#input-bg-color').val());
        }
    }
})