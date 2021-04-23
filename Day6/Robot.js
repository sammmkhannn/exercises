const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Town",
    "Grete's House-Shop", "Marketeplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = new Map();
    function addEdge(from,to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for(let [from,to] of edges.map(r=> r.split("-"))) {
        addEdge(from,to);
        addEdge(to,from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

class villageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
   move(destination) {
       if(!roadGraph[this.place].includes(destination)){
           return this;
       } else {
           let parcels = this.parcels.map(p=>{
        if(p.place != this.place)
        return p;
        return {place: destination,address:p.address};
    }).filter(p=>p.place != p.address);
     return  new villageState(destination,parcels);
    
       }
   }
}

let first = new villageState("post Office", [{place:"Post Office", address:"Alice's House"}]);
let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);

