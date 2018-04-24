const headerColors = ["red", "yellow", "green", "blue", "violet", "pink"];
const MOUSE_BUTTON_LEFT = 1;
const MOUSE_BUTTON_MIDDLE = 2;
const MOUSE_BUTTON_RIGHT = 3;
const DEFAULT_GRID_SIDE = 10;

/**
 * @description Entry point for javascript code. This function is executed after the DOM loads.
 */
$(function() {
    generateHeader();
    setupFormValidator();
    setupModal();
    attachGridButtonListener();
});

function colorCell(cell, event) {
    if(event.which === MOUSE_BUTTON_LEFT) {
        cell.css("background-color", $('#input-fg-color').val());
        animateCell();
    } else if (event.which === MOUSE_BUTTON_RIGHT) {
        cell.css("background-color", $('#input-bg-color').val());
        animateCell();
    }
    function animateCell() {
        cell.css("opacity", 0).animate({opacity : 1},200);
    }
}

function attachGridButtonListener() {
    $('#btn-generate-grid').click(function () {
        const nRows = $('#input-grid-height').val();
        const nColumns = $('#input-grid-width').val();

        //Validate Inputs
        if (!nColumns || !nRows) {
            Modal.displayModal("<p>Please enter values from 1 to 100 only</p>", true);
            return;
        }

        //Create and attach the table to the DOM
        const table = getHTMLTable(nRows, nColumns);
        $('.canvas-table-container').empty().append(table);

        $('.canvas-cell').css({
            //All cells will initially have the selected background color
            backgroundColor: $('#input-bg-color').val(),
            borderColor: $('#input-border-color').val()
        }).mouseenter(function (event) {
            //Color cell as the mouse enters it
            colorCell($(this), event);
        }).mousedown(function (event) {
            //Color the first cell too, on which the user clicks before dragging
            event.preventDefault();
            colorCell($(this), event);
        }).contextmenu(function (event) {
            //Ignore right click on canvas cells because its used for background coloring
            event.preventDefault();
        });;

        //Animates the table to zoom in
        $('.canvas-table').addClass('animate');
    });

    /**
     * @description Creates a string representation of an HTML table
     * @param {number} nRows - Number of rows
     * @param {number} nColumns - Number or columns
     * @returns {string} HTML table
     */
    function getHTMLTable(nRows, nColumns) {
        let table = "";
        for (let rowNum = 0; rowNum < nRows; rowNum++) {
            const row = [];
            for (let colNum = 0; colNum <= nColumns; colNum++) {
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
        return table;
    }
}

/**
 * @description Attaches click listeners for info, help and modal close buttons
 */
function setupModal() {
    $('#info_icon').click(function () {
        Modal.showInfo();
    });

    $('#help_icon').click(function(){
        Modal.showHelp();
    });

    $('.modal-close-button').click(function() {
        Modal.hideModal();
    });

    //Close the modal if the user clicks anywhere outside the modal
    $('#modal-container').click(function(event) {
        if(event.target.id === 'modal-container') {
            Modal.hideModal();
        }
    });
}

/**
 * @description Attaches a listener which is called when the form inputs lose focus. The listener defaults
 * the values if left empty.
 */
function setupFormValidator() {
    $('.grid-input-container input[type="number"]').focusout(function () {
        if (!$(this).val()) {
            $(this).val(DEFAULT_GRID_SIDE);
        }
    });
}

/**
 * @description Generates "PIXEL ART MAKER" header of the page
 */
function generateHeader() {
    //Create the banner and fade it in. The #banner element's display property must be set to "none" for this function to work
    $('#banner').append(new MatrixString("PIXEL ART MAKER").getHTMLString()).fadeIn();

    //Fade out the current color, and fade in a new random color when the mouse is hovered over any colored cell
    $('.banner-matrix-cell-on').mouseenter(function (event) {
        $(this).fadeTo(600, 0, function() {
            $(this)
            .css("background-color", headerColors[Math.floor(Math.random() * 5)])
            .fadeTo(400, 1);
        })
    });
}
