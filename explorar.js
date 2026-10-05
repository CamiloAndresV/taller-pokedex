// pokedex

async function explore() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")

    // if (!respuesta.ok) {
    //     console.log("Algo salio mal. Codigo", respuesta.status)
    //     return
    // }
    console.log("Codigo:",respuesta.status)
    const datos = await respuesta.json()
    // console.log(datos)
    console.log("\ntypes\n")

    for (const i of datos.types){
        console.log(i.type.name)
    }
    console.log("\nstats\n")
    
    for (const o of datos.stats){
        console.log(o.stat.name)
        console.log(o.base_stat)
    }
    console.log("\nabilities\n")
    
    for (const u of datos.abilities) {
        console.log(u.ability.name)
    }
}

await explore()

