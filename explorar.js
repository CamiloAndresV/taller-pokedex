// pokedex

async function explore() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/")

    // if (!respuesta.ok) {
    //     console.log("Algo salio mal. Codigo", respuesta.status)
    //     return
    // }
    const datos = await respuesta.json()
    console.log(datos)

    // for (let i = 0 ; datos.results; i++){
    //     console.log()
    // }

    // for (i=0 ; datos.stats; i++){
    //     console.log(datos.stat.name)
    //     console.log(datos.stat.base_stat)
    // }

    // for (i=0 ; datos.abilities; i++){
    //     console.log(datos.abilities.ability.name)
    // }
    
}

explore()