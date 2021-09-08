//use BFS to find the shortest path

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)

    }
    //console.log(graph)
    return graph;
}

const shortestPath = (edges,nodeA,nodeB) => {
    graph = buildGraph(edges);
    const visited = new Set();
    
    const queue = [{node:nodeA,distance:0}];

    while(queue.length > 0){
        const current = queue.shift();
        
        //console.log(current.node + ", " + current.distance)
        if(current.node === nodeB)return current.distance;
        
        for(let neighbor of graph[current.node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push({node:neighbor,distance:current.distance+1})
            }
            
        }
    }

    return -1;
}




console.log("The shortest path is: " + shortestPath(edges, 'w', 'z')); // -> 2

