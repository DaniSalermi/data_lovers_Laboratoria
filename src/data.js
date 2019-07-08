/* Manejo de data */

function mostrarIndicador() {
 console.log(selectIndicator);
 console.log(selectedData.indicators[selectIndicator]);

 // Inicializamos los arreglos vacios.
 let arrayToChart = [];
 let labelArray = [];
 let indicatorNumber = selectIndicator;

 // Estructura repetitiva para generar los puntos del gráfico en arreglo de objetos, a partir de la data.
 for (let year in selectedData.indicators[indicatorNumber].data) {
   if (selectedData.indicators[indicatorNumber].data[year] === "") {
     selectedData.indicators[indicatorNumber].data[year] = 0;
   }
   // Agregando al arreglo de los valores
   arrayToChart.push(selectedData.indicators[indicatorNumber].data[year]);
   // Agregando al arreglo de los años
   labelArray.push(year);
 }
 console.table(arrayToChart);

 // Generando el Gráfico
 var chart = new Chart(graphPlaceholder, {
   type: "line",
   data: {
     labels: labelArray,
     datasets: [
       {
         label: selectedData.indicators[indicatorNumber].indicatorName,
         data: arrayToChart
       }
     ]
   }
 });
}

