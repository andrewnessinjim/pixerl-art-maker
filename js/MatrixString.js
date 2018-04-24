/**
* @description Represents a set of HTML tables, where each table corresponds to a pixelated character. Supported characters are A,B,E,I,K,L,M,P,R,T,X,: and a space. If unsupported characters are provided, they will be replaced with a space.
* @constructor
* @param {string} string - The string which will be converted to pixelated HTML tables.
*/
const MatrixString = (function(){
    function MatrixCharacter(character) {
        this.character=character;
        //The pattern of 1s in the matrix is the pattern of the corresponding character in the map.
        this.characterMap = {
            A : [[1,1,1],
                 [1,0,1],
                 [1,1,1],
                 [1,0,1],
                 [1,0,1]],

            B : [[1,1,0],
                 [1,0,1],
                 [1,1,0],
                 [1,0,1],
                 [1,1,0]],

            E : [[1,1,1],
                 [1,0,0],
                 [1,1,1],
                 [1,0,0],
                 [1,1,1]],

            I : [[1,1,1],
                 [0,1,0],
                 [0,1,0],
                 [0,1,0],
                 [1,1,1]],

            K : [[1,0,1],
                 [1,1,0],
                 [1,0,0],
                 [1,1,0],
                 [1,0,1]],

            L : [[1,0,0],
                 [1,0,0],
                 [1,0,0],
                 [1,0,0],
                 [1,1,1]],

            M : [[1,1,0,1,1],
                 [1,0,1,0,1],
                 [1,0,0,0,1],
                 [1,0,0,0,1],
                 [1,0,0,0,1]],

            P : [[1,1,1],
                 [1,0,1],
                 [1,1,1],
                 [1,0,0],
                 [1,0,0]],

            R : [[1,1,1],
                 [1,0,1],
                 [1,1,0],
                 [1,0,1],
                 [1,0,1]],

            T : [[1,1,1],
                 [0,1,0],
                 [0,1,0],
                 [0,1,0],
                 [0,1,0]],

            X : [[1,0,0,0,1],
                 [0,1,0,1,0],
                 [0,0,1,0,0],
                 [0,1,0,1,0],
                 [1,0,0,0,1]],

            ":" : [[0],
                   [1],
                   [0],
                   [1],
                   [0]],

            " " : [[0],
                   [0],
                   [0],
                   [0],
                   [0]]
        };
        this.getHTMLString = function() {
            let matrix="";
            const characterMatrix = this.characterMap[this.character];
            if(!characterMatrix) {
                console.log(`Character '${this.character}' not supported, replacing with a space`);
                characterMatrix = this.characterMap[" "];
            }
            for(let row=0;row<characterMatrix.length;row++) {
                const rowCells = [];
                for(let col=0;col<characterMatrix[row].length;col++) {
                    //Each cell have either banner-matrix-cell-on or banner-matrix-cell-default as it's class. CSS is used to color the cells based on these classes.
                    rowCells.push(
                        ['<td class="',
                        characterMatrix[row][col] === 1 ? "banner-matrix-cell-on" : "banner-matrix-cell-default",
                        '"></td>'].join(""));
                }
                matrix = [matrix,
                        "<tr>",
                        rowCells.join(""),
                        "</tr>"].join("");
            }
            matrix = ['<table class="banner-character-table">',
                        matrix,
                        "</table>"].join("");
            return matrix;
        }
    }

    return function (string) {
        this.string = string;
        this.getHTMLString = function(){
            let HTMLString = "";
            //Loop and concatenate the HTML representation of each character
            for(letter of this.string) {
                HTMLString += new MatrixCharacter(letter).getHTMLString();
            }
            return HTMLString;
        }
    }
})();