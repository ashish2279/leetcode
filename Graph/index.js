class Graph {
    constructor(n) {
        this.nodes = n;
        this.adjList = new Map();
        this.indegree = new Map();
        for(let i=0 ;i <n ;i++) {
            this.adjList.set(i, [])
            this.indegree.set(i, 0)
        }
    }

    addEdge(u,v) {
        this.adjList.get(u).push(v);
        this.indegree.set(v, this.indegree.get(v) + 1);
    }

    print() {
        console.log(this.adjList);
    }


    topologicalSorting() {
        let q = [];
        let res = []
        this.indegree.forEach((ind, node) => {
            console.log(node,ind)
            if(ind === 0) {
                q.push(node);
            }
        })
        while(q.length > 0) {
            console.log(q)
            let temp = q.shift();
            res.push(temp)
            this.adjList.get(temp).forEach((t) => {
                this.indegree.set(t,this.indegree.get(t)-1);
            if(this.indegree.get(t) === 0)
                q.push(t);
            })
            
        }

        if(res.length != this.nodes) {
            console.log('There is a loop ');
            return -1;
        }
        return res;
    }

    allTopologicalSorts() {
        let res = [];
        let visited = new Map();

        this.indegree.forEach((_, node) => {
            visited.set(node, false);
        });

        const backtrack = (path) => {
            if (path.length === this.nodes) {
                console.log(path);
                res.push([...path]);
                return;
            }

            for (let [node, ind] of this.indegree) {
                if (ind === 0 && !visited.get(node)) {
                    visited.set(node, true);
                    path.push(node);

                    // Decrease the in-degree of adjacent nodes
                    this.adjList.get(node).forEach((neighbor) => {
                        this.indegree.set(neighbor, this.indegree.get(neighbor) - 1);
                    });

                    // Explore
                    backtrack(path);

                    // Unchoose the node
                    this.adjList.get(node).forEach((neighbor) => {
                        this.indegree.set(neighbor, this.indegree.get(neighbor) + 1);
                    });

                    path.pop(); 
                    visited.set(node, false);
                }
            }
        };

        backtrack([]);
        return res;
    }   

    dfs () {
        console.log("\nDFS : ")
        let vis = new Array(this.nodes).fill(0);
        let res = ''
        for (let i = 0 ; i<this.nodes ;i++ ) {
            if(!vis[i]){
                let st = [];
                st.push(i);
                while(st.length > 0) {
                    let t = st.pop();
                    res += t + '->';
                    vis[t] = 1;
                    this.adjList.get(t).forEach((node) => {
                        if(!vis[node]){
                            st.push(node)
                        }
                    })
                }
            }
            
        }
        res = res.slice(0,res.length-2)
        console.log(res)
    }
    dfsArrival () {
        console.log("\nDFS : ")
        let vis = new Array(this.nodes).fill(0);
        let arrival = new Array(this.nodes).fill(-1);
        let dest = new Array(this.nodes).fill(-1);
        let res = ''
        let time = 0;
        for (let i = 0;i<this.nodes ;i++ ) {
            if(!vis[i]){
                let st = [];
                st.push(i);
                while(st.length > 0) {
                    let t = st.pop();
                    res += t + '->';
                    vis[t] = 1;
                    arrival[t] = ++time;
                    this.adjList.get(t).forEach((node) => {
                        if(!vis[node]){
                            st.push(node)
                        }
                    })
                    dest[t] = ++time;
                }
            }
            
        }
        console.log()
    }

    bfs () {
        console.log("\nBFS : ")
        let vis = new Array(this.nodes).fill(0);
        let res = ''
        for (let i = 0 ; i<this.nodes ;i++ ) {
            if(!vis[i]){
                let q = [];
                q.push(i);
                while(q.length > 0) {
                    let t = q.shift();
                    res += t + '->';
                    vis[t] = 1;
                    this.adjList.get(t).forEach((node) => {
                        if(!vis[node]){
                            q.push(node)
                        }
                    })
                }
            }
            
        }
        res = res.slice(0,res.length-2)
        console.log(res)
    }
}

if(require.main === module) {
    let G = new Graph(6)
    G.addEdge(0,1);
    G.addEdge(1,2);
    G.addEdge(2,3);
    G.addEdge(1,4);
    G.addEdge(4,5);
    G.addEdge(0,5)
     G.print();
    // console.log(G.allTopologicalSorts())
    G.dfs();
    G.bfs();
    // console.log(G.topologicalSorting())
}
