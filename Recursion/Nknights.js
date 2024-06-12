function isValid(r,c,n) {
    if(r >= 0 && r<n && c>=0 &&  c<n )
        return true;
    return false;
}

function isSafe(r,c,board,n) {

    if(isValid(r+2,c-1,n) && board[r+2][c-1])
        return false;
    
    if(isValid(r+2,c+1,n) && board[r+2][c+1])
        return false;

    if(isValid(r-2,c-1,n) && board[r-2][c-1])
        return false;
    if(isValid(r-2,c+1,n) && board[r-2][c+1])
        return false;

    if(isValid(r+1,c-2,n) && board[r+1][c-2])
        return false;
    if(isValid(r+1,c+2,n) && board[r+1][c+2])
        return false;

    if(isValid(r-1,c-2,n) && board[r-1][c-2])
        return false;

    if(isValid(r-1,c+2,n) && board[r-1][c+2])
        return false;
    
    return true

}



function print(board) {
    let text = ""
    for(let row of board) {
        for (let char of row) {
            if(char)
                text += 'K' + ' ';
            else
                text += '-' + ' ';
        }
        text += '\n';
    }
    console.log(text)
}




function NKnight(r,c,board,n,knights) {
    if(knights===n){
       // console.log(board)
        print(board);
        return;
    }
    
    for(let i=r;i<n;i++){
        for(let j=(i==r)?c:0;j<n;j++){
            if (isSafe(i,j,board,n)){
                board[i][j] =1;
                NKnight(i,j+1,board,n,knights+1)
                board[i][j] =0;
            }
        }
        
    }
}

let n=4
let board = Array.from({length: n},() => Array(n).fill(0))
NKnight(0,0,board,n,0)