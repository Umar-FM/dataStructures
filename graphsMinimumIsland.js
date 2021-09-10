// Given a grid of water and land, find the size of the smallest island

//Algorithm: iterate through each element, if land is found, explore adjacent elements using DFS and return count. Compare to determine min size

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

const minimumIsland = (grid) => {
    var visited = new Set();
    var min = Number.MAX_SAFE_INTEGER;

    for(var r=0;r<grid.length;r++){
        for(var c=0;c<grid[r].length;c++){
            currentMin = explore(grid,r,c,visited);
            if (currentMin != 0 && currentMin < min) min = currentMin;
        }
    }

    if(!(min==Number.MAX_SAFE_INTEGER)) return min;
    else return 0;
}

const explore = (grid,r,c,visited) =>{
    // bounds check
    if (r < 0 || r>=grid.length || c<0 || c>=grid[r].length) return 0;
    if (grid[r][c]==='W') return 0;
    if (visited.has(String([r,c]))) return 0;
    visited.add(String([r,c]));

    let count = 1;

    count += explore(grid,r+1,c,visited);
    count += explore(grid,r-1,c,visited);
    count += explore(grid,r,c+1,visited);
    count += explore(grid,r,c-1,visited);

    return count;

}

console.log(minimumIsland(grid)); // -> 2