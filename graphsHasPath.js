//DF traversal using an implicit stack in recursion
const hasPath = (graph,src,dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]){
        if(hasPath(graph,neighbor,dst)){return true;}
    }

    return false;
}

const hasPathBF = (graph,src,dst) => {
    

    const queue = [src];

    while(queue.length > 0){
        const current = queue.shift();
        if (current === dst) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
console.log("Path from f to k using DF traversal:")
console.log(hasPath(graph, 'f', 'k')); // true

console.log("Path from f to k using BF traversal:")
console.log(hasPathBF(graph, 'f', 'k')); // true