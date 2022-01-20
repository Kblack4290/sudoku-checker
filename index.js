
// I want create functions for a column, row, box, and if those are true then another function to validate.

// All columns, rows, and squares must contain numbers 1-9 but must not repeat
//If all functions are true then the board is valid. Will need a board function
// isValid func if col, row, and sq are true then the board is true else board is false
// dealing with a total of 4 functions row, col, box, isValid

// dimension of the sudoku board 9 x 9 
const dimension = 9

// stores values 1-9 in array and sets them to false for later comparison
let uniqueArray = Array(dimension + 1).fill(false)

// the sudoku board to test logic
const board = [
    [7, 9, 2, 1, 5, 4, 3, 8, 6],
    [6, 4, 3, 8, 2, 7, 1, 5, 9],
    [8, 5, 1, 3, 9, 6, 7, 2, 4],
    [2, 6, 5, 9, 7, 3, 8, 4, 1],
    [4, 8, 9, 5, 6, 1, 2, 7, 3],
    [3, 1, 7, 4, 8, 2, 9, 6, 5],
    [1, 3, 6, 7, 4, 8, 5, 9, 2],
    [9, 7, 4, 2, 1, 5, 6, 3, 8],
    [5, 2, 8, 6, 3, 9, 4, 1, 7]
];

// this function tests to see if the current row does not contain duplicates
const rowValid = (board) => {

    // first for loop iterates through each row
    for (let i = 0; i < dimension; i++) {

        // initializes the values of the array setting to false
        uniqueArray = Array(dimension + 1).fill(false)

        // the nested array iterates through the column of the current row
        for (let j = 0; j < dimension; j++) {

            // conditional to determine if each array has values 1-9
            if (board[i][j] <= 0 || board[i][j] > 9) {
                return false
            }
            //conditional to check if there are no duplicate values in the current row
            // if there are no duplicates in the current row then the row is valid
            if (uniqueArray[board[i][j]]) {
                return false
            }
            uniqueArray[board[i][j]] = true;

            console.log("ROW: " + uniqueArray[board[i][j]]);
        }
    }
}

// this function tests to see if the current column does not contain duplicates
const colValid = (board) => {

    // first for loop iterates through each column 
    for (let i = 0; i < dimension; i++) {

        // initializes the values of the array setting to false
        uniqueArray = Array(dimension + 1).fill(false)

        // nested for loop iterates through the row of the current column 
        for (let j = 0; j < dimension; j++) {

            // conditional to determine if each array has values 1-9 
            if (board[i][j] <= 0 || board[i][j] > 9) {
                return false
            }
            //conditional to check if there are no duplicate values in the current column
            // if there are no duplicates in the current column then the column is valid
            if (uniqueArray[board[j][i]]) {
                return false
            }
            uniqueArray[board[j][i]] = true;

            console.log("COL: " + uniqueArray[board[j][i]]);
        }
    }

}

// This function uses nested loops to focus on a 3x3 box within the board.
// Then uses more nested loops to focus on the columns and rows within the box
const boxValid = (board) => {

    // first for loop iterates through each 3 x 3 box 
    for (let i = 0; i < dimension - 2; i += 3) {
        // this nested loop focuses on the column of each box
        for (let j = 0; j < dimension - 2; j += 3) {

            //// initializes the values of the array setting to false
            uniqueArray = Array(dimension + 1).fill(false)

            // this nested loop iterates through the current box
            for (let boxRow = 0; boxRow < 3; boxRow++) {
                for (let boxCol = 0; boxCol < 3; boxCol++) {

                    // captures row num in the current box
                    const rowNum = i + boxRow;
                    //captures col num in current box
                    const colNum = j + boxCol;
                    //captures the the value of rowNum and colNum on the board
                    const storedValues = board[rowNum][colNum]
                    // compare the value to to the box array to make sure there are no duplicates
                    if (uniqueArray[storedValues]) {
                        return false;
                    }

                    uniqueArray[storedValues] = true

                    console.log("Box " + uniqueArray[storedValues]);

                }
            }
        }
    }
}

// This function uses conditionals to determine if the each function true or false
// if any function returned is false then the board is not valid
// if all of the functions return true then the board is valid
const isValid = () => {

    if (rowValid(board) === false) {
        console.log("Board is invalid");
        return false;
    } else if (colValid(board) === false) {
        console.log("Board is invalid");
        return false;
    } else if (boxValid(board) === false) {
        console.log("Board is invalid");
        return false;
    } else {
        console.log(" Board is Valid");
        return true;
    }
}

isValid()