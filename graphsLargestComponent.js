


const largestComponent = (graph) => {
    const visited = new Set();
    let max = 0;

    for(let node in graph){
        var count = 0
        var currentCount = explore(graph,node,visited)
        if(currentCount>max){
            max = currentCount;
            //console.log("--------------------")
        }
        
    }
    return max;
}

const explore = (graph,current,visited) => {
    if(visited.has(String(current)))return 0;
    visited.add(String(current));
    
    let count =1;
    


    for (let neighbor of graph[current]){
        count += explore(graph,neighbor,visited)
    }

    //console.log(count);
    return count;
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  })); // -> 4