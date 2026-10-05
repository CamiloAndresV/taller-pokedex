// pokedex
const prompt = require('prompt-sync')();


// let nombre = (prompt("Ingresa el nombre de un pokemon: ")).toLowerCase()
let nombre1 = (prompt("Ingresa el nombre del primer pokemon: ")).toLowerCase()
let nombre2 = (prompt("Ingresa el nombre del segundo pokemon: ")).toLowerCase()
let stat = (prompt("ingresa el stat de comparación: ")).toLowerCase()


async function buscarPokemon(nombre) {
    let url
    url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    if (!url.ok) {
        // console.log("Respuesta: ",url.status)
        return null
    } else {
        let datos = await url.json()
        return datos
    }
}

// esto es porque no se puede usar await en el nivel superior de un archivo, solo dentro de funciones async, por lo del common js ya que no esta como ES module, por eso se hace una funcion async y se llama a esa funcion
async function respuesta() {
    // console.log(await mostrarFicha(await buscarPokemon(nombre)))
    console.log(await compararPokemon(await buscarPokemon(nombre1), await buscarPokemon(nombre2), stat));
    
}
respuesta()

async function mostrarFicha(datos) {
    if (datos == null) {
        return "nada que mostrar"
    } else {
        let lista = []
        lista.push(datos.name.toUpperCase(), datos.id, datos.height * 10, datos.weight / 10)
        console.log("\nNombre:",lista[0],"ID:", lista[1], "Altura:",lista[2]+" cm", "Peso:",lista[3]+" kg")

        console.log("\nTipos")
        let tipos = []
        for (const i of datos.types){
            tipos.push(i.type.name)
        }
        console.log(tipos.join(" / "))

        console.log("\nstats")
        let stat = []
        for (const o of datos.stats){
        stat.push({nombre:o.stat.name, valor:o.base_stat})
        }
        
        for (st of stat) {
            console.log(st.nombre, st.valor)
        }

        console.log("\nhabilidades");
        
        for (const u of datos.abilities) {
            if (u.is_hidden == true) {
                console.log(u.ability.name+":" +" (oculta)")
            } else {
            console.log(u.ability.name)
            }
        }
    }
}

async function obtenerStat(datos, nombreStat) {
    for (let i of datos.stats) {
        if (i.stat.name === nombreStat) {
            return i.base_stat
        }
    }
    return null
}

async function compararPokemon(nombre1, nombre2, stat) {
    if (stat == null) {
        console.log("stats validas: hp , attack , defense , special-attack , special-defense , speed")
        return
    } else {
        let statUno = await obtenerStat(nombre1, stat);
        let statDos = await obtenerStat(nombre2, stat);

        if (statUno > statDos) {
            return(nombre1.name + " gana en " + stat)
        } else if(statDos > statUno) {
            return(nombre2.name + " gana en " + stat)
        } else {
            return("Empate en "+ stat);
        }
    }
}
