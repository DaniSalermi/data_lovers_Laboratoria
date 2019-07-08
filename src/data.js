/* Manejo de data */

// CREACIÓN GRÁFICO DE LÍNEAS PARA LA DATA:

function mostrarIndicador() {
  console.log(selectIndicator);
  console.log(selectedData.indicators[selectIndicator]);

  // Inicializamos los arreglos vacios.
  let arrayToChart = [];
  let labelArray = [];
  let indicatorNumber = selectIndicator;

  // Estructura repetitiva para generar los puntos del gráfico en arreglo de objetos, a partir de la data. (no incluye los valores que sean igual cero)
  for (let year in selectedData.indicators[indicatorNumber].data) {
    if (selectedData.indicators[indicatorNumber].data[year] !== "") {
      // Agregando al arreglo de los valores
      arrayToChart.push(selectedData.indicators[indicatorNumber].data[year]);
      // Agregando al arreglo de los años
      labelArray.push(year);
    }
  }
  console.table(arrayToChart);

  // Generando el Gráfico
  var chart = new Chart(graphPlaceholder, {
    type: "line",
    maintainAspectRatio: false,
    data: {
      labels: labelArray,
      datasets: [
        {
          label: selectedData.indicators[indicatorNumber].indicatorName,
          data: arrayToChart,
          borderColor: "#6B48FF",
          pointBackgroundColor: "#91CAC5",
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      ]
    }
  });
}

//Agregando dona con el valor maximo
function showDoughnutMaxValue() {
  let indicatorNumber = selectIndicator;
  let maxValue = 0;
  let difValue = 0;
  for (let year in selectedData.indicators[indicatorNumber].data) {
    if (selectedData.indicators[indicatorNumber].data[year] !== "") {
      if (selectedData.indicators[indicatorNumber].data[year] > maxValue) {
        maxValue = selectedData.indicators[indicatorNumber].data[year];
      }
    }
  }
  difValue = 100 - maxValue;

  var config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [maxValue, difValue],
          backgroundColor: ["#6b48ff", "darkgray"]
        }
      ]
    },
    options: {
      layout: {
        padding: {
          left: 640,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      title: {
        display: true,
        text: "Valor Máximo",
        position: "bottom"
      },
      cutoutPercentage: 80,
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: maxValue + "%",
              font: {
                size: "100"
              },
              color: "grey"
            }
          ]
        }
      }
    }
  };
  var doughnutMax = new Chart(chartMax, config);
}

// Agrenado dona con valor promedio
function showDoughnutAverageValue() {
  let indicatorNumber = selectIndicator;
  let count = 0;
  let average = 0;
  let mount = 0;
  let minValue = 0;
  for (let year in selectedData.indicators[indicatorNumber].data) {
    if (selectedData.indicators[indicatorNumber].data[year] !== "") {
      mount = mount + selectedData.indicators[indicatorNumber].data[year];
      count = count + 1;
    }
  }
  average = mount / count;
  console.log(average);
  minValue = 100 - average;

  var config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [average, minValue],
          backgroundColor: ["#6b48ff", "darkgray"]
        }
      ]
    },
    options: {
      cutoutPercentage: 80,
      layout: {
        padding: {
          left: 0,
          right: 640,
          top: 0,
          bottom: 0
        }
      },
      title: {
        display: true,
        text: "Valor Promedio",
        position: "bottom"
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: average + "%",
              font: {
                size: "100"
              },
              color: "grey"
            }
          ]
        }
      }
    }
  };
  var doughnutMax = new Chart(chartAverage, config);
}
