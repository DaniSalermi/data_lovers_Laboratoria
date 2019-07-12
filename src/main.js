/* Manejo del DOM */
/*Varibles para obtener data de cada país, ya separada*/
//console.log(WORLDBANK);
const chileData = window.WORLDBANK.CHL;
const peruData = window.WORLDBANK.PER;
const mexicoData = window.WORLDBANK.MEX;
const brasilData = window.WORLDBANK.BRA;

/*Lectura y manejo de la variable país*/
var urlParams = new URLSearchParams(window.location.search);
let selectCountry = urlParams.get("country");
let labelArrayGraph = null;
let arrayToChartGraph = null;
// console.log(selectCountry);

let selectedData;
switch (selectCountry) {
  case "chile":
    selectedData = chileData;
    document.getElementById("bannerImg").classList.add("chileBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Chile"));
    break;
  case "peru":
    selectedData = peruData;
    document.getElementById("bannerImg").classList.add("peruBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Perú"));
    break;
  case "mexico":
    selectedData = mexicoData;
    document.getElementById("bannerImg").classList.add("mexicoBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("México"));
    break;
  case "brasil":
    selectedData = brasilData;
    document.getElementById("bannerImg").classList.add("brasilBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Brasil"));
    break;
}

selectedData.indicators = window.data.orderIndicators(selectedData.indicators);

// For para recorrer la lista de indicadores y mostrarlos en el select
for (let i = 0; i < selectedData.indicators.length; i++) {
  let indicatorList = document.getElementById("indicatorsSelect");
  let option = document.createElement("option");
  option.value = i;
  option.text = selectedData.indicators[i].indicatorName;
  indicatorList.add(option);
}

// Evento del DOM para encontrar el indicador y generar gráficos
document.getElementById("indicatorsSelect").addEventListener("change", () => {
  const selectedIndicator = document.getElementById("indicatorsSelect").value;

  labelArrayGraph = window.data.informationToGenerateGraph(
    selectedData,
    selectedIndicator
  ).labelArray;
  arrayToChartGraph = window.data.informationToGenerateGraph(
    selectedData,
    selectedIndicator
  ).arrayToChart;

  // Generando el Gráfico de líneas
  // eslint-disable-next-line no-undef
  new Chart(graphPlaceholder, {
    type: "line",
    maintainAspectRatio: false,
    data: {
      labels: labelArrayGraph,
      datasets: [
        {
          label: selectedData.indicators[selectedIndicator].indicatorName,
          data: arrayToChartGraph,
          borderColor: "#6B48FF",
          pointBackgroundColor: "#91CAC5",
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      ]
    }
  });

  // Generando el gráfico de donas valor máximo

  const maxValueOfIndicator = window.data.maximumValueCalculation(
    selectedData,
    selectedIndicator
  ).maxValueOfIndicator;

  const maxValueDifference = window.data.maximumValueCalculation(
    selectedData,
    selectedIndicator
  ).maxValueDifference;

  var configMaximumGraph = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [maxValueOfIndicator, maxValueDifference],
          backgroundColor: ["#6b48ff", "darkgray"]
        }
      ]
    },
    options: {
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
              text: maxValueOfIndicator + "%",
              font: {
                size: "300"
              },
              color: "grey"
            }
          ]
        }
      }
    }
  };
  // eslint-disable-next-line no-undef
  new Chart(chartMax, configMaximumGraph);

  // Generando el gráfico de donas valor promedio
  const averageValueOfIndicator = window.data.averageValueCalculation(
    selectedData,
    selectedIndicator
  ).averageValueOfIndicator;
  const averageValueDifference = window.data.averageValueCalculation(
    selectedData,
    selectedIndicator
  ).averageValueDifference;

  var configAverageGraph = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [averageValueOfIndicator, averageValueDifference],
          backgroundColor: ["#6b48ff", "darkgray"]
        }
      ]
    },
    options: {
      cutoutPercentage: 80,
      title: {
        display: true,
        text: "Valor Promedio",
        position: "bottom"
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: averageValueOfIndicator + "%",
              font: {
                size: "300"
              },
              color: "grey"
            }
          ]
        }
      }
    }
  };
  // eslint-disable-next-line no-undef
  new Chart(chartAverage, configAverageGraph);
});

// Contextos para generar los gráficos
var graphPlaceholder = document
  .getElementById("indicatorsChart")
  .getContext("2d");
var chartMax = document.getElementById("doughnutMax").getContext("2d");
var chartAverage = document.getElementById("doughnutAverages").getContext("2d");
