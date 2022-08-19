let cities={
    Pert:[["Aberdin",81],["Edinburg",45],["Fort William",105],["Glazgo",61],["Inverness",112]],
    Aberdin:[["Edinburg",81],["Fort William",147],["Glazgo",142],["Inverness",107],["Pert",81]],
    Edinburg:[["Aberdin",120],["Fort William",132],["Glazgo",42],["Inverness",157],["Pert",45]],
    Fort_William:[["Aberdin",147],["Edinburg",132],["Glazgo",108],["Inverness",66],["Pert",105]],
    Glazgo:[["Aberdin",142],["Edinburg",42],["Fort William",108],["Inverness",168],["Pert",61]],
    Inverness:[["Aberdin",105],["Edinburg",157],["Fort William",66],["Glazgo",168],["Pert",112]]
}

let road=[[process.argv[2]],0]

function prim(cities,city){
    const arr=cities[city]
    
    arr.sort((a,b)=>{
        if(a[1]>b[1]){return 1}
        if(a[1]<b[1]){return -1}
        if(a[1]=b[1]){return 0}
    })

    road[1]=road[1]+arr[0][1]
    road[0].push(arr[0][0])

    let del=cities[arr[0][0]].findIndex(element=>element[0]===city)
    cities[arr[0][0]].splice(del,1)
    arr.shift()
    //console.log(cities)

    
    console.log(road)
    prim(cities,road[0][road[0].length-1])
    
}

prim(cities,process.argv[2])