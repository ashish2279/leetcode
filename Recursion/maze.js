

function ways(path, r,c, m,n) {
if(r == m-1 && c== n-1) {
    console.log(path)
    return;
}

if(!maze[r][c]) {
    return;
}

if(r<m-1) {
    ways(path + 'D', r+1, c,m,n)
}

if(c<n-1) {
    ways(path + 'R' ,r ,c+1,m,n)
}

if(r<m-1 && c<n-1) {
    ways(path + 'T', r+1,c+1,m,n)
}

}


function allPath(path, r,c, m,n,vis,maze) {
    if(r == m-1 && c== n-1) {
        console.log(path)
        return;
    }
    
    if(!maze[r][c] || vis[r][c]) {
        return;
    }
    vis[r][c] = 1;
    if(r<m-1) {
        
        allPath(path + 'D', r+1, c,m,n,vis,maze)
    }
    
    if(c<n-1) {
        allPath(path + 'R' ,r ,c+1,m,n,vis,maze)
    }
    
    if(r>0) {
        allPath(path + 'U', r-1,c,m,n,vis,maze)
    }
    if(c>0) {
        allPath(path + 'L', r,c-1,m,n,vis,maze)
    }
    vis[r][c] = 0;
    }


let maze = [ [1, 0, 0, 0],
[1, 1, 0, 1],
[1, 1, 0, 0],
[0, 1, 1, 1]]
let m = maze.length;
let n = maze[0].length;
//ways('',0,0,m,n )

let vis = Array.from({length: m},() => Array(n).fill(0))
allPath('',0,0,m,n,vis,maze)