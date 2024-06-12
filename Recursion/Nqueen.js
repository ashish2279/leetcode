function isSafe(r,c,board,n) {
    for(let i = r-1; i >=0; i--) {
        if(board[i][c])
            return false;
    }

    let i = r-1, j = c-1;

    while(i>=0 && j>= 0) {
        if(board[i][j])
            return false;
        i--;
        j--;
    }

    i = r-1, j = c+1;
    while( i>=0  && j<n) {
        if(board[i][j])
            return false;
        i--;
        j++;
    }

    return true;
}


function print(board) {
    let text = ""
    for(let row of board) {
        for (let char of row) {
            if(char)
                text += 'Q' + ' ';
            else
                text += 'X' + ' ';
        }
        text += '\n';
    }
    console.log(text)
}




function NQueen(r,board,n) {

    if(r===board.length){
        console.log(board)
        print(board);
        return;
    }
    
    for(let j=0;j<n;j++){
        if (isSafe(r,j,board,n)){
            board[r][j] =1;
            NQueen(r+1,board,n)
            board[r][j] =0;
        }
    }
}

let n=4
let board = Array.from({length: n},() => Array(n).fill(0))
NQueen(0,board,n)