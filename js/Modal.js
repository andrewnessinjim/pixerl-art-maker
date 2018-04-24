/**
 * @description Modal object exposes two functions to show Help and Info Modals respectively.
 */
var Modal = (function() {

    function displayModal(modalMessage, isError){
        let modalContainer = $('#modal-container');
        modalContainer.css({
            opacity: 0,
            display: "block"
        })

        let modelData = modalContainer.find('.modal-data').first();
        modelData.empty();
        if(isError){
            modalMessage = '<img src="images/bug.png">' + modalMessage;
            modelData.css("color", "red");
        } else {
            modelData.css("color", "black");
        }
        modelData.append(modalMessage);
        modalContainer.animate({
            opacity: 1
        }, 400);
    }

    function hideModal(){
        let modalContainer = $('#modal-container');
        modalContainer.css("opacity", 1);
        modalContainer.animate({
            opacity: 0
        },
        400,
        function() {
            modalContainer.css("display","none");
        });
    }

    function showHelp(){
        displayModal(`
        <p class="form-header">Instructions</p>
            <ul>
                <li>You can hover over the heading "Pixel Art Maker" for a little fun :)</li>
                <li>Choose the grid size and click on New Grid button. The grid will be created with appropriate number of cells</li>
                <li>Select the foreground color you wish. Left clicking on a cell and dragging the cursor will fill the cells with the foreground color.</li>
                <li>Select the background color you wish. Right clicking on a cell and dragging the cursor will fill the cells with the background color.</li>
                <li>The border color can only be set before generating the grid</li>
            </ul>
        `);
    }

    function showInfo() {
        displayModal(`
        <p class="form-header">Attributions</p>
        <ul>
            <li>
                <a href="https://www.freepik.com/free-photos-vectors/background">
                Background image   created by Aopsan - Freepik.com</a>
            </li>

             <li>
                <div>
                    Icons made by <a href="https://www.flaticon.com/authors/prosymbols"
                    title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/"
                    title="Flaticon">www.flaticon.com</a> is licensed by <a
                    href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                    target="_blank">CC 3.0 BY</a>
                </div>
            </li>

             <li>
                <div>
                    Icons made by <a href="https://www.flaticon.com/authors/smalllikeart"
                    title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/"
                    title="Flaticon">www.flaticon.com</a> is licensed by
                    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                </div>
            </li>
         </ul>
         <p class="form-header">References</p>
         <ul>
            <li><a href="https://www.w3schools.com/howto/howto_css_modals.asp">W3Schools Modal</a></li>

            <li><a href="http://rishavagarwal.me/Pixel-Art-Maker/">Rishav Agarwal's Pixel Art Maker</a></li>
         </ul>
        `);
    }

    return {
        showHelp: showHelp,
        showInfo: showInfo,
        hideModal: hideModal
    }
})();