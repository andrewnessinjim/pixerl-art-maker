function MatrixString(string) {
    this.string = string;
    this.getHTMLString = function(){
        let stringHTML = "";
        for(letter of this.string) {
            stringHTML += new MatrixCharacter(letter).getHTMLString();
        }
        return stringHTML;
    }
}

function MatrixCharacter(character) {
    this.character=character;
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
        let characterMatrix = this.characterMap[this.character];
        for(let row=0;row<characterMatrix.length;row++) {
            let rowCells = [];
            for(let col=0;col<characterMatrix[row].length;col++) {
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
        console.log(matrix);
        return matrix;
    }
}