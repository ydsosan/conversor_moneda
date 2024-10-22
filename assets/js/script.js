const TipoMoneda = document.querySelector("#tipo_moneda");
const cantidadMoneda = document.querySelector("#cantidad");
const cambioMoneda = document.querySelector("#cambio_moneda");
const cambiarValor = document.querySelector("#valor");
const apiMoneda = 'https://mindicador.cl/api/'


// Fetch Exchange Rate and Update the DOM
//Event listeners
//TipoMoneda.addEventListener('change', calculate);
//cantidadMoneda.addEventListener('input', calculate);

cambioMoneda.addEventListener('click', async() =>{
    try{
        const response = await fetch(apiMoneda);
        const jsondata = await response.json();
        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
    const tipo_moneda = TipoMoneda.value;
    //const dia = Date.now();
    //const today = new Date(dia);
    //const day = today.toISOString();
   await fetch(`https://mindicador.cl/api/${tipo_moneda}`)
       .then(res => res.json())
       .then(data => {
           const serie = data.serie[0];
           const cantidad = serie.valor;
           //grafico
           cambiarValor.innerText = (cantidadMoneda.value * cantidad).toFixed(2);



       });
});


