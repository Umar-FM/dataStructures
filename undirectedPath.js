// Given an edge list, create an undirected adjancency list to determine if there is a path between two nodes.
// Graph could be cyclical

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
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

    return graph;
}

const hasPath = (graph, src, dst,visited) => {
    
    if(src === dst) return true;

    if(visited.has(src)) return false;
    visited.add(src)

    for(let neighbor of graph[src]){
        if(hasPath(graph,neighbor,dst,visited))return true;

    }
    return false;

}
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    //console.log(graph)
    return hasPath(graph,nodeA,nodeB,new Set());
}

console.log(undirectedPath(edges, 'j', 'm')); // -> true