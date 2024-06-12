
function wordSearch(path, trace, r,c, m,n,vis,maze) {

    
    if (r < 0 || r >= m || c < 0 || c >= n || maze[r][c] !== path[0] || vis[r][c]) {
        return false;
    }
    vis[r][c] = 1;

    if(path.length === 1) {
        console.log(trace)
       vis[r][c] = 0;
        return true;
    }
        
       let d =  wordSearch(path.slice(1), trace+'d',r+1, c,m,n,vis,maze)
    
    
   
        let right = wordSearch(path.slice(1) ,trace+'r',r ,c+1,m,n,vis,maze)
    
    
        let u = wordSearch(path.slice(1),trace + 'u', r-1,c,m,n,vis,maze)
    
    
        let l = wordSearch(path.slice(1), trace + 'l',r,c-1,m,n,vis,maze)
        vis[r][c] = 0;
        return l||right||u||d;

    }



let maze = [["A","B","C","E"],
            ["B","F","C","S"],
            ["A","B","E","D"]]
let word = "ABFBED"
let m = maze.length;
let n = maze[0].length
let vis = Array.from({length: m},() => Array(n).fill(0))


for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        let trace = ""
        if (wordSearch(word, trace,i, j, m, n, vis, maze)) {
            console.log("word found : %j :%j",i,j)
            // return true;
        }
    }
}
