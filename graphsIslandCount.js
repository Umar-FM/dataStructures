//given a grid of 'L' (Land) and 'W' (Water), find the number of islands
//this code converts the grid into an adjacency list graph then does a simple DFS for each 'L' found
//if an 'L' has not been visited before and is not connected to a visited 'L', it is its own island and increments the count

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
const gridToGraph = (grid) => {
    graph = {};

    //first loop through full grid and create objects for 'L' values
    for (var row=0;row<grid.length;row++){
        for(var col=0;col<grid[0].length;col++){
            if(grid[row][col]==='L'){
                graph[[row,col]]=[];
            }
        }
    }

    //then loop through full grid again and populate neighbor values
    for (var row=0;row<grid.length;row++){
        for(var col=0;col<grid[row].length;col++){
            if(grid[row][col]==='L'){
                if(row>=1 && grid[row-1][col]==='L') graph[(row-1)+','+col].push([row,col]);
                if(row<=(grid.length-2) && grid[row+1][col]==='L') graph[(row+1)+','+col].push([row,col]);
                if(col>=1 && grid[row][col-1]==='L') graph[row+','+(col-1)].push([row,col]);
                if(col<=(grid[row].length-2) && grid[row][col+1]==='L') graph[row+','+(col+1)].push([row,col]);
            }
        }
    }
    //console.log(graph)
    // console.log(graph['1,1'])
    // var row =1;
    // var col = 1;
    // console.log(graph[row+','+col])
    return graph;
}


const islandCount = (grid) => {
    graph = gridToGraph(grid);
    visited = new Set();
    count = 0;

    //traverse through each element. If 'L' and not visited, DFS and add all neighbor elements to visited and increment count
    for (var row=0;row<grid.length;row++){
        for(var col=0;col<grid[row].length;col++){
            if(grid[row][col]==='L' && !(visited.has(String([row,col])))){
                //console.log(String([row,col]))
                explore(graph,String([row,col]),visited);
                //console.log("Visited: " + new Array(...visited).join(' '));
                count+=1;
            }
        }
    }

    return count;
}

const explore = (graph,current,visited) => {
    if(visited.has(String(current)))return false;
    visited.add(String(current));
    

    for (let neighbor of graph[current]){
        explore(graph,String(neighbor),visited)
    }

    return true;
}

console.log(islandCount(grid)); // -> 3