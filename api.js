// async function obtenerClima() {
//   const respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=4.6&longitude=-74.1&current=temperature_2m");
//   const datos = await respuesta.json();
//   console.log(datos);
// }

// obtenerClima();


async function obtener() {
    const respuesta1 = await fetch("https://dragonball-api.com/api/characters/2")

    if (!respuesta1.ok) {
        console.log("Algo salio mal. Codigo", respuesta1.status)
        return
    }

    const datos1 = await respuesta1.json()
    console.log(datos1)
}

obtener()